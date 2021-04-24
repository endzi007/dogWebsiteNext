import { makeStyles } from "@material-ui/core";
import { forwardRef, useImperativeHandle, useRef } from "react";

const useStyles = makeStyles((theme) => ({
    slideWrapper: (props) => {
        return {
            flexBasis: `calc(( 1 / ${props?.numberOfSlides?.default} ) * 100%)`  || "25%",
            flexGrow: 0,
            flexShrink: 0,
            padding: theme.spacing(2),
            [theme.breakpoints.down("sm")]:{
            flexBasis: `calc(( 1 / ${props?.numberOfSlides?.sm} ) * 100%)`  || "50%",
            }, 
            [theme.breakpoints.down("xs")]:{
            flexBasis: `calc(( 1 / ${props?.numberOfSlides?.xs} ) * 100%)`  || "100%",
            }
        }
    }
  }));


const SlideWrapper = forwardRef(({children, numberOfSlides}, ref) => {
  const classes = useStyles({numberOfSlides});
  const myInternalRef = useRef()
  useImperativeHandle(ref, ()=>{
    return {
      getWidth: ()=>{
        return myInternalRef.current.scrollWidth
      }
    }
  });
  return (
    <div className={classes.slideWrapper} ref={myInternalRef}>
       {children}
    </div>
  );
});

export default SlideWrapper;