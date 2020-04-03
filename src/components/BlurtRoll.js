import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import Layout from "../components/Layout";

class BlurtRoll extends React.Component {
    render() {
        const { data } = this.props
        const { edges: posts } = data.allMarkdownRemark

        return (
            <div>
                <Layout>
                    {posts &&
                        posts.map(({ node: post }) =>
                            (<div key={post.id}>
                                <div>{post.frontmatter.date}</div>
                                <div dangerouslySetInnerHTML={{ __html: post.html }} />
                            </div>
                            )
                        )}
                </Layout>
            </div>
        )
    }
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
