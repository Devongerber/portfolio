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
import Switch from "@mui/material/Switch";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKSnackbar from "components/MKSnackbar";


import bgImage1 from 'assets/images/img-5.png';
import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";
import { Link } from 'react-router-dom';




function ContactFourth() {


  return (
    <MKBox
      component="section"
      display="grid"
      position="relative"
      minHeight="90vh"
      borderRadius="xl"
      mr={{ xs: 0, lg: -2 }}
      mb={{ xs: 10, lg: 20}}
      sx={{ overflow: { xs: "hidden", lg: "visible" }, placeItems: "center" }}
      id="fifth"
    >

      <MKBox
        component="img"
        alt="lake house"
        src={bgImage1}
        width={{ xs: "100%", lg: "50%" }}
        height={{ xs: "100%", lg: "100%" }}
        position="absolute"
        shadow="xl"
        right={0}
        bottom={{ xs: "-25%", lg: "unset" }}
        top={{ xs: 0, lg: "unset" }}
        sx={{
          objectFit: "cover",
          backgroundPosition: "bottom",
          borderTopLeftRadius: ({ borders: { borderRadius } }) => ({ xs: 0, lg: borderRadius.xl }),
          borderBottomLeftRadius: ({ borders: { borderRadius } }) => ({ xs: 0, lg: borderRadius.xl }),

        }}
      />

      <Container id="contact-cta">
        <Grid container spacing={{ xs: 0, lg: 3 }} sx={{ mt: { xs: 0, lg: 12 } }}>
          <Grid item xs={12} lg={7} justifyContent="center" flexDirection="column">
            <MKBox
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              shadow="lg"
              borderRadius="xl"
              sx={{
                backgroundColor: ({ functions: { rgba }, palette: { white } }) =>
                  rgba(white.main, 0.8),
                backdropFilter: "saturate(200%) blur(30px)",
                px: { xs: 3, sm: 6 },
                py: { xs: 3, sm: 8 },
                mb: { xs: 0, lg: 8 },
                mt: { xs: 0, lg: -6 },
              }}
            >
              <MKTypography variant="h3" textAlign="center" mb={2}>
                Google API Partnership
              </MKTypography>
              <MKBox>
                <MKBox py={3} px={{ xs: 3, md: 12, lg: 6, xl: 12 }}>
                  <Grid container spacing={3} sx={{ mb: 3 }}>
                    <Grid item xs={12} sx={{ my: 1 }}>
                      <MKTypography 
                        variant="body2" textAlign="left">
                        In order to remain a leader in the market, we needed to develop more partnerships that could disrupt the
                        infrastructure content in parallel to our normal &quot;takedown&quot; process. A successful integration here was one
                        that would have high impact and reach as well as a recognizable name for our customers. Through some business
                        development by operations leadership and I, I was able to pitch our &quot;Global Disruption&quot; program to Google and get
                        access to a new API in beta. Once we set up an automated integrated with our &quot;takedown&quot; API, we built a customer
                        facing side that displays based on a status response we get from Google&apos;s API.

                        
                      </MKTypography>
                    </Grid>
                    <Grid item xs={12}>
                      <MKTypography
                        variant="body2" textAlign="left" fontWeight="bold"
                      >
                        We currently have a half-year product marketing push going on to use this partnership to get new prospects and increase net retention.
                      </MKTypography>
                    </Grid>
                  </Grid>
                </MKBox>
              </MKBox>
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>



  );
}

export default ContactFourth;
