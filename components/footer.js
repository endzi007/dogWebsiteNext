import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme)=>({
    wrapper: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: theme.palette.grey[900],
        backgroundImage: "url(/photos/dogFooterWallpaper.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundBlendMode: "soft-light",
        minHeight: "450px",
    },
    footer: {
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        [theme.breakpoints.down("sm")]:{
            gridTemplateColumns: "repeat(2, 1fr)",
        },
        [theme.breakpoints.down("xs")]:{
            gridTemplateColumns: "1fr",
        }
    }    
}))

export default function Footer() {
    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
            <div>
                <Typography variant="body1">Top div</Typography>
            </div>
            <footer className={classes.footer}>
                <Typography variant="body1">Top div</Typography>
                <Typography variant="body1">Top div</Typography>
                <Typography variant="body1">Top div</Typography>
                <Typography variant="body1">Top div</Typography>
            </footer>
        </div>
    )
}
