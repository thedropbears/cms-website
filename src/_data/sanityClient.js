const sanityClient = require('@sanity/client')

module.exports = sanityClient({
  projectId: 'rlp2iteh',
  dataset: 'production',
  apiVersion: '2024-05-15',
  useCdn: true
})