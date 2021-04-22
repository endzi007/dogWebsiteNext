import { Radio, makeStyles, Fab, Typography } from "@material-ui/core";
import React, { useRef, useState, useEffect } from "react";
import { ArrowForwardIos, ArrowBackIos, SentimentDissatisfiedSharp } from "@material-ui/icons";
import PropTypes from "prop-types";

//styles for Carousel component
const useStyles = makeStyles((theme) => ({
  gridContainer: {
    height: "auto",
    alignItems: "stretch",
    overflow: "hidden",
    scrollBehavior: "smooth",
    position: "relative",
    display: "flex", 
    width: "100%",
    boxSizing: "border-box"
  },
  wrapper: {
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5),
      position: "relative"
  }
}));


export default function Carousel({data, Component, navigation}) {
  const classes = useStyles();
  const containerRef = useRef();
  const slideRef = useRef(); //this is used to determine width of the slide
  const [ dataToDisplay, setDataToDisplay ] = useState();
  const [ selectedIndex, setSelectedIndex ] = useState(0);

  //this function is scolling to the left by full container width
  const clickBack = (e) => {
    containerRef.current.scrollLeft -= containerRef.current.offsetWidth;
    if(containerRef.current.scrollLeft <= 0){
      containerRef.current.scrollLeft = containerRef.current.scrollWidth
    }
  };

  //this function is scolling to the right by full container width
  const clickNext = (e) => {
    containerRef.current.scrollLeft += containerRef.current.offsetWidth;

    if(containerRef.current.scrollLeft >= containerRef.current.scrollWidth - containerRef.current.offsetWidth){
      containerRef.current.scrollLeft = 0;
    }
  };

  //this function handles navigation through Dots component, basically it uses index of selected dot and multiplys that with slider width
  //currently there is a bug because when selected dot is in view already, nothing happens when is clicked
  const handleChange = (e)=>{
    const slideWidth = slideRef.current.getWidth();
    setSelectedIndex(selectedIndexOld => Number.parseInt(e.target.value));
    containerRef.current.scrollLeft = Number.parseInt(e.target.value) * slideWidth;
  }

  //make carousel by maping data["data"] array in JSON and combining with passed Component which could be any custom React Component
  useEffect(() => {
    let tempData = data["data"].map((entity, i)=>{
      return <Component key={`slide_${i}`} {...entity} ref={slideRef} />
    })

    //in this step we are adding another set of slides at the end because when we use dots as navigation 
    //when we click on the last last dot there is nothint left to show on the right side 
    if (navigation === "dots"){
      for (let i = 0; i < 4; i++) {
        const element = <Component key={`additinalSlide_${i}`} {...data["data"][i]} ref={slideRef} />;
        tempData.push(element);
      }
    } 
    
    setDataToDisplay(tempData);
  }, [])

  const navigationTypes = {
    dots: <Dots handleChange = {handleChange} data={data["data"]} selectedIndex = {selectedIndex} />,
    arrows: <ArrowControlers clickNext = {clickNext} clickBack={clickBack} />
  }

  return (
      <div className={classes.wrapper}>
        <Typography variant="h4">{data["headingText"]}</Typography>
        <div ref={containerRef} className={classes.gridContainer}>
          {dataToDisplay}
        </div>
        {navigationTypes[navigation]}
      </div>
  );
}

//styles for Arrows component
const useArrowStyles = makeStyles((theme)=>({
  arrowBack: {
    position: "absolute",
    left: "0",
    top: "50%",
    transform: `translate(0%, -50%)`,
    "&:hover":{
      cursor: "pointer"
    }
  },
  arrowForward: {
    position: "absolute",
    right: "0",
    top: "50%",
    transform: `translate(0%, -50%)`,
    "&:hover":{
      cursor: "pointer"
    }
  }
}))

const ArrowControlers = (props)=>{
  const classes = useArrowStyles();
    return <>
        <ArrowBackIos onClick ={props.clickBack} className={classes.arrowBack}/>
        <ArrowForwardIos onClick={props.clickNext} className={classes.arrowForward} />
    </>
}

//dotted controls for carousel 
const Dots = ({ data, handleChange, selectedIndex})=>{
  const dots = data.map((review, i ) => {
    return <Radio
      checked={selectedIndex === i}
      onChange={handleChange}
      value={i}
      name="slider-controlers"
      inputProps={{ 'aria-label': i }}
      size="small"
      color="default"
      key={`dotNavigation__${i}`}
    />
  })
  return dots;
}


Carousel.propTypes = {
  data: PropTypes.shape({
    headingText: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired
  }).isRequired, 
  limit: PropTypes.number,
  navigation: PropTypes.string
}

ArrowControlers.propTypes = {
  clickBack: PropTypes.func.isRequired, 
  clickNext: PropTypes.func.isRequired
}

Dots.propTypes = {
  data: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
  selectedIndex: PropTypes.number.isRequired
}