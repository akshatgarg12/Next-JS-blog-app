import React from 'react';
import { Card, CardBody, Button, CardTitle, CardText, CardImg} from 'reactstrap';
import {useRouter} from 'next/router';

export interface CardProps{
  id:string,
  img:string,
  title:string,
  date:string
}

const MyCard: React.FC<CardProps> = ({id,img,title,date}) => {
  const router = useRouter();
  return (
    <div className="card-div">
      <Card body className="card" >
        <CardImg top width="100%" src={img} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{title}</CardTitle>
          <div className="row-flex">
            <CardText>
              <small className="text-muted">{date}</small>
            </CardText>
            <Button onClick = {()=>{
               router.push(`/${id}`);
           }}>Read</Button>
          </div>
        </CardBody>
      </Card>
      </div>
  );
};

export default MyCard;
