import React, { useEffect } from 'react'
import Link from 'next/link'
import { Button, ButtonBase, Toolbar } from "@material-ui/core";

export default function PagesMenu() {
    return (
        <Toolbar>
            <Link href="/" passHref>
                <Button variant="text" color="inherit"> Home </Button>
            </Link>
            <Link href="/about" passHref>
                <Button variant="text" color="inherit"> About </Button>
            </Link>
            <Link href="/contact" passHref>
                <Button variant="text" color="inherit"> Contact </Button>
            </Link>
        </Toolbar>

    )
}