import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';

const useStyles = makeStyles({
  root: {
    maxWidth:250,
  },
});

interface CardProps {
  id:string,
  title:string,
  img:string,
  date:string
}

export default function ImgMediaCard({title, img, date, id}:CardProps) {
  const classes = useStyles();
  return (
    <div>
    <Card className={classes.root} variant="elevation" >
      <CardActionArea>
        <CardMedia
          component="img"
          alt="blog display img"
          height="140"
          image={img}
          title="Blog Card"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {date}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Link href={`/${id}`}>
        <Button size="small" color="primary">
          Learn More
        </Button>
        </Link>
      </CardActions>
    </Card>
    </div>
  );
}
