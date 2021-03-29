import React from 'react'
import SingleReview from "./singleReview";
import ReviewData from '../../data/home/reviewSection.json';
import { makeStyles } from '@material-ui/core';

const styles = makeStyles(theme => ({
    wrapper: {
        display: "grid",
        gap: theme.spacing(2),
        gridTemplateColumns: "1fr 1fr",
        [theme.breakpoints.down("sm")]:{
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        }
    }
}))
export default function ReviewSectionWrapper() {
    const classes = styles();
    const setupReviews = ()=>{
        let reviews = ReviewData["persons"].map((person)=>{
            return <SingleReview {...person} />
        })
        return reviews;
    }
    return (
        <div className={classes.wrapper} >
            {setupReviews()}
        </div>
    )
}
