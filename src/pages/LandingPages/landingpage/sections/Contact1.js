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


import bgImage1 from 'assets/images/img-3.png';
import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";
import { Link } from 'react-router-dom';




function Contact1() {
  

  return (
    
    <MKBox
      component="section"
      display="grid"
      position="relative"
      minHeight="90vh"
      borderRadius="xl"
      mr={{ xs: 0, lg: -2 }}
      mb={{ xs: 0, lg: -2 }}
      sx={{ overflow: { xs: "hidden", lg: "visible" }, placeItems: "center" }}
      id="third"
    >
      <MKBox
        component="img"
        alt="lake house"
        src={bgImage1}
        width={{ xs: "100%", lg: "50%" }}
        height={{ xs: "100%", lg: "100%" }}
        position="absolute"
        shadow="lg"
        left={0}
        bottom={{ xs: "-25%", lg: "unset" }}
        top={{ xs: 0, lg: "unset" }}
        sx={{
          objectFit: "cover",
          borderTopRightRadius: ({ borders: { borderRadius } }) => ({ xs: 0, lg: borderRadius.xl }),
          borderBottomRightRadius: ({ borders: { borderRadius } }) => ({ xs: 0, lg: borderRadius.xl }),

        }}
      />
      <Container id="contact-cta" right={0}>
        <Grid container spacing={{ xs: 0, lg: 3 }} sx={{ mt: { xs: 0, lg: 12 } }}>
        <Grid item xs={0} lg={5} justifyContent="center" flexDirection="column" />
        
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
                Dynamic Messaging and Requirements
              </MKTypography>
              <MKBox>
                <MKBox py={3} px={{ xs: 3, md: 12, lg: 6, xl: 12 }}>
                  <Grid container spacing={3} sx={{ mb: 3 }}>
                    <Grid item xs={12} sx={{ my: 1 }}>
                      <MKTypography 
                        variant="body2" textAlign="left">
                        Once we implemented the evidence management system above, I found that users would still submit &quot;takedowns&quot;
                        for use cases that required specific evidence which would lead to a long back and forth between customer support
                        and the customer to try and get the materials needed. The task here was to proactively detect whether a &quot;takedown&quot;
                        would require certain evidence up front using different data points and ML enriched tags. We implemented a feature that
                        asks for whatever relevant evidence we know is needed for key use cases ONLY if each evidence type is not already stored in our system.
                      </MKTypography>
                    </Grid>
                    <Grid item xs={12}>
                      <MKTypography
                        variant="body2" textAlign="left" fontWeight="bold"
                      >
                        Impact currently being measured but expected to decrease &quot;takedown&quot;-related ticket volume by 30%.
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

export default Contact1;
