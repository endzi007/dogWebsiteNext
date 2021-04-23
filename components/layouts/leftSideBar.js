import React from 'react';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    wrapper: {
        display: "grid",
        gridTemplateColumns: "1fr 10fr",
        gridTemplateAreas: `"sidebar content"
                            "sidebar content"
                            "sidebar content"`,
        minHeight: "60vh",
        position: "relative",
        paddingTop: theme.customProps.paddingTop,
        "& div": {
            overflow: "hidden",
            position: "relative"
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