import React, { forwardRef, useRef, useImperativeHandle } from 'react';
import { Card, CardContent, Avatar, Typography, makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";

const useStyles = makeStyles(theme => ({
    wrapper:  {
        flexBasis: "33%",
        flexShrink: "0",
        flexGrow: "0"
    },
    card: {
        display: "flex",
        flexDirection: "row",
        width: "100%"
    },
    content: {
        display: "flex",
        flexDirection: "column",
        fontSize: "0.7rem",
        paddingLeft: theme.spacing(2)
    },
    avatar: {
        flexBasis: "33%",
        flexShrink: "0",
        height: "100%"
    }

}))




const SingleReview = ({ pictureUrl, personName, personText, age, title })=>{
    const classes = useStyles();
    return (
        <CardContent className={classes.card}>
            <Avatar alt="avatar 1" src={pictureUrl} className={classes.avatar}/>
            <div className={classes.content}>
                <Typography variant="h4">{personName}</Typography>
                <Typography variant="caption">{personText}</Typography>
            </div>
        </CardContent>
    );
}

export default SingleReview; 

SingleReview.propTypes = {
    pictureUrl: PropTypes.string.isRequired,
    personName: PropTypes.string.isRequired,
    personText: PropTypes.string.isRequired
}