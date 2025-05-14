const client = require('./sanityClient')

module.exports = async function() {
  const query = `*[_type == "settings"][0] {
    "links": quicklinks[] {
      title,
      url,
      desc
    }
  }`

  const quicklinks = await client.fetch(query)
  return quicklinks || {
    links: [
      {
        title: 'Team Website',
        url: 'https://thedropbears.org.au/',
        desc: 'Visit our team website'
      },
      {
        title: 'First Robotics',
        url: 'https://www.firstinspires.org/',
        desc: 'Learn more about FIRST Robotics Competition'
      }
    ]
  }
}
