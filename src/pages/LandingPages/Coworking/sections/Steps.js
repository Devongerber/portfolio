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

import img1 from 'assets/images/page-1.jpg'
import img2 from 'assets/images/page-2.jpg'
import img3 from 'assets/images/page-3.jpg'
import img4 from 'assets/images/page-4.jpg'
import img5 from 'assets/images/page-5.jpg'
import img6 from 'assets/images/page-6.jpg'
import img7 from 'assets/images/page-7.jpg'
import img8 from 'assets/images/page-8.jpg'
import img9 from 'assets/images/page-9.jpg'
import img10 from 'assets/images/page-10.jpg'
import img11 from 'assets/images/page-11.jpg'
import img12 from 'assets/images/page-12.jpg'

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
      description: "Connect Twitter, Instagram, Facebook, Reddit and YouTube accounts to respond in-app to hits",
      disclaimer: "*images just meant show general functionality, not actual UI",
    },
    {
      image:
        img2,
      label: "Second Step",
      title: "Create Campaigns",
      description: "Campaigns consist of a keyword or keywords, chosen networks, thresholds including minimum likes, and more",
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
      description: "Use our analytics dashboard to determine how a campaign is affecting your business and which campaigns are worth focusing more on.",
      disclaimer: "*images just meant show general functionality, not actual UI",

    },
    {
      image:
      img5,
      label: "Fifth Step"
    },
    {
      image:
      img6,
      label: "Sixth Step"
    },
    {
      image:
      img7,
      label: "Seventh Step"
    },
    {
      image:
      img8,
      label: "Eighth Step"
    },
    {
      image:
      img9,
      label: "Ninth Step"
    },
    {
      image:
      img10,
      label: "Tenth Step"
    },
    {
      image:
      img11,
      label: "Eleventh Step"
    },
    {
      image:
      img12,
      label: "Twelfth Step"
    }
  ];

  const steps = [
    {
      number: "01",
      label: "Cover",
    },
    {
      number: "02",
      label: "Intro",
    },
    {
      number: "03",
      label: "Problem",
    },
    {
      number: "04",
      label: "Value Prop",
    },
    {
      number: "05",
      label: "Differentiators",
    },
    {
      number: "06",
      label: "Business Model",
    },
    {
      number: "07",
      label: "Go-To-Market",
    },
    {
      number: "08",
      label: "Competitor Analysis",
    },
    {
      number: "09",
      label: "Team",
    },
    {
      number: "10",
      label: "Financials",
    },
    {
      number: "11",
      label: "Status",
    },
    {
      number: "12",
      label: "End",
    },
  ];

  // Swiper navigation buttons styles
  const navigationStyles = {
    opacity: 0.5,
    cursor: "pointer",
    transition: "opacity 0.15s ease",
    color: "white",

    "&:hover, &:focus": {
      opacity: 1,
    },
  };

  return (
    <MKBox component="section" py={4} position="relative" id="steps">
      <Container>
      <Grid container mt={{md: 8}}>
        {steps.map(({ number, label }, index) => (
          <Grid key={label} item xs={12} lg={3} textAlign="center" display={{xs: "none", md: "block"}}>
            <MKTypography
              variant="body1"
              color="black"
              fontWeight="bold"
              pl={2}
              textGradient
              sx={{ fontFamily: ({ typography: { h1 } }) => h1.fontFamily, cursor: "pointer" }}
              onClick={() => slideTo(index + 1)}
            >
              <MKBox component="span">{number}</MKBox>
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
          autoplay={{ delay: 4000 }}
          speed={1500}
          spaceBetween={0}
          slidesPerView={1}
          allowTouchMove={false}
          loop
        >
          {slides.map(({ image, label, title}) => (
            <SwiperSlide key={label}>
              <Grid container spacing={3} alignItems={{xs: "center", md: "left"}} sx={{ mb: { xs: 12, md: 0 } }}>
                <Grid item xs={12} md={12} ml={{ xs: 0, lg: "auto" }}>
                  <MKBox sx={{ p: { xs: 0, md: 2 } }} mx="auto" textAlign={{xs: "center", md: "left"}} >
                    <MKBox
                      component="img"
                      src={image}
                      alt={title}
                      width={{xs: "100%", md: "auto"}}
                      borderRadius="xl"
                      sx={{ boxShadow: 5, maxHeight: {xs: "20rem", md: "37.5rem"} }}

                    />
                  </MKBox>
                </Grid>
              </Grid>
            </SwiperSlide>
          ))}
          <MKBox
            sx={{ display: { xs: 'none', md: 'flex' } }}
            display="flex"
            position="absolute"
            bottom={{ xs: 0, lg: "30%" }}
            right="5%"
            zIndex={2}
          >
            <MKTypography
              variant="h2"
              ref={navigationPrevRef}

              mr={{ xs: 8, md: 2, lg: 8 }}
              sx={navigationStyles}
            >
              <MKBox className="fas fa-chevron-left" color="white"/>
            </MKTypography>
            <MKTypography variant="h2" ref={navigationNextRef} sx={navigationStyles}>
              <MKBox className="fas fa-chevron-right" color="white"/>
            </MKTypography>
          </MKBox>
        </Swiper>
      </Container>
    </MKBox>
  );
}

export default Steps;
