import React from "react";
import {AxisTheme} from "@centrifuge/axis-theme";
import {theme} from "../theme";
import {Anchor, Box, Grid, Heading, Image, ResponsiveContext} from "grommet";
import helloWordImage from "../images/hello_world-42.svg";
import centrifugeLogo from "../images/centrifuge_logo_dev.svg";
import {Link} from "gatsby";
import tinlakeLogo from "../images/tinlake_logo_dev.svg";
import SEO from "../components/SEO";
import Layout from "../components/Layout";

const HomePage = () => (
  <AxisTheme theme={theme}>
    <ResponsiveContext.Consumer>
      {size => {


        const anchorStyles = {
          fontWeight: '500',
          fontSize: '16px'
        }

        let gridStyles = {
          gridGap: '32px'
        }

        let areas;
        let columns = [
          '1fr',
          '348px',
          '348px',
          '348px',
          '1fr'
        ]
        let rows = ['auto'];

        switch (size) {
          // Desktop
          case "large":
            areas = [

              {name: "cent-node", start: [1, 0], end: [1, 0]},
              {name: "tinlake", start: [2, 0], end: [2, 0]},
              {name: "paper", start: [3, 0], end: [3, 0]},

            ];
            break;
          case "medium":
          default:
            gridStyles = {};
            columns = [
              '1fr', '348px', '1fr'
            ];
            rows = ['auto', 'auto', 'auto'];


            areas = [
              {name: "cent-node", start: [1, 0], end: [1, 0]},
              {name: "tinlake", start: [1, 1], end: [1, 1]},
              {name: "paper", start: [1, 2], end: [1, 2]},

            ];
            break;

        }

        return <Layout size={size}>
          <SEO title="Centrifuge documentation"/>
          <Box
            fill
            as="main"
            align="center"
            pad={'xlarge'}
          >
            <Image style={{maxWidth: '480px'}} src={helloWordImage}/>
          </Box>

          <Box fill={true} pad={{bottom: 'large'}}>
            <Grid style={gridStyles} areas={areas} columns={columns} rows={rows} justifyContent={'between'}>
              <Box
                margin={{vertical: '48px'}}
                align="center"
                style={{width: '348px'}}
                gridArea={'cent-node'}
                gap={'large'}
              >
                <Image style={{maxWidth: '480px'}} src={centrifugeLogo}/>
                <Anchor href="/cent-node/" style={anchorStyles}>Centrifuge Node Documentation</Anchor>

              </Box>
              <Box
                margin={{vertical: '48px'}}
                align="center"
                style={{width: '348px'}}
                gridArea={'tinlake'}
                gap={'large'}
              >
                <Box height={'62px'} justify={'center'}>
                  <Image src={tinlakeLogo}/>
                </Box>
                  <Anchor href="/tinlake/" style={anchorStyles}>Tinlake Documentation</Anchor>
              </Box>

              <Box
                margin={{vertical: '48px'}}
                align="center"
                style={{width: '348px'}}
                gridArea={'paper'}
                gap={'large'}

              >
                <Heading level={1} style={{margin: '0px 0px 6px 0px'}}>
                  Protocol Paper
                </Heading>
                <Anchor style={anchorStyles}
                        href={'https://staticw.centrifuge.io/assets/centrifuge_os_protocol_paper.pdf'}
                        target={'_blank'}>Centrifuge
                  Protocol Paper</Anchor>
              </Box>
            </Grid>
          </Box>
        </Layout>
      }}
    </ResponsiveContext.Consumer>
  </AxisTheme>
);

export default HomePage;
