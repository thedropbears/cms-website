const client = require('../_data/sanityClient')

async function getAllPages() {
  return client.fetch(`
    *[_type == "page"] {
      title,
      "slug": slug.current,
      body,
      "image": mainImage.asset->url
    }
  `)
}

async function getAllRobots() {
  return client.fetch(`
    *[_type == "robot"] | order(year desc) {
      title,
      "slug": slug.current,
      year,
      description,
      body,
      "mainImage": mainImage.asset->url,
      "images": images[].asset->url
    }
  `)
}

async function getAllSponsors() {
  return client.fetch(`
    *[_type == "sponsor"] | order(order asc) {
      name,
      "slug": slug.current,
      url,
      description,
      "logo": logo.asset->url
    }
  `)
}

async function getAllPosts() {
  return client.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      title,
      "slug": slug.current,
      publishedAt,
      body,
      "image": mainImage.asset->url
    }
  `)
}

async function getAllNotices() {
  return client.fetch(`
    *[_type == "notice"] | order(publishedAt desc) {
      title,
      "slug": slug.current,
      publishedAt,
      body,
      "image": mainImage.asset->url
    }
  `)
}

module.exports = {
  getAllPages,
  getAllRobots,
  getAllSponsors,
  getAllPosts,
  getAllNotices
}
