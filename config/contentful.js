const contentful = require('contentful');

const client = contentful.createClient({
  space:process.env.SPACE_ID,
  environment:'master', // defaults to 'master' if not set
  accessToken:process.env.ACCESS_TOKEN
})

module.exports = client;