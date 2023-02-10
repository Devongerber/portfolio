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
import Icon from "@mui/material/Icon";
import Stack from "@mui/material/Stack";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Coworking page component
import AboutUsOption from "pages/LandingPages/landingpage/components/AboutUsOption";

function AboutUs() {
  return (
    <MKBox component="section" py={{ xs: 3, md: 12 }}>
      <Container>
        <Grid container>
          <Grid item xs={12} lg={5}>
            <MKTypography variant="h3" my={1}>
              What We Do
            </MKTypography>
            <MKTypography variant="body2" color="text" mb={2}>
              Nalapod users are content creators looking to build their brand using keywords to expand their influence by finding relevant conversations, joining them and tracking the conversions.
            </MKTypography>
            <MKTypography variant="body2" color="text" mb={2}>
            Only a tiny, tiny slice of creators gain a large following just from posting; the other 99% need to way to target and then interact with their audience in whatever niche they create in.
            </MKTypography>
            <MKTypography
              component="a"
              href="#steps"
              variant="button"
              color="primary"
              fontWeight="regular"
              sx={{
                width: "max-content",
                display: "flex",
                alignItems: "center",

                "& .material-icons-round": {
                  fontSize: "1.125rem",
                  transform: "translateX(3px)",
                  transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
                },

                "&:hover .material-icons-round, &:focus .material-icons-round": {
                  transform: "translateX(6px)",
                },
              }}
            >
              More about us
              <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
            </MKTypography>
          </Grid>
          <Grid item xs={12} lg={6} sx={{ ml: { xs: -2, lg: "auto" }, mt: { xs: 6, lg: 0 } }}>
            <Stack>
              <AboutUsOption
                icon="recommend"
                content={
                  <>
                    We pull in the highest priority hits from your

                    keywords, allowing you to focus on business growth.

                  </>
                }
              />
              <AboutUsOption
                icon="forum"
                content={
                  <>
                    We give you the ability to track brands and

                    competitors + use this information for your business.
                  </>
                }
              />
              <AboutUsOption
                icon="analytics"
                content={
                  <>
                    Finally, we provide one-of-a-kind analytics - comparing digital monitoring

                    against content creation for ultimate analysis.
                  </>
                }
              />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default AboutUs;
