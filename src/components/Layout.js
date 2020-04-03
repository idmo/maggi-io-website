import React from 'react'
import Seo from '../components/Seo';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(4),
  },
}));


const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <div>
      <Seo />
      <Header />
      <div>{children}</div>
      <Container className={classes.footer} maxWidth="lg">
        <Footer />
      </Container>
    </div>
  )
}

export default Layout;
