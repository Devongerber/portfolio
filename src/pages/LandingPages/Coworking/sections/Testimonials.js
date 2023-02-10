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
// import Stack from "@mui/material/Stack";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function Testimonials() {
  const image =
    "https://images.unsplash.com/photo-1618817449098-1d5538be1739?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80";

  return (
    <MKBox component="section" position="relative" py={6}>
      <Container sx={{ maxWidth: "100% !important" }}>
        <Grid container item xs={10} sx={{ mx: "auto" }}>
          <MKBox variant="gradient" bgColor="dark" borderRadius="lg" width="100%" py={6}>
            <Grid container>
              <Grid item xs={12} md={6} xl={4} sx={{ position: "relative", px: 6 }}>
                <MKBox
                  component="img"
                  src={image}
                  alt="image"
                  borderRadius="md"
                  maxWidth="300px"
                  width="100%"
                  position="relative"
                  mt={-12}
                />
              </Grid>
              <Grid
                item
                xs={12}
                md={5}
                xl={4}
                sx={{
                  position: "relative",
                  px: { xs: 6, md: 2 },
                  mt: { xs: 3, md: 0 },
                  my: { xs: 0, md: "auto" },
                  color: ({ palette: { white } }) => white.main,
                }}
              >
                <Icon fontSize="large">format_quote</Icon>
                <MKTypography
                  variant="body2"
                  color="white"
                  fontWeight="light"
                  mb={2}
                  sx={{ fontSize: "1.125rem" }}
                >
                  It&apos;s not the best content that wins. It&apos;s the best-promoted content that wins.
                </MKTypography>
                <MKTypography variant="button" fontWeight="bold" color="white">
                  Andy Crestodina{" "}

                </MKTypography>
              </Grid>
              <Grid item xs={1} />
              <Grid
                item
                xs={12}
                xl={2}
                sx={{ px: { xs: 6, xl: 0 }, my: { xs: 0, xl: "auto" }, lineHeight: 1 }}
              >
                <MKTypography variant="h3" color="white" mt={{ xs: 6, xl: 0 }} mb={1}>
                  $104 Billion
                </MKTypography>
                <MKTypography component="p" variant="button" color="white" opacity={0.8} mb={2}>
                  is the estimated worth of the global content creator economy
                </MKTypography>
                <MKTypography
                  component="a"
                  href="#steps"
                  variant="button"
                  color="white"
                  fontWeight="regular"
                  sx={{
                    width: "max-content",
                    display: "flex",
                    alignItems: "center",

                    "& .material-icons-round": {
                      fontSize: "1.125rem",
                      transform: `translateX(3px)`,
                      transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
                    },

                    "&:hover .material-icons-round, &:focus .material-icons-round": {
                      transform: `translateX(6px)`,
                    },
                  }}
                >
                  How we can help you
                  <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
                </MKTypography>
              </Grid>
            </Grid>
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Testimonials;
