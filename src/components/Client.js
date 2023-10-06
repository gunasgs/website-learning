import { Avatar, Box, Button, Card, CardActions, CardContent, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import app1 from "../../src/Assets/app-1.png"
import app2 from "../../src/Assets/app-2.png"
import app3 from "../../src/Assets/app-3.png"
import app4 from "../../src/Assets/app-4.png"
import app5 from "../../src/Assets/app-5.png"
const Client = () => {
    let cardData = [{
        name: "CourseReport.com",
        icon: app1,
        value: 4.81,

    }, {
        name: "Google Play",
        icon: app4,
        value: 4.7,

    }, {
        name: "Trustpilot.com", icon: app2,
        value: 4.8,

    }, {
        name: "Career Karma", icon: app3,
        value: 4.6,

    }, {
        name: "Mouthshut.com", icon: app5,
        value: 4.62,

    },]
    return (
        <>

            <Box container maxWidth="xl" mx={"auto"} mt={7} >
                <Typography variant="body1" sx={{


                    color: "#0F4089", fontWeight: "500", textAlign: "center"
                }} >
                    Providing online education for
                </Typography>
                <Typography variant="h3" sx={{
                    mt: 2,
                    fontWeight: "700", textAlign: "center"
                }}>
                    Learners across 170+ countries
                </Typography>
                <Stack width={"90%"}
                    mx="auto">
                    <img
                        src="https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/page-banners/home/learners-banner.png"
                        alt="person"
                        loading="lazy"
                    />
                </Stack>
                <Stack xs={12} sx={{ px: 10, mx: "auto", my: 3, display: "flex", flexDirection: "row", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
                    {cardData.map((e) => (
                        <Card xs={12} sx={{ width: "500px", display: "flex", flexDirection: "row", borderRadius: 3, justifyContent: "space-around", p: 3, alignItems: "center", boxShadow: 3 }} >
                            <Avatar alt="app-icon" src={e.icon} />
                            <Typography variant='h5' sx={{ fontSize: "20px" }}>{e.name}</Typography>
                            <Stack display={'flex'} direction={"row"} sx={{ backgroundColor: "#0054A3", borderRadius: 5, p: "4px" }}>
                                <Typography color="#fff">{e.value} </Typography>
                                <StarIcon sx={{ color: "#FFCC00", mt: "-2px" }} />
                            </Stack>



                        </Card>
                    ))}

                </Stack>


            </Box>
            <Container  >
                <Grid width={"90%"} mx={"auto"} mt={8} container sx={{ borderRadius: 2, backgroundColor: "#F8F8F8", }}>

                    <Grid item lg={6} my={"auto"}>
                        <Stack p={5}>
                            <Typography variant="h3" sx={{ fontWeight: "700", mt: 2 }}>
                                Explore Free Course
                            </Typography>
                            <Typography variant="h6" sx={{ width: "100%", color: "#919191", py: 3, }}  >
                                Start your online learning journey at Great Learning Academy for free with our short-term basic courses across various in-demand domains.
                            </Typography>

                            <Button variant="contained" sx={{ width: "200px", py: 2, my: 4 }} size="large">Start for Free</Button>
                        </Stack>
                    </Grid>
                    <Grid item lg={6} >
                        <img
                            src="https://d1vwxdpzbgdqj.cloudfront.net/home-new-variant/academy-banner-v1.png"
                            alt="person"
                            loading="lazy"
                            className='person-img'
                        />
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Client