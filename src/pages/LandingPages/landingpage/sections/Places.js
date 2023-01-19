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
import MKBadge from "components/MKBadge";
import MKTypography from "components/MKTypography";

// Material Kit 2 PRO React components
import SimpleBlogCard from "examples/Cards/BlogCards/SimpleBlogCard";

function Places() {
  const actionProps1 = {
    type: "internal",
    route: "/pages/Blogs/blog-post-1",
    color: "dark",
    label: "read more",
  };
  const actionProps2 = {
    type: "internal",
    route: "/pages/Blogs/blog-post-2",
    color: "dark",
    label: "read more",
  };
  const actionProps3 = {
    type: "internal",
    route: "/pages/Blogs/blog-post-3",
    color: "dark",
    label: "read more",
  };

  return (
    <MKBox component="section" py={3}>
      <Container>
        <Grid
          container
          item
          flexDirection="column"
          alignItems="center"
          xs={12}
          lg={6}
          sx={{ textAlign: "center", mx: "auto" }}
        >
          <MKBadge
            variant="contained"
            color="info"
            badgeContent="Content Creators"
            container
            circular
            sx={{ mb: 1 }}
          />
          <MKTypography variant="h2" mb={1}>
            Explore the reasons you should be using Nalapod{" "}
          </MKTypography>
          <MKTypography variant="body2" color="text">
            Some insights for ya. Read up on how you can be expanding your business by understanding where you fit in the digital market and creating new interactions.
          </MKTypography>
        </Grid>
        <Grid container spacing={8} sx={{ mt: 3 }} justifyContent="center">
          <Grid item xs={12} md={6} lg={5}>
            <MKBox mt={3}>
              <SimpleBlogCard
                image="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
                title="The Content Creator Market"
                description="What the landscape looks like and how to move up in it."
                action={actionProps1}
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} md={6} lg={5}>
            <MKBox mt={3}>
              <SimpleBlogCard
                image="https://images.unsplash.com/photo-1498677231914-50deb6ba4217?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
                title="Using Social Media to Expand Your Business"
                description="This is the time to use these platforms to benefit your business."
                action={actionProps2}
              />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Places;
