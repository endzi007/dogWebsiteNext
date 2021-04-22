import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    wrapper: {
        backgroundColor: theme.palette.background.paper,
        paddingTop: "100px",
        position: "relative"

    }
}))

const FullWidhtWithNoSidebar = ({children})=>{
    const classes = useStyles();
    return <div className={classes.wrapper}>
        {children}
    </div>
}

export default FullWidhtWithNoSidebar;