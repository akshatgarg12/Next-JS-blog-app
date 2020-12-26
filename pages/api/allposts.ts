import { NextApiRequest, NextApiResponse } from "next"
const client = require('../../config/contentful');


const allPosts = async (req:NextApiRequest,res:NextApiResponse) =>{
  const data = await client.getEntries({
    content_type:'blogs',   
    select: 'sys.id,fields.displayImg,fields.title,fields.date'
  })
  .then((response) => response.items)
  .catch(console.error)
  res.send(data);
}
export default allPosts