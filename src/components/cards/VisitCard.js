import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Collapse, Button, CardActions } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 560,
    background: "rgba(0,0,0,0.5)",
  },
  media: {
    height: 350,
  },
  title: {
    fontFamily: "Nunito",
    fontWeight: "bolder",
    color: "#cacaca",
  },
  description: {
    fontFamily: "Nunito",
    color: "#cacaca",
  }
});

export default function VisitCard({place, checked}) {
  const classes = useStyles();

  return (
    <Collapse in={checked} {...(checked ? { timeout: place.timeout } : {})}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={place.image}
            title={place.imgTitle}
          />
          <CardContent className={classes.content}>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              className={classes.title}
            >
              {place.title}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={classes.description}
            >
              {place.desc}
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="outlined" size="small" color="primary">
              Book Now
            </Button>
          </CardActions>
        </CardActionArea>
      </Card>
    </Collapse>
  );
}