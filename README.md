# The Drop Bears Website

This is the official website for FRC Team 4774, The Drop Bears, from Sydney, Australia. The site is built using [11ty (Eleventy)](https://www.11ty.dev/) as a static site generator and [Decap CMS](https://decapcms.org/) (formerly Netlify CMS) for content management.

## Features

- **Responsive Design**: Mobile-friendly layouts built with Tailwind CSS
- **Content Management**: Edit content through a user-friendly CMS
- **Fast Performance**: Static site generation for optimal load times
- **SEO Optimized**: Built-in meta tags and semantic HTML
- **Accessible**: WCAG-compliant with proper semantic markup

## Icons

This project uses [Phosphor Icons](https://phosphoricons.com/) for consistent, scalable vector icons throughout the interface.

### Using Icons

To use an icon in your templates, add an `<i>` element with the appropriate Phosphor class:

```html
<!-- Regular weight icons (default) -->
<i class="ph ph-house"></i>

<!-- Fill style icons -->
<i class="ph-fill ph-heart"></i>

<!-- With additional styling -->
<i class="ph ph-arrow-left w-4 h-4 mr-2 text-primary"></i>
```

### Available Icon Weights

Phosphor Icons comes with multiple weights. The project currently includes:

- Regular (default): `ph ph-icon-name`
- Fill: `ph-fill ph-icon-name`

To add other weights (Thin, Light, Bold, Duotone), update the imports in `src/_includes/partials/head.njk`.

### Documentation

For a complete list of available icons and more documentation:

- [Phosphor Icons Website](https://phosphoricons.com/)
- [Phosphor Icons GitHub](https://github.com/phosphor-icons/phosphor-web)

## Collections

The site includes the following content collections:

- Pages (`src/_pages/`)
- Robots (`src/_robots/`)
- Sponsors (`src/_sponsors/`)
- Notices (`src/_notices/`)
- Settings (`src/_data/`)

**Blog posts have been removed from this site.**

## Development Setup

### Prerequisites

- Node.js (v14 or newer)
- npm or yarn

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/thedropbears/team-website.git
   cd team-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and visit:
   ```
   http://localhost:8080
   ```

5. For local CMS testing, run the Netlify CMS proxy server in a separate terminal:
   ```bash
   npx netlify-cms-proxy-server
   ```

## Build for Production

To build the site for production:

```bash
npm run build
```

The built site will be in the `_site` directory.

## Deployment

The site is configured for deployment on either Cloudflare Pages or Netlify:

1. Connect your GitHub repository to Cloudflare Pages or Netlify
2. Set the build command to `npm run build`
3. Set the publish directory to `_site`

## Content Editing

You can edit content through the CMS at `/admin/` on your deployed site or local development environment.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
