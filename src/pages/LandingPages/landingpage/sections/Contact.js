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

import bgImage1 from 'assets/images/hits-page.png';

function Contact() {
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
    >
      <MKBox
        component="img"
        alt="lake house"
        src={bgImage1}
        width={{ xs: "100%", lg: "50%" }}
        height={{ xs: "100%", lg: "100%" }}
        position="absolute"
        shadow="lg"
        right={0}
        bottom={{ xs: "-25%", lg: "unset" }}
        top={{ xs: 0, lg: "unset" }}
        sx={{
          objectFit: "cover",
          borderTopLeftRadius: ({ borders: { borderRadius } }) => ({ xs: 0, lg: borderRadius.lg }),
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
                Join The Waitlist
              </MKTypography>
              <MKBox component="form" method="post" autoComplete="off">
                <MKBox py={3} px={{ xs: 3, md: 12, lg: 6, xl: 12 }}>
                  <Grid container spacing={3} sx={{ mb: 3 }}>
                    <Grid item xs={12} sx={{ my: 1 }}>
                      <MKInput
                        variant="standard"
                        type="email"
                        placeholder="eg. devon.gerber@nalapod.com"
                        label="Email Address"
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <MKInput
                        variant="standard"
                        label="Your Message (tell us what you really want!!)"
                        rows={4}
                        InputLabelProps={{ shrink: true }}
                        multiline
                        fullWidth
                      />
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item xs={12} sx={{ mb: 3, ml: -1 }}>
                      <Switch id="flexSwitchCheckDefault" defaultChecked />
                      <MKTypography
                        component="label"
                        variant="button"
                        color="text"
                        fontWeight="regular"
                        htmlFor="flexSwitchCheckDefault"
                        sx={{ userSelect: "none", cursor: "pointer" }}
                      >
                        I agree to the{" "}
                        <MKTypography component="a" href="#" variant="button" fontWeight="regular">
                          <u>Terms and Conditions</u>
                        </MKTypography>
                        .
                      </MKTypography>
                    </Grid>
                    <Grid item xs={12}>
                      <MKButton type="submit" variant="gradient" color="dark" fullWidth>
                        Join Now
                      </MKButton>
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

export default Contact;
