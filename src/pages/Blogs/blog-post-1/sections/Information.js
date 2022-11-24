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
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";


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
            Content creator market looking up
          </MKTypography>
          <MKTypography variant="body2">
            As of 2022, the market is worth over $100 billion dollars. That&apos;s a lot of opportunity.
            <br />
            <br />
            <List sx={{ listStyleType: 'disc', pl: 4 }}>
            <ListItem sx={{ display: 'list-item' }}>In a Tilt report, they found that 77% of content creator respondents consider social media the top channel to reach their audience.
            </ListItem>
            <br />
            
            <ListItem sx={{ display: 'list-item' }}>In the same report, the top creator challenge reported was &quot;making sure my content gets found&quot;.
            </ListItem>
            </List>
          </MKTypography>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
