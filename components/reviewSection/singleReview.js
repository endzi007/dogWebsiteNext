import React from 'react';
import { Card, CardContent, Avatar, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    card: {
        display: "grid",
        gridTemplateColumns: "2fr 4fr"
    },
    content: {
        display: "flex",
        flexDirection: "column",
        fontSize: "0.7rem"
    }

}))
export default function SingleReview({pictureUrl, personName, personText }) {
    const classes = useStyles();
    return (
        <Card>
            <CardContent className={classes.card}>
                <Avatar alt="avatar 1" src={pictureUrl}/>
                <div className={classes.content}>
                    <Typography variant="h4">{personName}</Typography>
                    <Typography variant="caption">{personText}</Typography>
                </div>
            </CardContent>
        </Card>
    )
}
