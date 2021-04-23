import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { AppBar, Button, makeStyles, Toolbar } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    appBar: {

    },
    navBar: {
        justifyContent: "flex-end"
    }
}))
export default function Header() {
    const classes = useStyles();
    const [ pages, setPages ] = useState([]);

    useEffect(() => {
        console.log(process.env.NEXT_PUBLIC_API_BASE_POINT);
        const pages = fetch(`${process.env.NEXT_PUBLIC_API_BASE_POINT}/api/pages`);
        pages.then((data)=>{
            return data.json();
        }).then((pages)=>{
            setPages( oldPages => {
                return pages.map((page, i)=>{
                const link = page==="index.js" ? "/" : `/${page.substr(0, page.length - 3)}`;
                return (<Link href={link} passHref>
                    <Button variant="text" color="inherit"> {page} </Button>
                </Link>)
                })
            });
        }).catch((e)=>{
            console.error(e);
        })
    }, []);

    return (
        <AppBar className={classes.appBar} position="absolute" color="transparent" >
            <Toolbar className={classes.navBar}>
                {pages}
            </Toolbar>
        </AppBar>
    )
}