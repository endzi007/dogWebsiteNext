import React from 'react';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    wrapper: {
        display: "grid",
        gridTemplateAreas: `"sidebar content content"
                            "sidebar content content"
                            "sidebar content content"`,
        
    }
}))

const LeftSideBar = ({children})=>{
    const classes = useStyles();
    return <div className={classes.wrapper}>
        {children}
    </div>
}