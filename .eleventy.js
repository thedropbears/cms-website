const yaml = require("js-yaml");
const { DateTime } = require("luxon");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const htmlmin = require("html-minifier");
const Image = require("@11ty/eleventy-img");

// Image shortcode for responsive images
async function imageShortcode(src, alt, sizes = "100vw") {
  if (!src) {
    throw new Error(`Missing image path: ${src}`);
  }

  let metadata = await Image(src, {
    widths: [300, 600, 900, 1200],
    formats: ["webp", "jpeg"],
    urlPath: "/static/img/",
    outputDir: "./_site/static/img/",
    filenameFormat: function (id, src, width, format) {
      const extension = format;
      const name = src.split("/").pop().split(".")[0];
      return `${name}-${width}w.${extension}`;
    }
  });

  let imageAttributes = {
    alt,
    sizes,
    loading: "lazy",
    decoding: "async",
  };

  return Image.generateHTML(metadata, imageAttributes);
}

module.exports = function (eleventyConfig) {
  // Disable automatic use of your .gitignore
  eleventyConfig.setUseGitIgnore(false);

  // Merge data instead of overriding
  eleventyConfig.setDataDeepMerge(true);

  // Add image shortcode
  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);
  eleventyConfig.addJavaScriptFunction("image", imageShortcode);

  // human readable date
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(
      "dd LLL yyyy"
    );
  });

  // Date formatting (machine readable)
  eleventyConfig.addFilter("machineDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-MM-dd");
  });

  // Array slice filter for collections
  eleventyConfig.addFilter("slice", (array, start, end) => {
    return array.slice(start, end);
  });

  // HTML escape filter for data attributes
  eleventyConfig.addFilter("htmlescape", (content) => {
    return content
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;')
      .replace(/\n/g, ' ')
      .replace(/\r/g, '');
  });

  // Syntax Highlighting for Code blocks
  eleventyConfig.addPlugin(syntaxHighlight);

  // To Support .yaml Extension in _data
  // You may remove this if you can use JSON
  eleventyConfig.addDataExtension("yaml", (contents) => yaml.load(contents));

  // Add collections
  eleventyConfig.addCollection("pages", function(collection) {
    return collection.getFilteredByGlob("src/_pages/*.md");
  });
  
  eleventyConfig.addCollection("robots", function(collection) {
    return collection.getFilteredByGlob("src/_robots/*.md").sort((a, b) => b.data.year - a.data.year);
  });
  
  eleventyConfig.addCollection("sponsors", function(collection) {
    return collection.getFilteredByGlob("src/_sponsors/*.md");
  });
  
  eleventyConfig.addCollection("notices", function(collection) {
    return collection.getFilteredByGlob("src/_notices/*.md");
  });

  // Copy Static Files to /_Site
  eleventyConfig.addPassthroughCopy({
    "./src/admin/config.yml": "./admin/config.yml",
    "./node_modules/alpinejs/dist/cdn.min.js": "./static/js/alpine.js",
    "./node_modules/prismjs/themes/prism-tomorrow.css":
      "./static/css/prism-tomorrow.css",
    "./node_modules/@phosphor-icons/web/src/regular/style.css": "./static/css/phosphor-regular.css",
    "./node_modules/@phosphor-icons/web/src/fill/style.css": "./static/css/phosphor-fill.css",
    // Copy Phosphor font files
    "./node_modules/@phosphor-icons/web/src/regular/Phosphor.woff2": "./static/css/Phosphor.woff2",
    "./node_modules/@phosphor-icons/web/src/regular/Phosphor.woff": "./static/css/Phosphor.woff",
    "./node_modules/@phosphor-icons/web/src/regular/Phosphor.ttf": "./static/css/Phosphor.ttf",
    "./node_modules/@phosphor-icons/web/src/fill/Phosphor-Fill.woff2": "./static/css/Phosphor-Fill.woff2",
    "./node_modules/@phosphor-icons/web/src/fill/Phosphor-Fill.woff": "./static/css/Phosphor-Fill.woff",
    "./node_modules/@phosphor-icons/web/src/fill/Phosphor-Fill.ttf": "./static/css/Phosphor-Fill.ttf",
  });

  // Copy Image Folder to /_site
  eleventyConfig.addPassthroughCopy("./src/static/img");

  // Copy favicon to route of /_site
  eleventyConfig.addPassthroughCopy("./src/favicon.ico");

  // Minify HTML
  eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
    // Eleventy 1.0+: use this.inputPath and this.outputPath instead
    if (outputPath && outputPath.endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }

    return content;
  });

  eleventyConfig.addShortcode("youtube", function(id, title = "YouTube video") {
    return `<div class="responsive-iframe">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/${id}" 
        title="${title}" frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen></iframe>
    </div>`;
  });

  // Let Eleventy transform HTML files as nunjucks
  // So that we can use .html instead of .njk
  return {
    dir: {
      input: "src",
    },
    htmlTemplateEngine: "njk",
  };
};
