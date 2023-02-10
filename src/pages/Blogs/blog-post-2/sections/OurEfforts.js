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

function OurEfforts() {
  const bgImage =
    "https://images.unsplash.com/photo-1585975438803-350463f9c9b6?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1867&amp;q=80";

  return (
    <MKBox component="section">
      <MKBox
        mx={-2}
        minHeight="18.75rem"
        sx={{
          backgroundImage: ({ palette: { gradients }, functions: { linearGradient, rgba } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
        }}
      />
      <Container>
        <Grid container item flexDirection="column" xs={12} lg={8} mt={12} mx="auto">
          <MKTypography
            component="h6"
            variant="button"
            textTransform="uppercase"
            fontWeight="bold"
            opacity={0.7}
            mb={1}
          >
            Our effort
          </MKTypography>
          <MKTypography variant="body2">
          For example, let’s say you run a true crime podcast focusing on cold cases. You could create a new campaign using “cold case” AND “crime” as your keywords, choose Facebook and Twitter as your networks, select &gt;150 likes as the threshold and set 20 hits per day. From there, you can check in every day to see the most relevant hits (from our priority algorithm) come in and easily join the conversations in-app. We will then track each conversation you join and keep you updated on where it goes + whether the user converts.
          < br/>
          < br/>
          After all this, head on over to our dashboard that allows you to view one-of-a-kind analytics that compare digital monitoring with business metrics (Google analytics, podcast platform, YouTube, etc.). Using this data, analyze and adjust campaigns based on growth patterns and continue refining until you find the sweet spot!
          < br/>
          < br/>

          With the content creation market becoming more saturated, you need a way to break through and interact with potential real fans; after all, these are the people who will spend the most money on your brand.

          </MKTypography>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default OurEfforts;
