import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  paperPadding: {
    padding: theme.spacing(3),
  },
  title: {
    paddingBottom: theme.spacing(2),
    fontWeight: `bold`,
  },
}));

const BlogPageIndex = ({ data }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Layout>
        <CssBaseline />
        <Container maxWidth="lg">
          <Typography
            component="h3"
            variant="h4"
            color="inherit"
            className={classes.title}>
            Blog
        </Typography>
          <Paper className={classes.paperPadding}>
            <BlogRoll />
          </Paper>
        </Container>
      </Layout>
    </React.Fragment>
  )
}

export default BlogPageIndex;

