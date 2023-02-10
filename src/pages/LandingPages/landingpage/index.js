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
/* eslint react/jsx-no-bind: 0 */

import { useEffect, useRef } from "react";
import { v4 as uuidv4 } from 'uuid';

import * as Typed from "typed.js";
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
import MKInput from "components/MKInput";
import MKSnackbar from "components/MKSnackbar";


// Material Kit 2 PRO React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Coworking page sections
import Testimonials from "pages/LandingPages/landingpage/sections/Testimonials";
import AboutUs from "pages/LandingPages/landingpage/sections/AboutUs";
import Places from "pages/LandingPages/landingpage/sections/Places";
import Contact from "pages/LandingPages/landingpage/sections/Contact";
import Contact1 from "pages/LandingPages/landingpage/sections/Contact1";
import ContactFirst from "pages/LandingPages/landingpage/sections/ContactFirst";
import ContactThird from "pages/LandingPages/landingpage/sections/ContactThird";
import ContactFourth from "pages/LandingPages/landingpage/sections/ContactFourth";
import ContentOne from "pages/LandingPages/landingpage/sections/TableContents";
import TestimonialsTwo from "pages/LandingPages/landingpage/sections/Other";


// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/bg-coworking4.jpg";




function Landing() {
  
  const typedJSRef = useRef(null);

// Setting up typedJS
useEffect(() => {
  const typedJS = new Typed(typedJSRef.current, {
    strings: ["Product Manager", "Designer", "Strategist", 'Leader'],
    typeSpeed: 50,
    backSpeed: 70,
    backDelay: 200,
    startDelay: 500,
    loop: true,
  });

  return () => typedJS.destroy();
}, []);
  return (
    <>
    <MKBox component="header" position="relative">
      <MKBox
        display="flex"
        alignItems="left"
        minHeight="75vh"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: {xs: "right", md: "center"},
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={12}
            mt={18}
            flexDirection="column"
            justifyContent="center"
            alignItems="left"
            textAlign="left"
            mx="auto"
          >
            <MKTypography
              variant="h1"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              <span ref={typedJSRef} />
              <br />
              
            </MKTypography>
            <MKTypography variant="body1" color="white" mt={0} mb={6} px={{ xs: 0, lg: 0 }}>
            Devon Gerber Portfolio
            </MKTypography>
            <br />
            
          </Grid>
        </Container>
      </MKBox>
    </MKBox>
      <Card
        sx={{
          p: { xs: 0, md: 2 },
          mx: { xs: 0, lg: 3 },
          mt: -8,
          mb: 4,
          
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.6),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        < br />
        < br />
        < br />
        < br />
        <ContentOne/>
        < br />
        < br />
        < br />
        < br />
        <ContactFirst/>
        < br />
        < br />
        < br />
        < br />
        <Contact />
        < br />
        < br />
        < br />
        < br />
        <Contact1 />
        < br />
        < br />
        < br />
        < br />
        <ContactThird />
        < br />
        < br />
        < br />
        < br />
        <ContactFourth />
        < br />
        < br />
        < br />
        < br />
        <TestimonialsTwo/>
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Landing;
