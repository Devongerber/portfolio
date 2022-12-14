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

import { useState, useEffect, useRef } from "react";
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
import Steps from "pages/LandingPages/landingpage/sections/Steps";


// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/bg-coworking4.jpg";

const initialList = [
  {
    id: 'a',
    email: 'devrgerber@gmail.com',
  },
];

function Landing() {
  const [list, setList] = useState(initialList);
  const [email, setName] = useState('');

  const [show, setShow] = useState(false);
  const toggleSnackbar = () => setShow(!show);

function handleChange(event) {
  setName(event.target.value);
}

function handleAdd() {
  const newList = list.concat({ email, id: uuidv4() });

  setList(newList);

  setName('');
  toggleSnackbar()
}
  const typedJSRef = useRef(null);

// Setting up typedJS
useEffect(() => {
  const typedJS = new Typed(typedJSRef.current, {
    strings: ["content creator", "podcaster", "youtuber", "influencer", "writer"],
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
      <DefaultNavbar
        routes={routes}
        action={{
          route: "#contact-cta",
          label: "Join Waitlist",
          color: "info",
        }}

      />
    <MKBox component="header" position="relative">
      <MKBox
        display="flex"
        alignItems="left"
        minHeight="100vh"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
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
              Our mission is to build for the <br /> <span ref={typedJSRef} />
            </MKTypography>
            <MKTypography variant="body1" color="white" mt={0} mb={6} px={{ xs: 0, lg: 0 }}>
            Join the waitlist now for access to the beta
            </MKTypography>
            <br />
            <Grid container spacing={2}>
              <Grid item xs={6} sm={6} md={3}
              alignItems="left"
              textAlign="left"
              mt={3}
              >
                <MKInput variant="outlined" type = "email" label="Insert Email" value = {email} onChange ={handleChange} InputLabelProps={{
                  style : {color : 'white'} }} inputProps={{ style: { color: "white"} }} fullWidth />
              </Grid>
              <Grid item xs={12} sx={{ mb: 3, ml: -1 }}>
                <Switch id="flexSwitchCheckDefault" defaultChecked />
                <MKTypography
                  component="label"
                  variant="button"
                  color="white"
                  fontWeight="regular"
                  htmlFor="flexSwitchCheckDefault"
                  sx={{ userSelect: "none", cursor: "pointer" }}
                >
                  I agree to the{" "}
                  <MKTypography component="a" href="#" variant="button" fontWeight="regular" color="white">
                    <u>Terms and Conditions</u>
                  </MKTypography>
                  .
                </MKTypography>
              </Grid>
              <Grid item xs={12} sm={12}>
                <MKButton variant="gradient" color="white" onClick={handleAdd} sx={{ height: "100%" }}>
                  Join Waitlist
                </MKButton>
              </Grid>
            </Grid>
          </Grid>
          <MKSnackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          color="dark"
          icon="notifications"
          title="Thanks For The Support"
          content="Thank you for joining the Nalapod waitlist. We will keep you updated on our progress and of course notify you when it's ready for you!!"
          open={show}
          close={toggleSnackbar}
        />
        </Container>
      </MKBox>
    </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 0, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <AboutUs />
        <Testimonials />
        <Steps />
        <br />
        <Places />
        <Contact />
        <Container>
          <MKBox
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderRadius="xl"
            my={24}
            p={6}
            sx={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80)",
            }}
          >
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={12} md={8} lg={5}>
                <MKTypography variant="h5" color="white" fontWeight="bold">
                  Join the content creator revolution. Let your business shine and grow like it has never before.
                </MKTypography>
              </Grid>
              <Grid item xs={12} lg={6} sx={{ ml: "auto" }}>
                <MKBox width="12rem" ml="auto">
                  <MKButton variant="gradient" color="warning" fullWidth sx={{ boxShadow: "none" }}>
                    start now
                  </MKButton>
                </MKBox>
              </Grid>
            </Grid>
          </MKBox>
        </Container>
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Landing;
