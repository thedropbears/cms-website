module.exports = {
  server: {
    baseDir: "_site",
    routes: {
      "/404": "_site/404.html"
    }
  },
  files: "_site",
  port: 8080,
  notify: false,
  open: false,
  // Custom middleware to handle 404 errors
  middleware: [
    {
      route: "",
      handle: function (req, res, next) {
        // If the request is for a file that doesn't exist and it's not an asset
        if (!req.url.includes('.') || req.url.endsWith('.html')) {
          const fs = require('fs');
          const path = require('path');
          
          // Check if the requested file exists
          const filePath = path.join('_site', req.url);
          const indexPath = path.join('_site', req.url, 'index.html');
          const htmlPath = req.url.endsWith('.html') ? filePath : filePath + '.html';
          
          // If none of the possible paths exist, serve 404
          if (!fs.existsSync(filePath) && 
              !fs.existsSync(indexPath) && 
              !fs.existsSync(htmlPath)) {
            
            // Only serve 404 for HTML requests (not assets)
            const accepts = req.headers.accept || '';
            if (accepts.includes('text/html')) {
              const notFoundPath = path.join('_site', '404.html');
              if (fs.existsSync(notFoundPath)) {
                res.statusCode = 404;
                res.setHeader('Content-Type', 'text/html');
                return res.end(fs.readFileSync(notFoundPath));
              }
            }
          }
        }
        next();
      }
    }
  ]
};
