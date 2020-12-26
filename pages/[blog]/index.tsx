import { GetStaticProps,GetStaticPaths } from "next";
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import Image from 'next/image';
import { Container } from "reactstrap";

export const getStaticProps : GetStaticProps = async (context) => {
  const id = context?.params?.blog || null
  console.log(process.env.BASE_URL);
  try{
    const data = await fetch(`https://${process.env.VERCEL_URL}/api/blog`,{
      method:"POST",
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify({
        id
      })
    }).then(d => d.json());
    let options = {
      renderNode: {
        'embedded-asset-block': (node) =>
          `<div>
            <Image
            src="${node.data.target.fields.file.url}"
            alt="blog photo"
            />
          </div>
          `
      }
    }
    return {
      props : {
        content:documentToHtmlString(data.fields.content, options)
      },
      revalidate:10
    }
  }
    catch(e){
      return {
        props : {
          content:"<h1>Blog not found</h1>"
        },
        revalidate:10
      }
      }
    }

export const getStaticPaths : GetStaticPaths = async () => {
  return {
    paths:[],
    fallback:true
  }
}
export interface BlogProps {
  content:string  
}
const Blog: React.FC<BlogProps> = ({content}) => {
  return (
        <Container>
          <div dangerouslySetInnerHTML={{__html:content}}></div>
        </Container>
  );
}
 
export default Blog;