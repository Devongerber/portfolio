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
import bgImage from "assets/images/img-4.png";

function ContactThird() {
  return (
    <MKBox component="section" py={{ xs: 5, lg: 10 }} id="fourth">
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
                  backgroundPosition: "left",
                }}
              />

              
          
              <Grid item xs={12} lg={5} justifyContent="center" sx={{ mt: 10, mb: 10 }}>
              <MKTypography variant="h3" textAlign="center" mb={2}>
                API V2
              </MKTypography>
              <MKBox>
                <MKBox py={3} px={{ xs: 3, md: 12, lg: 6, xl: 12 }}>
                  <Grid container spacing={3} sx={{ mb: 3 }}>
                    <Grid item xs={12} sx={{ my: 1 }}>
                      <MKTypography 
                        variant="body2" textAlign="left">
                        Our API for the &quot;takedown&quot; tech/managed service was not scalable enough for the complexity of what was needed
                        due to the amount of data mappings and automation I was moving towards. The goal was to have a system that could handle
                        changing data from endpoints on 3 of our other APIs as well as data assigned and edited in this API with dynamic mappings
                        to allow some &quot;takedowns&quot; to be automated to external APIs right after ingestion, some to be pushed to one of many queues for a manual analyst to type,
                        and some to be automatically up/down checked with our scrapers. 
                        
                      </MKTypography>
                    </Grid>
                    <Grid item xs={12}>
                      <MKTypography
                        variant="body2" textAlign="left" fontWeight="bold"
                      >
                        After V2 implementation, our median-time-to-resolution dropped by 57%.
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

export default ContactThird;
