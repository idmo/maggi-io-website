import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import Paper from "@material-ui/core/Paper";
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  metadata: {
    fontSize: `.7rem`,
    textTransform: `uppercase`,
    fontWeight: `bold`,
    marginBottom: theme.spacing(0),
    paddingBottom: theme.spacing(0),
  }
}))

const BlurtRoll = ({ data }) => {
  const posts = data.allMarkdownRemark.edges
  console.log(posts)
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      {posts &&
        posts.map(({ node: post }) =>
          (<div key={post.id}>
            <Paper className={classes.paper}>
              <div className={classes.metadata}>{post.frontmatter.date}</div>
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </Paper>
          </div>
          )
        )}
    </React.Fragment>
  )
}





BlurtRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlurtRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blurt" } } }
        ) {
          edges {
            node {
            html
              id
              fields {
                slug
              }
              frontmatter {
                templateKey
                date(formatString: "MMMM DD, YYYY")                
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlurtRoll data={data} count={count} />}
  />
)
