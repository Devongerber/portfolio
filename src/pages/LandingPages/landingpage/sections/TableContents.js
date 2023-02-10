/*
=========================================================
* Material Kit 2 PRO React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKBadge from "components/MKBadge";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';



// Images
import bg1 from "assets/images/img-1.png";
import bg2 from "assets/images/img-2.png";
import bg3 from "assets/images/img-3.png";
import bg4 from "assets/images/img-4.png";
import bg5 from "assets/images/img-5.png";
import bg6 from "assets/images/img-6.jpg";


function ContentOne() {
  return (
    <MKBox component="section" py={6} >
      <Container >
        <Grid
          container
          item
          xs={12}
          flexDirection="column"
          alignItems="center"
          mx="auto"
          textAlign="center"
          mb={6}
          
        >
          <MKBadge
            badgeContent="Projects"
            variant="contained"
            color="info"
            container
            sx={{ mb: 1 }}
          />
          <MKTypography variant="h2" mb={1}>
            Table of Contents
          </MKTypography>
          <MKTypography variant="body2" color="text">
            Click on the project you are interested in or scroll down through each one.
          </MKTypography>
        </Grid>
        <Grid container spacing={3} sx={{minHeight: {xs:"100vh", md: "40vh"} }} textAlign="center">
          <Grid item xs={12} md={4}>
            <MKBox
              width="100%"
              height="100%"
              borderRadius="xl"
              shadow="lg"
              sx={{
                backgroundImage: ({
                  palette: { gradients },
                  functions: { rgba, linearGradient },
                }) =>
                  `${linearGradient(
                    rgba(gradients.dark.main, 0.8),
                    rgba(gradients.dark.state, 0.8)
                  )}, url(${bg1})`,
                  '&:hover': {
                    backgroundColor: 'white',
                    opacity: [0.9, 0.8, 0.4],
                    transition: "all .5s ease-in-out",
                  },
                
                backgroundSize: "cover",
                backgroundPosition: "center",
                border: "2px solid grey",
              }}
            >
              <HashLink to="/#first">
 
              <MKBox
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  width="100%"
                  height="100%"
                  
                >
                  <MKBox py={0} pl={0} pr={{ xs: 0, sm: 0 }} my="auto"
>
                    <MKTypography color="white" mb={1} textAlign="center" sx={{ variant: {xs: "h4", md: "h5"}}}>
                      Conditional Automation System
                    </MKTypography>
                  </MKBox>
                </MKBox>
                </HashLink>
              </MKBox>
          </Grid>
          <Grid item xs={12} sm={3}>
            <MKBox
              width="100%"
              height="100%"
              borderRadius="xl"
              shadow="lg"
              sx={{
                backgroundImage: ({
                  palette: { gradients },
                  functions: { rgba, linearGradient },
                }) =>
                  `${linearGradient(
                    rgba(gradients.dark.main, 0.8),
                    rgba(gradients.dark.state, 0.8)
                  )}, url(${bg2})`,
                  '&:hover': {
                    backgroundColor: 'white',
                    opacity: [0.9, 0.8, 0.4],
                    transition: "all .5s ease-in-out",
                  },
                backgroundSize: "cover",
                backgroundPosition: "center",
                border: "2px solid grey",
              }}
            >
              <HashLink to="/#second">
            <MKBox
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  width="100%"
                  height="100%"
                >
                  <MKBox py={0} pl={0} pr={{ xs: 6, sm: 0 }} my="auto">
                  <MKTypography color="white" mb={1} textAlign="center" sx={{ variant: {xs: "h4", md: "h5"}}}>
                      Evidence Managment
                    </MKTypography>
                  </MKBox>
                </MKBox>
                </HashLink>
              </MKBox>
          </Grid>
          <Grid item xs={12} sm={5}>
            <MKBox
              width="100%"
              height="100%"
              borderRadius="xl"
              shadow="lg"
              sx={{
                backgroundImage: ({
                  palette: { gradients },
                  functions: { rgba, linearGradient },
                }) =>
                  `${linearGradient(
                    rgba(gradients.dark.main, 0.8),
                    rgba(gradients.dark.state, 0.8)
                  )}, url(${bg3})`,
                  '&:hover': {
                    backgroundColor: 'white',
                    opacity: [0.9, 0.8, 0.4],
                    transition: "all .5s ease-in-out",
                  },
                backgroundSize: "cover",
                backgroundPosition: "center",
                border: "2px solid grey",
              }}
            >
              <HashLink to="/#third">
            <MKBox
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  width="100%"
                  height="100%"
                >
                  <MKBox py={0} pl={0} pr={{ xs: 6, sm: 0 }} my="auto">
                  <MKTypography color="white" mb={1} textAlign="center" sx={{ variant: {xs: "h4", md: "h5"}}}>
                      Dynamic Messaging
                    </MKTypography>
                  </MKBox>
                </MKBox>
                </HashLink>
              </MKBox>
          </Grid>
          <Grid item xs={12} sm={3}>
            <MKBox
              width="100%"
              height="100%"
              borderRadius="xl"
              shadow="lg"
              sx={{
                backgroundImage: ({
                  palette: { gradients },
                  functions: { rgba, linearGradient },
                }) =>
                  `${linearGradient(
                    rgba(gradients.dark.main, 0.8),
                    rgba(gradients.dark.state, 0.8)
                  )}, url(${bg4})`,
                  '&:hover': {
                    backgroundColor: 'white',
                    opacity: [0.9, 0.8, 0.4],
                    transition: "all .5s ease-in-out",
                  },
                backgroundSize: "cover",
                backgroundPosition: "center",
                border: "2px solid grey",
              }}
            >
              <HashLink to="/#fourth">
            <MKBox
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  width="100%"
                  height="100%"
                >
                  <MKBox py={0} pl={0} pr={{ xs: 6, sm: 0 }} my="auto">
                  <MKTypography color="white" mb={1} textAlign="center" sx={{ variant: {xs: "h4", md: "h5"}}}>
                      API V2
                    </MKTypography>
                  </MKBox>
                </MKBox>
                </HashLink>
              </MKBox>
          </Grid>
          <Grid item xs={12} md={5}>
            <MKBox
              width="100%"
              height="100%"
              borderRadius="xl"
              shadow="lg"
              sx={{
                backgroundImage: ({
                  palette: { gradients },
                  functions: { rgba, linearGradient },
                }) =>
                  `${linearGradient(
                    rgba(gradients.dark.main, 0.8),
                    rgba(gradients.dark.state, 0.8)
                  )}, url(${bg5})`,
                  '&:hover': {
                    backgroundColor: 'white',
                    opacity: [0.9, 0.8, 0.4],
                    transition: "all .5s ease-in-out",
                  },
                backgroundSize: "cover",
                backgroundPosition: "center",
                border: "2px solid grey",
              }}
            >
              <HashLink to="/#fifth">
            <MKBox
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  width="100%"
                  height="100%"
                >
                  <MKBox py={0} pl={0} pr={{ xs: 6, sm: 0 }} my="auto">
                  <MKTypography color="white" mb={1} textAlign="center" sx={{ variant: {xs: "h4", md: "h5"}}}>
                      Google API Partnership
                    </MKTypography>
                  </MKBox>
                </MKBox>
                </HashLink>
              </MKBox>
          </Grid>
          <Grid item xs={12} sm={4}>
            <MKBox
              width="100%"
              height="100%"
              borderRadius="xl"
              shadow="lg"
              
              sx={{
                backgroundImage: ({
                  palette: { gradients },
                  functions: { rgba, linearGradient },
                }) =>
                  `${linearGradient(
                    rgba(gradients.dark.main, 0.8),
                    rgba(gradients.dark.state, 0.8)
                  )}, url(${bg6})`,
                  '&:hover': {
                    backgroundColor: 'white',
                    opacity: [0.9, 0.8, 0.4],
                    transition: "all .5s ease-in-out",
                  },
                backgroundSize: "cover",
                backgroundPosition: "center",
                border: "2px solid grey",
              }}
            >
              <HashLink to="/#sixth">
            <MKBox
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  width="100%"
                  height="100%"
                >
                  <MKBox py={0} pl={0} pr={{ xs: 6, sm: 0 }} my="auto">
                  <MKTypography color="white" mb={1} textAlign="center" sx={{ variant: {xs: "h4", md: "h5"}}}>
                      Other
                    </MKTypography>
                  </MKBox>
                </MKBox>
                </HashLink>
              </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default ContentOne;
