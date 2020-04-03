import React from "react";
import Layout from "../components/Layout";

const Blurt = ({ data }) => {
    const { markdownRemark: blurt } = data
    return (
        <Layout>
            <div>{blurt.frontmatter.date}</div>
            <div dangerouslySetInnerHTML={{ __html: blurt.html }} />
        </Layout>
    )
}

export default Blurt;

export const pageQuery = graphql`
  query BlurtByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`
