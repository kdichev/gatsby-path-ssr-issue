import { GetServerDataProps, graphql, PageProps } from "gatsby";
import React from "react";

const ArticlePage = ({ data }: PageProps<Queries.ArticlePageQuery>) => {
  const { markdownRemark } = data;
  return (
    <div>
      <h1>{markdownRemark?.frontmatter?.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: markdownRemark?.html || "" }} />
    </div>
  );
};

export const pageQuery = graphql`
  query ArticlePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
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

export default ArticlePage;
