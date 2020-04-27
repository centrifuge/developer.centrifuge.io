import React from "react";
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer";
import { MDXProvider } from "@mdx-js/react";
import styled from "styled-components";
import * as Grommet from "grommet";

import CodeHighlighter from "../CodeHighlighter";
import { LightBox } from "../LightBox";

import link from "../../images/link.svg";

const ListBase = styled(Grommet.Text)`
  padding-left: 1rem;
`;

const Anchor = styled.a.attrs({
  "aria-hidden": "true"
})`
  display: block;
  position: relative;
  top: -80px;
`;

const Heading = styled(Grommet.Heading).attrs({
  margin: { vertical: "1.5em" }
})`
  position: relative;
`;

const Hash = styled.a.attrs({
  "aria-hidden": "true"
})`
  opacity: 0;
  top: 50%;
  transform: translateY(-50%);
  transition: opacity 0.3s;
  position: absolute;
  left: -24px;
  text-decoration: none;

  &::before {
    content: "";
    display: block;
    background-image: url(${link});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    height: 16px;
    width: 16px;
  }

  ${Heading}:hover & {
    opacity: 0.5;

    &:hover {
      opacity: 1;
    }
  }
`;

const mdxGrommetMap = {
  p: Grommet.Paragraph,
  h1: (props) => (
    <Heading level={1}>
      <Anchor id={props.id} />
      <Hash href={`#${props.id}`} />
      {props.children}
    </Heading>
  ),
  h2: (props) => (
    <Heading level={2}>
      <Anchor id={props.id} />
      <Hash href={`#${props.id}`} />
      {props.children}
    </Heading>
  ),
  h3: (props) => (
    <Heading level={3}>
      <Anchor id={props.id} />
      <Hash href={`#${props.id}`} />
      {props.children}
    </Heading>
  ),
  h4: (props) => (
    <Heading level={4}>
      <Anchor id={props.id} />
      <Hash href={`#${props.id}`} />
      {props.children}
    </Heading>
  ),
  h5: (props) => (
    <Heading level={5}>
      <Anchor id={props.id} />
      <Hash href={`#${props.id}`} />
      {props.children}
    </Heading>
  ),
  h6: (props) => (
    <Heading level={6}>
      <Anchor id={props.id} />
      <Hash href={`#${props.id}`} />
      {props.children}
    </Heading>
  ),
  table: (props) => (
    <Grommet.Box fill={"horizontal"}>
      <Grommet.Table className={"MdxTable"}>{props.children}</Grommet.Table>
    </Grommet.Box>
  ),
  thead: (props) => <Grommet.TableHeader>{props.children}</Grommet.TableHeader>,
  tbody: (props) => <Grommet.TableBody>{props.children}</Grommet.TableBody>,
  tr: (props) => (
    <Grommet.TableRow as={"tr"}>{props.children}</Grommet.TableRow>
  ),
  td: (props) => <Grommet.TableCell>{props.children}</Grommet.TableCell>,
  th: (props) => (
    <Grommet.TableCell scope="col">{props.children}</Grommet.TableCell>
  ),
  li: (props) => <Grommet.Text {...props} as="li" />,
  ul: (props) => <ListBase {...props} as="ul" />,
  ol: (props) => <ListBase {...props} as="ol" />,
  a: Grommet.Anchor,
  img: (props) => {
    const useLightBox = !!props["data-zoom"];
    return useLightBox ? <LightBox {...props} /> : <Grommet.Image {...props} />;
  },
  inlineCode: (props) => <Grommet.Text color="brand" as="code" {...props} />,
  code: (props) => (
    <CodeHighlighter
      code={props.children.trim()}
      language={String(props.className).replace(/^language-/, "")}
    />
  )
};

const DocsContent = ({ mdx }) => {
  return (
    <MDXProvider components={mdxGrommetMap}>
      <MDXRenderer>{mdx.body}</MDXRenderer>
    </MDXProvider>
  );
};

export default DocsContent;
