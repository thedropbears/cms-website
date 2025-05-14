const {toHTML} = require('@portabletext/to-html')

function portableTextToHtml(portableText) {
  if (!portableText) return ''
  
  const components = {
    types: {
      image: ({value}) => {
        if (!value?.asset?._ref) return ''
        return `<img src="${value.asset._ref}" alt="${value.alt || ''}" />`
      }
    },
    marks: {
      link: ({children, value}) => {
        const href = value?.href || ''
        const rel = !href.startsWith('/') ? 'noopener noreferrer' : undefined
        const target = !href.startsWith('/') ? '_blank' : undefined
        return `<a href="${href}" ${rel ? `rel="${rel}"` : ''} ${
          target ? `target="${target}"` : ''
        }>${children}</a>`
      }
    }
  }

  return toHTML(portableText, {components})
}

module.exports = portableTextToHtml
