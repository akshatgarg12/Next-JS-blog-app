const client = require('../../../config/contentful');;
import { NextApiRequest, NextApiResponse } from "next"

const getBlog = async (req:NextApiRequest,res:NextApiResponse) =>{
  if(req.method === "POST"){
    try{
      const data = await client.getEntry(req.body.id);
      res.send(data);
    }catch(e){
      res.status(404).json({error:"document not found"});
    }
    
  }else{
    res.status(403);
    res.end();
  }
  
}

export default getBlog;