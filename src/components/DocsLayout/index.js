import React from "react";
import { graphql } from "gatsby";
import { Anchor, Box, Grid, Heading, ResponsiveContext } from "grommet";

import Layout from "../Layout";
import TableOfContents from "../TableOfContents";
import Sidebar from "../Sidebar";
import DocsContent from "../DocsContent";
import { theme } from "../../theme";
import { AxisTheme } from "@centrifuge/axis-theme/";
import styled from "styled-components";
import SEO from "../SEO";

// Import KaTex styles to render Math functions
import "katex/dist/katex.css";

const EditPage = ({ file }) => {
  const GITHUB_BASE =
    "https://github.com/centrifuge/developer.centrifuge.io/tree/develop/docs";
  const githubLink = `${GITHUB_BASE}/${file}`;

  return (
    <Box margin={{ top: "large" }}>
      <Anchor style={{ fontSize: "12px", opacity: "0.8" }} href={githubLink}>
        Edit this page on GitHub
      </Anchor>
    </Box>
  );
};

const SidebarContainer = styled(Box)`
  ${props =>
    props.size === "small" &&
    `
    border: none;
    z-index: 1;
    top: 65px; 
  `}
`;

const DocsLayout = ({ data }) => {
  const { mdx, allMdx } = data;

  return (
    <AxisTheme theme={theme}>
      <ResponsiveContext.Consumer>
        {size => {
          let gap = "32px";
          let areas;
          let columns = [
            "minmax(182px,320px)",
            "minmax(700px,1fr)",
            "minmax(236px,320px)"
          ];
          let rows = ["auto"];

          switch (size) {
            // Desktop
            case "large":
            default:
              areas = [
                { name: "sidebar", start: [0, 0], end: [0, 0] },
                { name: "main", start: [1, 0], end: [1, 0] },
                { name: "toc", start: [2, 0], end: [2, 0] }
              ];
              break;
            // Tablet
            case "medium":
              columns = ["minmax(182px,280px)", "minmax(600px,1fr)"];
              areas = [
                { name: "sidebar", start: [0, 0], end: [0, 0] },
                { name: "main", start: [1, 0], end: [1, 0] }
              ];
              break;
            // Mobile
            case "small":
              columns = ["1fr"];
              rows = ["auto", "auto"];
              areas = [
                { name: "sidebar", start: [0, 0], end: [0, 0] },
                { name: "main", start: [0, 1], end: [0, 1] }
              ];
          }
          return (
            <Layout size={size} gap={gap}>
              <SEO title={mdx.frontmatter.title} />
              <Grid
                style={{ gridGap: gap }}
                columns={columns}
                rows={rows}
                areas={areas}
              >
                <SidebarContainer
                  border={{ side: "right", color: "light-4" }}
                  gridArea="sidebar"
                  background={"white"}
                  pad={{ bottom: "large" }}
                  size={size}
                >
                  <Sidebar size={size} allMdx={allMdx} />
                </SidebarContainer>

                <Box gridArea="main" as="main" pad={{ bottom: "large" }}>
                  <Heading level={1} lined>
                    {mdx.frontmatter.title}
                  </Heading>

                  <DocsContent mdx={mdx} />

                  <EditPage file={mdx.fields.file} />
                </Box>

                {size === "large" && (
                  <Box
                    pad={{ bottom: "large", top: "medium" }}
                    gridArea="toc"
                    as="aside"
                  >
                    <TableOfContents content={mdx.tableOfContents} />
                  </Box>
                )}
              </Grid>
            </Layout>
          );
        }}
      </ResponsiveContext.Consumer>
    </AxisTheme>
  );
};

export const query = graphql`
  query DocsQuery($id: String, $instanceName: String) {
    mdx(id: { eq: $id }) {
      id
      body
      fields {
        file
        instanceName
      }
      frontmatter {
        title
      }
      tableOfContents
    }
    allMdx(
      filter: {
        fields: { title: { ne: "404" }, instanceName: { eq: $instanceName } }
      }
    ) {
      group(field: fields___category) {
        fieldValue
        edges {
          node {
            frontmatter {
              order
            }
            fields {
              title
              slug
            }
          }
        }
      }
    }
  }
`;

export default DocsLayout;
