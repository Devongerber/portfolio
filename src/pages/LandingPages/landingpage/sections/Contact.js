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
import Switch from "@mui/material/Switch";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKSnackbar from "components/MKSnackbar";


import bgImage1 from 'assets/images/hits-page.png';
import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";
import { Link } from 'react-router-dom';

// Firebase write
import { collection, addDoc } from "firebase/firestore";
import {db} from '../../../../firebase';



function Contact() {
  const initialList = [
    {
      id: 'a',
      email: 'devrgerber@gmail.com',
    },
  ];

  const [list, setList] = useState(initialList);
  const [email, setName] = useState('');
  const [comment, setComment] = useState('');
  const [show, setShow] = useState(false);
  const [showing, setShowing] = useState(false);
  const [showing1, setShowing1] = useState(false);
  const [toggled, setToggled] = useState(true);
  const toggleTerms = () => setToggled(!toggled)
  const toggleSnackbar = () => setShow(!show);
  const toggleError = () => setShowing(!showing);
  const toggleError1 = () => setShowing1(!showing1);



  function handleChangeEmail(event) {
    setName(event.target.value);
  }
  function handleChangeComment(event) {
    setComment(event.target.value);
  }

  function handleAddComment() {
    if (!email || !email.includes("@")) {
      toggleError()
    }
    else if (!toggled === true) {
      toggleError1()
    }

    else {
      const newList = list.concat({ email, id: uuidv4() });
      addDoc(collection(db, "Email_List_Comments"), {
        "Emails": email,
        "Comment": comment,
        });
      setList(newList);
      setName('');
      setComment('');
      toggleSnackbar()
    }
  }

  return (
    <MKBox
      component="section"
      display="grid"
      position="relative"
      minHeight="90vh"
      borderRadius="xl"
      mr={{ xs: 0, lg: -2 }}
      mb={{ xs: 0, lg: -2 }}
      sx={{ overflow: { xs: "hidden", lg: "visible" }, placeItems: "center" }}
    >

      <MKBox
        component="img"
        alt="lake house"
        src={bgImage1}
        width={{ xs: "100%", lg: "50%" }}
        height={{ xs: "100%", lg: "100%" }}
        position="absolute"
        shadow="lg"
        right={0}
        bottom={{ xs: "-25%", lg: "unset" }}
        top={{ xs: 0, lg: "unset" }}
        sx={{
          objectFit: "cover",
          borderTopLeftRadius: ({ borders: { borderRadius } }) => ({ xs: 0, lg: borderRadius.lg }),
        }}
      />

      <Container id="contact-cta">
        <Grid container spacing={{ xs: 0, lg: 3 }} sx={{ mt: { xs: 0, lg: 12 } }}>
          <Grid item xs={12} lg={7} justifyContent="center" flexDirection="column">
            <MKBox
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              shadow="lg"
              borderRadius="xl"
              sx={{
                backgroundColor: ({ functions: { rgba }, palette: { white } }) =>
                  rgba(white.main, 0.8),
                backdropFilter: "saturate(200%) blur(30px)",
                px: { xs: 3, sm: 6 },
                py: { xs: 3, sm: 8 },
                mb: { xs: 0, lg: 8 },
                mt: { xs: 0, lg: -6 },
              }}
            >
              <MKTypography variant="h3" textAlign="center" mb={2}>
                Join The Waitlist
              </MKTypography>
              <MKBox component="form" method="post" autoComplete="off">
                <MKBox py={3} px={{ xs: 3, md: 12, lg: 6, xl: 12 }}>
                  <Grid container spacing={3} sx={{ mb: 3 }}>
                    <Grid item xs={12} sx={{ my: 1 }}>
                      <MKInput
                        variant="standard"
                        type="email"
                        placeholder="eg. devon.gerber@nalapod.com"
                        label="Email Address"
                        value = {email}
                        onChange ={handleChangeEmail}
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <MKInput
                        variant="standard"
                        label="Your Message (tell us what you really want!!)"
                        value = {comment}
                        onChange ={handleChangeComment}
                        rows={4}
                        InputLabelProps={{ shrink: true }}
                        multiline
                        fullWidth
                      />
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item xs={12} sx={{ mb: 3, ml: -1 }}>
                      <Switch id="flexSwitchCheckDefault" defaultChecked onClick={toggleTerms} />
                      <MKTypography
                        component="label"
                        variant="button"
                        color="text"
                        fontWeight="regular"
                        htmlFor="flexSwitchCheckDefault"
                        sx={{ userSelect: "none", cursor: "pointer" }}
                      >
                        I agree to the{" "}
                        <MKTypography component="a" href="https://www.termsandcondiitionssample.com/live.php?token=i4SGGb38qsY0BoTVkuqPl4BrlkqKF6Ro" variant="button" fontWeight="regular">
                          <u>Terms and Conditions</u>
                        </MKTypography>
                        .
                      </MKTypography>
                    </Grid>
                    <Grid item xs={12}>
                      <MKButton type="submit" variant="gradient" color="dark" onClick={handleAddComment}  to="/landing-page"fullWidth>
                        Join Now
                      </MKButton>
                    </Grid>
                  </Grid>
                </MKBox>
              </MKBox>
              <MKSnackbar
              anchorOrigin={{ vertical: "top", horizontal: "center" }}
              color="dark"
              autoHideDuration={4000}
              icon="notifications"
              title="Thanks For The Support"
              content="Thank you for joining the Nalapod waitlist. We will keep you updated on our progress and of course notify you when it's ready for you!!"
              open={show}
              close={toggleSnackbar}
              onClose={toggleSnackbar}
            />
            <MKSnackbar
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            color="error"
            icon="error"
            autoHideDuration={4000}
            title="Incorrect Input"
            content="Please fill in with a valid email address. Thank you!"
            open={showing}
            close={toggleError}
            onClose={toggleError}
          />
          <MKSnackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          color="error"
          icon="error"
          autoHideDuration={4000}
          title="Terms and Conditions"
          content="Please accept the terms and conditions before submitting. Thank you!"
          open={showing1}
          close={toggleError1}
          onClose={toggleError1}
        />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>



  );
}

export default Contact;
