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

import { v4 as uuidv4 } from 'uuid';

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
import Testimonials from "pages/LandingPages/Coworking/sections/Testimonials";
import AboutUs from "pages/LandingPages/Coworking/sections/AboutUs";
import Places from "pages/LandingPages/Coworking/sections/Places";
import Contact from "pages/LandingPages/Coworking/sections/Contact";
import Steps from "pages/LandingPages/Coworking/sections/Steps";


// Routes
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/deck-1.jpg";


function Coworking() {

  return (
    <>
    <MKBox component="header" position="relative">
      <MKBox
        alignItems={{xs: "center", md: "left"}}

        minHeight="50vh"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          mt: -8,
        }}
      >
        <Steps />
        <br />
          </MKBox>
        </MKBox>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
      </>
  );
}

export default Coworking;
