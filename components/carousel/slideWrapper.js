import { makeStyles } from "@material-ui/core";
import { forwardRef, useImperativeHandle, useRef } from "react";

const useStyles = makeStyles((theme) => ({
    slideWrapper: (props)=> ({
        flexBasis: "25%",
        flexGrow: 0,
        flexShrink: 0,
        padding: theme.spacing(2),
        [theme.breakpoints.down("sm")]:{
          flexBasis: "50%",
        }, 
        [theme.breakpoints.down("xs")]:{
          flexBasis: "100%",
        }
    })
  }));


const SlideWrapper = forwardRef(({children, slideWidth}, ref) => {
  const classes = useStyles({slideWidth});
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