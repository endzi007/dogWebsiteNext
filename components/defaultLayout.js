import Head from 'next/head'
import Header from './header'
import Footer from './footer'
import { Grid, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  wrapper: {
    width: theme.customProps.containerWidth,
    margin: theme.customProps.margin,
    position: "relative",
    backgroundColor: theme.palette.background.paper
  }
}))

export default function DefaultLayout({title, children}) {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  )
}
