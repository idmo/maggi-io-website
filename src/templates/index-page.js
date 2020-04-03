import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  paperPadding: {
    padding: theme.spacing(3),
  }
}));





const IndexPageTemplate = ({ data }) => {
  const classes = useStyles();
  console.log(data);
  return (
    <React.Fragment>
      <Layout>
        <CssBaseline />
        <Container maxWidth="lg">
          <Paper className={classes.paperPadding}>
            <Typography
              component="h2"
              variant="h3"
              color="inherit">
              {data.markdownRemark.frontmatter.heading}
            </Typography>
            <BlogRoll />
          </Paper>

        </Container>
      </Layout>
    </React.Fragment>
  )
}
export default IndexPageTemplate;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
