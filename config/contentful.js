const contentful = require('contentful');

const client = contentful.createClient({
  space:process.env.NEXT_PUBLIC_SPACE_ID,
  environment:'master', // defaults to 'master' if not set
  accessToken:process.env.NEXT_PUBLIC_ACCESS_TOKEN
})

module.exports = client;