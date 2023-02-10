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
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Images
import bgImage from "assets/images/img-1.png";

function ContactFirst() {
  return (
    <MKBox component="section" py={{ xs: 5, lg: 10 }} id="first">
      <Container>
        <Grid container item>
          <MKBox
            width="100%"
            bgColor="white"
            borderRadius="xl"
            shadow="xl"
            mb={6}
            sx={{ overflow: "hidden" }}
          >
            <Grid container spacing={2}>
              <Grid
                item
                xs={12}
                lg={7}
                position="relative"
                px={0}
                sx={{
                  backgroundImage: ({
                    palette: { gradients },
                    functions: { rgba, linearGradient },
                  }) =>
                    `${linearGradient(
                      rgba(gradients.dark.main, 0.3),
                      rgba(gradients.dark.state, 0.3)
                    )}, url(${bgImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />

              
          
              <Grid item xs={12} lg={5} justifyContent="center" sx={{ mt: 10, mb: 10 }}>
              <MKTypography variant="h3" textAlign="center" mb={2}>
                Conditional Automation System
              </MKTypography>
              <MKBox>
                <MKBox py={3} px={{ xs: 3, md: 12, lg: 6, xl: 12 }}>
                  <Grid container spacing={3} sx={{ mb: 3 }}>
                    <Grid item xs={12} sx={{ my: 1 }}>
                      <MKTypography 
                        variant="body2" textAlign="left">
                        ZeroFox was having issues delivering value to customers consistently and on time. I came in to reduce the time-to-value by 50%
                        I designed and built a self-serve conditional automation and queue system in collaboration with our operations leadership.
                        
                      </MKTypography>
                    </Grid>
                    <Grid item xs={12}>
                      <MKTypography
                        variant="body2" textAlign="left" fontWeight="bold"
                      >
                        Time-to-value decreased by 82% after implementation.
                      </MKTypography>
                    </Grid>
                  </Grid>
                </MKBox>
              </MKBox>
              </Grid>
            </Grid>
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default ContactFirst;
