import React from "react";
import HomeImg from "../Assets/Screenshot (3519).png"
import Carousel from 'react-bootstrap/Carousel';
import { Box, Button, Grid, Stack, Typography } from "@mui/material";



const Home = () => {

  let HomeData = [{
    tag: "RISE ABOVE THE REST", title: "Join the league of Great Data Scientists", des: "Learn from Data Science professionals who make business decisions everyday.", img: "https://d1vwxdpzbgdqj.cloudfront.net/home-new-variant/data-science-banner.png"
  }, {
    tag: "Accelerate your career", title: "Learn AI & ML from top universities", des: "Get the promotion you deserve with latest skills in Artificial Intelligence & Machine Learning.", img: "https://d1vwxdpzbgdqj.cloudfront.net/home-new-variant/aiml-banner.png"
  }, {
    tag: "Earn your Masters abroad", title: "Study in the United States at 1/3rd the cost", des: "Spend a year in the US and get 3 year post-study work visa.", img: "https://d1vwxdpzbgdqj.cloudfront.net/home-new-variant/study-abroad-banner.png"
  },
  {
    tag: "Learn with", title: "India’s trusted education platform", des: "Power ahead in your career with certified courses & degrees from world class universities.", img: "https://d1vwxdpzbgdqj.cloudfront.net/home-new-variant/main-home-banner.png"
  }]
  return (
    <>
      <Carousel>
        {HomeData.map((e) =>
        (


          <Carousel.Item interval={3000}>
            <Grid container spacing={7} mb={5} >

              <Grid item lg={6} mt={10} >
                <Stack ml={15}>
                  <Typography variant="body2" sx={{ color: "#F8197A", fontWeight: "500", textTransform: "uppercase" }}  >
                    {e.tag}
                  </Typography>
                  <Typography variant="h3" sx={{ fontWeight: "700", mx: "auto", mr: 5, mt: 1 }}>
                    {e.title}
                  </Typography>
                  <Typography variant="h6" sx={{ color: "#2b2b2b", py: 3, }}  >
                    {e.des}
                  </Typography>
                  <Button variant="contained" sx={{ width: "300px", py: 2, my: 4 }} size="large">Explore Programs</Button>

                </Stack>
              </Grid>
              <Grid item lg={6} >
                <img
                  src={e.img}
                  alt="slider"
                  loading="lazy"
                />
              </Grid>
            </Grid>
          </Carousel.Item>
        )
        )}


      </Carousel >

    </>);
}

export default Home;
