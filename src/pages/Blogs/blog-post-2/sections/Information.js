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
import MKTypography from "components/MKTypography";

function Information() {
  return (
    <MKBox component="section" py={6} mt={6}>
      <Container>
        <Grid container spacing={3} item xs={12} lg={8} mx="auto">
          <MKTypography
            component="h6"
            variant="button"
            opacity={0.7}
            textTransform="uppercase"
            fontWeight="bold"
          >
            Nalapod
          </MKTypography>
          <MKTypography variant="h3" mb={3}>
          How You Can Use Nalapod To Expand Your Business and Partnerships
          </MKTypography>
          <MKTypography variant="body2">
            Because most content creators gain growth through social media spread, we decided to build
            a platform that exponentially increases these opportunities by:
          </MKTypography>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
