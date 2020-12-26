import MyCard from '../src/components/card';
import { Container, Row, Col } from 'reactstrap';
const fetch = require('node-fetch');
import {URLS} from '../config/constants';
import {ThemeContext} from '../src/context/theme';
import { useContext } from 'react';

export const getStaticProps = async () =>{
  console.log(process.env.VERCEL_URL);
  try{
    const data = await fetch(URLS.USE+'/api/allposts').then(j => j.json());
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
    console.log(e);
    return {
      props:{
        posts:[]
      }
    }
  }
}

export default function Home({posts}) {
  const {theme} = useContext(ThemeContext);
  return (
    <div className="background-div">
       <Container >
         <Row sm="1" md="2" lg="3">
          {posts.map((post, index) => {
              return <Col key={index}>
                    <MyCard title={post.title} img={post.displayImg} date={post.date} id={post.id} /> 
                  </Col>
            })}
          </Row>
        </Container>
        <style jsx>
          {`
            .background-div{
              min-height:100vh;
              background-color:${theme.backgroundColor}
            }
          `}
        </style>
      </div>
  )
}
