module.exports = {
  siteMetadata: {
    title: `Centrifuge Developer`,
    siteUrl: process.env.URL || "http://localhost:8000",
    description: `A Decentralized Operating System For The Financial Supply Chain`,
    author: `@centrifuge`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `cent-node`,
        path: `${__dirname}/docs/cent-node`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `chain`,
        path: `${__dirname}/docs/chain`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `tinlake`,
        path: `${__dirname}/docs/tinlake`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `nfts`,
        path: `${__dirname}/docs/nfts`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `code-of-conduct`,
        path: `${__dirname}/docs/code-of-conduct.md`
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],
        rehypePlugins: [require("rehype-slug"), require("rehype-katex")],
        remarkPlugins: [
          require("remark-image-attributes"),
          require("remark-math")
        ],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              ignoreFileExtensions: [`png`, `jpg`, `jpeg`]
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              backgroundColor: "none",
              linkImagesToOriginal: false
            }
          },
          {
            resolve: "gatsby-remark-image-attributes",
            options: {
              styleAttributes: ["box-shadow", "margin"],
              dataAttributes: true
            }
          }
        ]
      }
    },
    {
      resolve: "gatsby-redirect-from",
      options: {
        query: "allMdx"
      }
    },
    "gatsby-plugin-meta-redirect",
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `centrifuge-developers`,
        short_name: `centrifuge`,
        start_url: `/cent-node/overview/introduction/`,
        background_color: `#fff`,
        theme_color: `#2762ff`,
        display: `minimal-ui`,
        icon: `src/images/centrifuge-logo.png`
      }
    },
    `gatsby-plugin-netlify-cache`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-typescript`
  ]
};
