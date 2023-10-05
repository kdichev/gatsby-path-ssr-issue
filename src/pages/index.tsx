import { GetServerDataProps, Link, PageProps, graphql } from "gatsby";
import React from "react";

const IndexPage = ({ data }: PageProps<Queries.IndexPageQuery>) => {
  const { allMarkdownRemark } = data;
  return (
    <div>
      {allMarkdownRemark.nodes.map(({ gatsbyPath, frontmatter }) => (
        <Link to={gatsbyPath || ""}>{frontmatter?.title}</Link>
      ))}
    </div>
  );
};

export const pageQuery = graphql`
  query IndexPage {
    allMarkdownRemark {
      nodes {
        gatsbyPath(
          filePath: "/{MarkdownRemark.frontmatter__category}/{MarkdownRemark.frontmatter__title}"
        )
        frontmatter {
          title
        }
      }
    }
  }
`;

export const getServerData = (_: GetServerDataProps) => {
  return {
    status: 200,
    headers: {},
    props: {},
  };
};

export default IndexPage;
