import DefaultLayout from "../components/defaultLayout";
import fs from 'fs';
import { Grid, makeStyles, Typography, CardMedia, Paper} from "@material-ui/core";
import PostList from "../components/posts/postList";
import SinglePost from "../components/posts/singlePost";
import CollapsableWidget from "../components/collapsablePanel/panelWidget";
import CollapsablePanel from "../components/collapsablePanel/singlePanel";
import { useEffect, useRef } from "react";
import SlidersData from "../data/home/sliderSection.json";
import ReviewsData from "../data/home/reviewSection.json";
import ReviewSectionWrapper from "../components/reviewSection/reviewSectionWrapper";
import SingleReview from "../components/reviewSection/singleReview";
import Carousel from "../components/carousel/carousel";
import FullWidhtWithNoSidebar from "../components/layouts/fullWidthNoSidebar";

const useStyles = makeStyles(theme => ({
    section: {
      minHeight: "300px",
      height: "auto",
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
      paddingLeft: "6vw",
      paddingRight: "6vw",
      position:"relative",
      [theme.breakpoints.down("xs")]:{
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
      }
    },
    dogSectionInner: {
      paddingTop: theme.customProps.paddingTop,
      position: "relative",
      minHeight: "60vh"
    },
    sliderSection:{
      backgroundColor: "#fff"
    },
    expandableSection:{
      position: "relative"
    },
    reviewSection: {
      backgroundColor: "#fff"
    },
    pictureHolder:{
      minHeight: "100%",
    },
    dogPicture:{
      width: "50%",
      height: "auto",
      maxWidth: "50%",
      maxHeight: "100%",
      position: "absolute",
      objectFit: "contain",
      right: "0",
      top: "50%",
      transform: "translateY(-50%)",
      [theme.breakpoints.down("xs")]:{
        width: "100%",
        maxWidth: "100%",
        position: "relative",
        objectFit: "cover"
      }
    },
    headerDogPicture: {
      position: "absolute",
      bottom: "50%",
      right: "0",
      height: "auto",
      width: "80%",
      maxHeight: "200%",
      transform: "translateY(50%)",
      objectFit: "scale-down",
      overflow: "hidden"
    },
    headerCard: {
      position: "absolute",
      left: 0,
      top: 0,
      minHeight: "200px",
      padding: theme.spacing(3),
      maxWidth: "50ch", 
      [theme.breakpoints.down("md")]: {
        zIndex: 1
      },
      [theme.breakpoints.down("sm")]: {
        width: "80vw",
        maxWidth: "100%",
        height: "auto",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "rgba(255,255,255, 0.5)",
      },
    }
    

}))


export default function Home({title, children, todos, menuPages}) {
  const classes = useStyles();
  const singleSlideRef = useRef();
  console.log(menuPages);
  const setupPosts = ()=>{
    let slides = SlidersData["sliderSection"]["slides"].map((slide, i)=>{
      return  <SinglePost key={`SinglePost_${i}`} {...slide} ref={singleSlideRef} />
    })
    return slides; 

  }

  const setupReviews = ()=>{
    let reviews = ReviewsData["persons"].map((slide, i)=>{
    return  <SingleReview key={`SinglePost_${i}`} {...slide} />
    })
    return reviews; 
  }

  return (
  <DefaultLayout title="Enis">
    <FullWidhtWithNoSidebar>
          <Grid className={`${classes.section} ${classes.dogSection}`} item xs={12}>
            <Grid container className={`${classes.dogSectionInner}`}>
                  <Paper className={classes.headerCard}>
                    <Typography variant="h1" color="primary">
                      Enisss 
                    </Typography>
                    <Typography variant="body1" color="textPrimary">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </Typography>
                  </Paper>
                  <img className={classes.headerDogPicture} src="/photos/dogSectionImage.webp" alt="Picture of dog"/>
            </Grid>
          </Grid>

          <Grid className={`${classes.section} ${classes.sliderSection}`} item xs={12}>
             <Carousel data={SlidersData} Component={SinglePost} navigation="arrows" />
          </Grid>

          <Grid className={`${classes.section} ${classes.expandableSection}`} item xs={12}> 
            <Grid container>
              <Grid item xs={12} sm={6}>
              <CollapsableWidget>
                <CollapsablePanel title="Heading1">
                <Typography variant="body1">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</Typography>
                </CollapsablePanel>
                <CollapsablePanel title="Heading1">
                <Typography variant="body1">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</Typography>
                </CollapsablePanel>
                <CollapsablePanel title="Heading1">
                </CollapsablePanel>
              </CollapsableWidget>
              </Grid>
              <Grid className={classes.pictureHolder} item xs={12} sm={6}>
                  <img className={classes.dogPicture} src="/photos/russianTerrier.png" alt="Russian Terrier"/>
              </Grid>
            </Grid>
          </Grid>
 
          <Grid className={`${classes.section} ${classes.reviewSection}`} item xs={12}> 
            <Carousel data={ReviewsData} Component={SingleReview} navigation="dots" />
          </Grid>
    </FullWidhtWithNoSidebar>
  </DefaultLayout>
  );
}


export async function getStaticProps(ctx){
  const directory = fs.readdirSync("./pages");
  const pages = directory.filter(page =>{
      if(page !== "api"){
        if(page[0] !== "["){
          if(page[0] !== "_"){
            return page;
          }
        } 
      } 
      return "";
  })

  console.log("pagess", pages);


  return {
    props: {
      menuPages: pages
    }
  }

}