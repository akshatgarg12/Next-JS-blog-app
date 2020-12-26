import { GetStaticProps } from 'next';
import Card from '../src/components/card';
import Grid from '@material-ui/core/Grid';


export const getStaticProps:GetStaticProps = async () =>{
  try{
    const data = await fetch(`${process.env.BASE_URL}/api/allposts`).then(j => j.json());
    const posts =  data.map((post) => {
      const postObject = {
        id : post.sys.id,
        displayImg: post?.fields?.displayImg?.fields?.file?.url || null,
        title:post?.fields?.title || null,
        date:post?.fields?.date || null
      }
      return postObject
    })
   
    return {
      props:{
        posts
      },
      revalidate:10
    }
  }catch(e){
    return {
      props:{
        posts:[]
      }
    }
  }
  
}

export default function Home({posts}) {
  return (
    <div className="grid-div">
      <Grid item xs={"auto"}>
        <Grid container justify="center"  spacing={3}>
          {posts.map((post, index) => {
          return <div key={index} className="card">
                 <Card title={post.title} img={post.displayImg} date={post.date} id={post.id} /> 
              </div>
          })}
        </Grid>
      </Grid>
      
    </div>
  )
}
