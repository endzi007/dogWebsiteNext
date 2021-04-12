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
  },
  gridItem: {
    flexBasis: "25%",
    flexGrow: 0,
    flexShrink: 0,
    padding: theme.spacing(2),
    [theme.breakpoints.down("sm")]:{
      flexBasis: "50%",
    }, 
    [theme.breakpoints.down("xs")]:{
      flexBasis: "100%",
    }, 
  }
}));

const SinglePost = forwardRef((props, ref) => {
  const classes = useStyles();
  const myInternalRef = useRef()
  useImperativeHandle(ref, ()=>{
    return {
      getWidth: ()=>{
        console.log("function getWidth called");
        return myInternalRef.current.offsetWidth
      }
    }
  });
  return (
    <Grid ref = {myInternalRef} item className={classes.gridItem}>
      <InternalCard {...props} />
    </Grid>
  );
});

export default SinglePost;


const InternalCard = ({ pictureUrl, headingText, slideText })=>{
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
 
InternalCard.propTypes = {
    pictureUrl: PropTypes.string.isRequired,
    headingText: PropTypes.string.isRequired,
    slideText: PropTypes.string.isRequired,
}
