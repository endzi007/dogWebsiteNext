import React from 'react';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    wrapper: {
        display: "grid",
        gridTemplateColumns: "1fr 4fr",
        gridTemplateAreas: `"sidebar content"
                            "sidebar content"
                            "sidebar content"`,
        minHeight: "60vh",
        position: "relative",
        paddingTop: theme.customProps.paddingTop,
        "& div": {
            overflow: "hidden",
            position: "relative"
        }, 
        [theme.breakpoints.down("sm")]:{
            gridTemplateColumns: "1fr", 
            gridTemplateAreas: `"content"
                                "sidebar"`,
        }
        
    }
}))

const LeftSideBar = ({children})=>{
    const classes = useStyles();
    return <div className={classes.wrapper}>
        {children}
    </div>
}

export default LeftSideBar;