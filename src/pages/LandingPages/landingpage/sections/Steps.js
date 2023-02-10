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

import { useRef, useState } from "react";

// SwiperJS
import SwiperCore, { Autoplay, Navigation } from "swiper";

// SwiperJS react components
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";

// SwiperJS styles
import "swiper/swiper.min.css";
import "swiper/modules/navigation/navigation.min.css";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

import img1 from 'assets/images/Signup1.png'
import img2 from 'assets/images/Signup2.png'
import img3 from 'assets/images/Signup3.png'
import img4 from 'assets/images/Signup4.png'


function Steps() {
  // install SwiperJS modules
  SwiperCore.use([Autoplay, Navigation]);

  // SwiperJS navigation buttons ref
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const [swiperEl, setSwiperEl] = useState(null);

  const slideTo = (index) => swiperEl && swiperEl.slideTo(index);

  const slides = [
    {
      image:
        img1,
      label: "First Step",
      title: "Connect Social Accounts",
      description: "Connect Twitter, Instagram, Facebook, Reddit and YouTube accounts to respond in-app to hits coming in from your campaigns",
      disclaimer: "*images just meant show general functionality, not actual UI",
    },
    {
      image:
        img2,
      label: "Second Step",
      title: "Create Campaigns",
      description: "Creating a campaign consists of specifying keyword(s), networks, thresholds including minimum likes, and more",
      disclaimer: "*images just meant show general functionality, not actual UI",

    },
    {
      image:
        img3,
      label: "Third Step",
      title: "Monitor and Respond",
      description: "As your campaign scrapes the highest value posts containing your keyword(s), you can easily monitor each days intake with intuitive sorting tools. Responding to any of our intitially supported social networks is as easy as a click inside our platform.",
      disclaimer: "*images just meant show general functionality, not actual UI",

    },
    {
      image:
        img4,
      label: "Fourth Step",
      title: "Analyze and Adjust",
      description: "Use our analytics dashboard to determine how a campaign is affecting your business and which campaigns are worth focusing your time on.",
      disclaimer: "*images just meant show general functionality, not actual UI",

    },
  ];

  const steps = [
    {
      number: "01",
      label: "Connect Social Accounts",
    },
    {
      number: "02",
      label: "Create Campaigns",
    },
    {
      number: "03",
      label: "Monitor and Respond",
    },
    {
      number: "04",
      label: "Analyze and Adjust",
    },
  ];

  // Swiper navigation buttons styles
  const navigationStyles = {
    opacity: 0.5,
    cursor: "pointer",
    transition: "opacity 0.15s ease",

    "&:hover, &:focus": {
      opacity: 1,
    },
  };

  return (
    <MKBox component="section" py={0} position="relative" id="steps">
      <Container>
      <Grid container mt={0}>
        {steps.map(({ number, label }, index) => (
          <Grid key={label} item xs={12} lg={3} sx={{textAlign: { xs:"left", md: "center"} }}>
            <MKTypography
              variant="body1"
              color="primary"

              pl={2}
              textGradient
              sx={{ fontFamily: ({ typography: { h1 } }) => h1.fontFamily, cursor: "pointer" }}
              onClick={() => slideTo(index + 1)}
            >
              <MKBox component="span" fontWeight="bold">{number}</MKBox>
              <MKBox component="span" ml={1}>
                {label}
              </MKBox>
            </MKTypography>
          </Grid>
        ))}
      </Grid>
      <br />
      <br />
        <Swiper
          onInit={(swiper) => {
            setSwiperEl(swiper);

            const { navigation: nav } = swiper.params;
            const { navigation } = swiper;

            nav.prevEl = navigationPrevRef.current;
            nav.nextEl = navigationNextRef.current;
            navigation.init();
            navigation.update();
          }}
          autoplay={{ delay: 2000 }}
          speed={700}
          spaceBetween={0}
          slidesPerView={1}
          allowTouchMove={false}
          loop
        >
          {slides.map(({ image, label, title, description, disclaimer }) => (
            <SwiperSlide key={label}>
              <Grid container spacing={3} alignItems="center" sx={{ mb: { xs: 12, md: 0 } }}>
                <Grid item xs={12} md={5} ml={{ xs: 0, lg: "auto" }}>
                  <MKBox sx={{ p: { xs: 0, md: 2 } }} mx="auto" textAlign="center">
                    <MKBox
                      component="img"
                      src={image}
                      alt={title}
                      // width="100%"
                      borderRadius="xl"
                      shadow="lg"
                      sx={{ maxHeight: {xs: "20rem", md: "37.5rem"} }}

                    />
                  </MKBox>
                </Grid>
                <Grid item xs={12} md={5} mr={{ xs: 0, lg: "auto" }} position="relative">
                  <MKTypography
                    component="h6"
                    variant="button"
                    opacity={0.7}
                    textTransform="uppercase"
                    fontWeight="bold"
                  >
                    {label}
                  </MKTypography>
                  <MKTypography
                    variant="h1"
                    fontWeight="bold"
                    sx={{
                      fontSize: ({ typography: { d3, d4 } }) => ({
                        xs: d4.fontSize,
                        lg: d3.fontSize,
                      }),
                    }}
                  >
                    {title}
                  </MKTypography>
                  <MKTypography variant="body1" my={3}>
                    {description}
                  </MKTypography>
                  <MKTypography variant="body2" my={0}>
                    {disclaimer}
                  </MKTypography>
                </Grid>
              </Grid>
            </SwiperSlide>
          ))}
          <MKBox
            sx={{ display: { xs: 'none', md: 'flex' } }}
            display="flex"
            position="absolute"
            bottom={{ xs: 0, lg: "10%" }}
            right="5%"
            zIndex={2}
          >
            <MKTypography
              variant="h2"
              ref={navigationPrevRef}
              color="dark"
              mr={{ xs: 8, md: 2, lg: 8 }}
              sx={navigationStyles}
            >
              <MKBox className="fas fa-chevron-left" />
            </MKTypography>
            <MKTypography variant="h2" ref={navigationNextRef} color="dark" sx={navigationStyles}>
              <MKBox className="fas fa-chevron-right" />
            </MKTypography>
          </MKBox>
        </Swiper>
      </Container>
    </MKBox>
  );
}

export default Steps;
