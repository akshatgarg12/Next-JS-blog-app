import React, { useContext } from 'react';
import { Card, CardBody, Button, CardTitle, CardText, CardImg} from 'reactstrap';
import {useRouter} from 'next/router';
import {ThemeContext} from '../../context/theme';

export interface CardProps{
  id:string,
  img:string,
  title:string,
  date:string
}

const MyCard: React.FC<CardProps> = ({id,img,title,date}) => {
  const router = useRouter();
  const {theme, isLight} = useContext(ThemeContext);

  return (
    <div className="card-div">
      <Card color={theme.cardColor} body className="card" >
        <CardImg top width="100%" src={img} alt="Card image cap" />
        <CardBody>
          <CardTitle className={`text-${isLight?"dark":"white"}`} tag="h5">{title}</CardTitle>
          <div className="row-flex">
            <CardText color={theme.textColor}>
              <small className="text-muted">{date}</small>
            </CardText>
            <Button color={theme.buttonColor} onClick = {()=>{
               router.push(`/${id}`);
           }}>Read</Button>
          </div>
        </CardBody>
      </Card>
      </div>
  );
};

export default MyCard;
