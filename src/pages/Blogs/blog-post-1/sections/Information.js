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
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Icon from "@mui/material/Icon";
import Link from '@mui/material/Link';

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function Information() {
  return (
    <MKBox component="section" py={6} mt={6}>
      <Container>
        <Grid container spacing={3} item xs={12} lg={8} mx="auto">
          <MKTypography variant="h3" mb={3}>
            Content creator market looking up
          </MKTypography>
          <MKTypography variant="body2">
            As of 2022, the market is worth over $100 billion dollars. That&apos;s a lot of opportunity.
            <br />
            <br />
            <br />
            <br />
            <List>
                <ListItem>
                  <ListItemIcon>
                    <Icon fontSize="xl">people_rounded</Icon>
                  </ListItemIcon>
                  <ListItemText
                    primary="There are over 200 million content creators in the world today."
                    secondary="This number is growing everyday, with more opportunity and paths to monetization."
                  />
                </ListItem>,
                <ListItem>
                  <ListItemIcon>
                    <Icon fontSize="xl">monetization_on_rounded</Icon>
                  </ListItemIcon>
                  <ListItemText
                    primary="It takes content creators an average of 6 1/2 months to earn their first dollar."
                    secondary="This amount of time is due to the saturation of the market, having enough content to be found, and most creators not really having a way to find new fans without existing followers."
                  />
                </ListItem>,
                <ListItem>
                  <ListItemIcon>
                    <Icon fontSize="xl">hub_rounded</Icon>
                  </ListItemIcon>
                  <ListItemText
                    primary="Only 13% of content creators say making money is their top priority, 35% say connecting with audiences is."
                    secondary="Content itself is nothing without an audience. Finding fans is just as important as building content."
                  />
                </ListItem>,
                <ListItem>
                  <ListItemIcon>
                    <Icon fontSize="xl">share_rounded</Icon>
                  </ListItemIcon>
                  <ListItemText
                    primary="77% of content creator respondents consider social media the top channel to reach their audience."
                    secondary="Social media remains the most valuable space for content creators to find audiences; whether you are just starting out or a well-established brand."
                  />
                </ListItem>,
                <ListItem>
                  <ListItemIcon>
                    <Icon fontSize="xl">person_search_rounded</Icon>
                  </ListItemIcon>
                  <ListItemText
                    primary="The top creator challenge reported was &quot;making sure my content gets found&quot;."
                    secondary="It can be incredibly difficult and frustating to get your content found in the vast sea of the internet, but doing so will make or break your business."
                  />
                </ListItem>,
            </List>
            <br/>
            <br />
            <MKTypography>
            References:
            </MKTypography>
            <List>
            <ListItem>
              <Link href="https://explodingtopics.com/blog/creator-economy-stats" sx={{fontStyle: 'italic'}}>Exploding Topics Report</Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.thetilt.com/research" sx={{fontStyle: 'italic'}}>Tilt Report</Link>
            </ListItem>
            </List>
          </MKTypography>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
