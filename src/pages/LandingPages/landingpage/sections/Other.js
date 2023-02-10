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

import { useRef } from "react";

// SwiperJS
import SwiperCore, { Autoplay, Navigation } from "swiper";

// SwiperJS react components
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";

// SwiperJS styles
import "swiper/swiper.min.css";
import "swiper/modules/navigation/navigation.min.css";

// @mui material components
import Container from "@mui/material/Container";
import Icon from "@mui/material/Icon";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 PRO React examples
import ComplexReviewCard from "examples/Cards/ReviewCards/ComplexReviewCard";

// Images
import review1 from "assets/images/img-7.jpg";
import review2 from "assets/images/img-8.jpg";
import logoSpotify from "assets/images/logos/small-logos/logo-spotify.svg";
import logoSlack from "assets/images/logos/small-logos/logo-slack.svg";

function TestimonialsTwo() {
  // install SwiperJS modules
  SwiperCore.use([Autoplay, Navigation]);

  // Swiper navigation buttons styles
  const navigationStyles = {
    position: "absolute",
    top: 0,
    zIndex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "15%",
    height: "100%",
    textAlign: "center",
    opacity: 0.5,
    cursor: "pointer",
    transition: "opacity 0.15s ease",

    "&:hover, &:focus": {
      opacity: 1,
    },
  };

  // SwiperJS navigation buttons ref
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <MKBox py={8} position="relative" id="sixth">
      <Swiper
        onInit={({ params, navigation }) => {
          const { navigation: nav } = params;

          nav.prevEl = navigationPrevRef.current;
          nav.nextEl = navigationNextRef.current;
          navigation.init();
          navigation.update();
        }}
        autoplay={{ delay: 5000 }}
        speed={800}
        spaceBetween={0}
        slidesPerView={1}
        loop
      >
        <SwiperSlide>
          <Container>
            <ComplexReviewCard
              image={review1}
              title="Threat Intelligence"
              review="LPL Financial identified there was opportunity in the cybersecurity side of the financial advisor market and wanted someone to come in and work closely with customers to figure out what exactly that looks like. I was able to work with the team and evaluate any current integrations (i.e. DLP services) and build out some new ones like Threat Intelligence and then beta test them with 10-20 customers, gathering info in a feedback loop."
              author={{
                
                name: "By the time I left, we had a suite of security products that 50,000 financial advisors could opt into (some free, some paid)",
                
              }}
            />
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <Container>
            <ComplexReviewCard
              image={review2}
              title="Data Management System"
              review="Advantage Solutions had just acquired a B2C business and needed a new web app with a data management system to collect sellable data from customers. 
              Our goal was to complete in 4 months with a 100% migration of old users, just in time for a big partnership announcement with Target."
              author={{
                
                name: "We were able to push out the new web app with the management system to production 3 weeks ahead of schedule and add some additional features on the top of the stakeholder backlog.",
                
              }}
            />
          </Container>
        </SwiperSlide>
        <MKTypography
          variant="h2"
          color="dark"
          sx={{
            ...navigationStyles,
            left: 0,
          }}
          ref={navigationPrevRef}
        >
          <Icon>chevron_left</Icon>
        </MKTypography>
        <MKTypography
          variant="h2"
          color="dark"
          sx={{
            ...navigationStyles,
            right: 0,
          }}
          ref={navigationNextRef}
        >
          <Icon>chevron_right</Icon>
        </MKTypography>
      </Swiper>
    </MKBox>
  );
}

export default TestimonialsTwo;
