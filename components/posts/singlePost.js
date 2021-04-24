import React, { forwardRef, useImperativeHandle, useRef} from "react";
import { makeStyles } from "@material-ui/core";
import {
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from "@material-ui/core";
import PropTypes from "prop-types";
const useStyles = makeStyles(theme =>({
  root: {
    width: "100%",
    height: "auto",
    minHeight: "100%"
  },
  media: {
    height: "150px"
  }
}));


const SinglePost = ({ pictureUrl, headingText, slideText })=>{
  const classes = useStyles();
  return (
    <Card className={classes.root}>
    <CardActionArea>
      <CardMedia
        className={classes.media}
        image={pictureUrl}
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {headingText}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {slideText} 
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="primary">
        Share
      </Button>
      <Button size="small" color="primary">
        Learn More
      </Button>
    </CardActions>
  </Card>
  );
}

export default SinglePost;
SinglePost.propTypes = {
    pictureUrl: PropTypes.string.isRequired,
    headingText: PropTypes.string.isRequired,
    slideText: PropTypes.string.isRequired,
}
