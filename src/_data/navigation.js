const client = require('./sanityClient')

module.exports = async function() {
  const query = `*[_type == "settings"][0] {
    "items": navigation[] {
      text,
      "url": slug.current
    }
  }`

  const navigation = await client.fetch(query)
  return navigation || {
    items: [
      { text: 'Home', url: '/' },
      { text: 'About', url: '/about/' },
      { text: 'Robots', url: '/robots/' },
      { text: 'Sponsors', url: '/sponsors/' },
      { text: 'Join', url: '/join/' },
      { text: 'Notices', url: '/notices/' }
    ]
  }
}
