# The Drop Bears Website

## putting code on prod

1.  create a branch from dev
2.  make changes
3.  merge to dev
4.  ask team for feedback on dev preview https://preview.dropbears.org.au
5.  create pull request to prod
6.  get mentors to approve
7.  get checks to pass
8.  merge
9.  yay

## Icons

This project uses [Phosphor Icons](https://phosphoricons.com/) for scalable vector icons throughout the interface.

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

## Collections

The site includes the following content collections:

- Pages (`src/_pages/`)
- Robots (`src/_robots/`)
- Sponsors (`src/_sponsors/`)
- Notices (`src/_notices/`)
- Settings (`src/_data/`)

### Local Development

1. Clone & cd

2. `npm i`

3. `npm run build && npm start`

4. Open your browser and visit [localhost:8080](http://localhost:8080)

## License

This project is licensed under the MIT License.

Copyright (c) 2025 Team 4774 The Drop Bears

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
