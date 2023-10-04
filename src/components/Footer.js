import { Box, Button, Container, Divider, Grid, Link, Typography } from "@mui/material";
import React from "react";
import { Facebook, Instagram, Twitter, YouTube, LinkedIn, PhoneAndroid, MailLockOutlined } from "@mui/icons-material";
import Logo from "../Assets/greatlearning-brand.svg";
const Footer = () => {
  let Trending = [
    "UT Austin: PG Program in Data Science and Business Analytics",
    "UT Austin: PG Program in Artificial Intelligence and Machine Learning",
    "Great Lakes: PG Program in Data Science and Engineering (Bootcamp)",
    "Great Lakes: PG Diploma in Management (Online)",
    "Great Lakes: PG Program in Cloud Computing",
    "E&ICT IIT Roorkee: Full Stack Software Development Program",
    "Great Lakes: PG Program in Cyber Security",
    "UT Austin: Artificial Intelligence PG Program for Leaders",
    "Northwestern: MS in Data Science Programme",
    "Arizona: MS in Information Science: Machine Learning"
  ]
  let course = [
    'Data Science Courses',
    'Artificial Intelligence Courses',
    'Digital Marketing Courses',
    'Software Engineering Courses',
    'Cloud Computing Courses',
    'Design Thinking Courses',
    'Cyber Security Courses',
    'Management Courses',
    'Study Abroad Programs',
    'Job Opportunity Programs'
  ]
  let degress = [
    'MBA Courses',
    'M. Tech Courses',
    'Masters Courses'
  ]
  let link = [
    'About Us',
    'Careers at Great Learning',
    'Grievance Redressal',
    'Contact Us'
  ]
  let footer2 = [
    "Data Science",
    `Great Lakes: PG Program in Data Science and Business Analytics
    Great Lakes: PG Program in Data Science and Engineering (Data Science Specialization)`,
    "Great Lakes: PG Program in Data Science and Engineering (Bootcamp)",
    "Artificial Intelligence and Machine Learning",
    `Great Lakes: PG Program in Machine Learning
    Great Lakes: PG Program in Artificial Intelligence and Machine Learning
    IIIT-Delhi: PG Diploma in Artificial Intelligence`

  ]
  return (
    <>
      <Box
        component="footer"
        sx={{
          backgroundColor: "#000",
          color: "rgba(255,255,255,0.8)",
          mt: 4,
          pb: 4,

        }}
      >
        <Container maxWidth="lg" >
          <Grid container spacing={5} sx={{ my: 3 }}>
            <Grid item xs={12} sm={4}  >

              <Typography variant="h5" color="rgba(255,255,255,0.8)" gutterBottom>
                Trending Programs
              </Typography>
              {Trending.map((e) => (
                <Typography variant="body2" color="rgba(255,255,255,0.5)" sx={{ py: 1 }}>
                  {e}
                </Typography>
              ))}
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography variant="h5" color="rgba(255,255,255,0.8)" gutterBottom>
                Browse Courses
              </Typography>
              {course.map((e) => (
                <Typography variant="body2" color="rgba(255,255,255,0.5)" sx={{ py: 1 }}>
                  {e}
                </Typography>
              ))}
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography variant="h5" color="rgba(255,255,255,0.8)" gutterBottom>

                Degrees
              </Typography>
              {degress.map((e) => (
                <Typography variant="body2" color="rgba(255,255,255,0.5)" sx={{ py: 1 }}>
                  {e}
                </Typography>
              ))}

              <Typography variant="h5" color="rgba(255,255,255,0.8)" gutterBottom sx={{ py: 2 }}>

                Quick Links
              </Typography>
              {link.map((e) => (
                <Typography variant="body2" color="rgba(255,255,255,0.5)" sx={{ py: 1 }}>
                  {e}
                </Typography>
              ))}

            </Grid>
            <Grid item xs={12} sm={2} sx={{ px: 2 }}>
              <Box>
                <img src={Logo} alt="logo" loading="lazy" className="logo-img-w" />
              </Box>
              <Typography variant="h6" color="rgba(255,255,255,0.5)" gutterBottom sx={{ mt: 4 }}>

                India :
              </Typography>
              <Typography variant="body2" color="rgba(255,255,255,0.6)" >


                info@mygreatlearning.in
              </Typography>
              <Typography variant="h6" color="rgba(255,255,255,0.6)" gutterBottom>

                9876543210
              </Typography>
              <Typography variant="h6" color="rgba(255,255,255,0.5)" gutterBottom>

                India :
              </Typography>
              <Typography variant="body2" color="rgba(255,255,255,0.6)" gutterBottom>


                info@mygreatlearning.com
              </Typography>
              <Typography variant="h6" color="rgba(255,255,255,0.6)" gutterBottom>

                9876543210
              </Typography>
              <Box sx={{ display: "flex", gap: 2, mt: 3, }}>


                <Link color="inherit" className="s-media" >
                  <Facebook />
                </Link>
                <Link color="inherit" className="s-media" >
                  <Twitter />
                </Link>
                <Link color="inherit" className="s-media">
                  <LinkedIn />
                </Link>

                <Link color="inherit" className="s-media">
                  <YouTube />
                </Link>

                <Link
                  color="inherit"
                  className="s-media"
                >
                  <Instagram />
                </Link>
              </Box>
            </Grid>
          </Grid>


        </Container>

        <Box>

          <Container maxWidth="lg" >
            <Divider variant="middle" color="#fff" />
            <Grid item xs={12} sm={12} >
              <Typography variant="h5" color="rgba(255,255,255,0.8)" gutterBottom sx={{ py: 2 }}>

                PG Programs
              </Typography>
              {footer2.map((e) => (
                <Typography variant="body2" color="rgba(255,255,255,0.5)" sx={{ py: 1 }}>
                  {e}
                </Typography>))}
            </Grid>
          </Container>
          <Divider variant="middle" color="#242424" sx={{ my: 3 }} />
        </Box>

        <Box>
          <Container maxWidth="lg" >
            <Divider variant="middle" color="#fff" />

            <Grid container>
              <Grid item xs={12} sm={6} sx={{ mt: 1 }}>
                <Typography variant="body2" color="rgba(255,255,255,0.5)" sx={{ py: 3 }}>
                  Privacy Policy - Terms of Use
                </Typography>
                <Typography variant="body2" color="rgba(255,255,255,0.5)" >
                  {"© 2012 - 2023  Great Lakes E-Learning Services Pvt. Ltd. All rights reserved "}
                </Typography>
              </Grid>
              <Grid xs={12} sm={6} sx={{ mt: 3, }}>
                <Button variant="outlined" size="large" sx={{ p: 2, my: 2, mx: 3 }} color='inherit'>Get Our Andriod App</Button>
                <Button variant="outlined" size="large" sx={{ p: 2, mx: 3 }} color='inherit'>Get Our IOS App</Button>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>

    </>
  )
};

export default Footer;
