import { Grid, makeStyles, Fab, Typography } from "@material-ui/core";
import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "@material-ui/icons";
import SlidersData from "../../data/home/sliderSection.json";

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    height: "auto",
    alignItems: "stretch",
    overflow: "hidden",
    scrollBehavior: "smooth",
    position: "relative",
    display: "flex", 
    
  },
  arrowBack: {
    position: "absolute",
    left: "0",
    top: "50%",
    transform: `translate(0%, -50%)`,
  },
  arrowForward: {
    position: "absolute",
    right: "0",
    top: "50%",
    transform: `translate(0%, -50%)`,
  },
  wrapper: {
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5),
      position: "relative"
  }
}));
export default function PostList({children}) {
  const classes = useStyles();
  const myRef = useRef();

  const clickBack = (e) => {
    myRef.current.scrollLeft -= myRef.current.offsetWidth;
  };

  const clickNext = (e) => {
    myRef.current.scrollLeft += myRef.current.offsetWidth;
  };

  const controlers = ()=>{
    return <>
            <Fab
            color="primary"
            className={classes.arrowBack}
            onClick={clickBack}
            >
            <ArrowLeft />
            </Fab>
        <Fab
          color="primary"
          className={classes.arrowForward}
          onClick={clickNext}
        >
            <ArrowRight />
        </Fab>
    </>
  }
  return (
      <div className={classes.wrapper}>
        <Typography variant="h4">{SlidersData["sliderSection"]["headingText"]}</Typography>
        <div container ref={myRef} className={classes.gridContainer}>
        {children}
        </div>
        {controlers()}
      </div>

  );
}

