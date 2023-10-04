import { Avatar, Box, Button, Card, CardActions, CardContent, Stack, Typography } from '@mui/material'
import React from 'react'
import StarIcon from '@mui/icons-material/Star';
const Client = () => {
    let cardData = [{
        name: "CourseReport.com",
        value: 4.81,

    }, {
        name: "Google Play",
        value: 4.7,

    }, {
        name: "Trustpilot.com",
        value: 4.8,

    }, {
        name: "Career Karma",
        value: 4.6,

    }, {
        name: "Mouthshut.com",
        value: 4.62,

    },]
    return (
        <Box container maxWidth="xl" mx={"auto"} mt={10} >
            <Typography variant="body1" sx={{

                my: 2,
                color: "#0F4089", fontWeight: "500", textAlign: "center"
            }} >
                Providing online education for
            </Typography>
            <Typography variant="h2" sx={{
                my: 2,
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
            <Stack xs={12} sx={{ width: "90%", mx: "auto", my: 3, display: "flex", flexDirection: "row", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
                {cardData.map((e) => (
                    <Card xs={12} sx={{ width: "400px", display: "flex", flexDirection: "row", borderRadius: 3, justifyContent: "space-around", p: 4, alignItems: "center" }} spacing={2}>  <Avatar alt="Remy Sharp" src="https://beforeigosolutions.com/wp-content/uploads/2021/12/dummy-profile-pic-300x300-1.png" />
                        <Typography variant='h5' sx={{ fontSize: "20px" }}>{e.name}</Typography>
                        <Stack display={'flex'} direction={"row"} sx={{ backgroundColor: "#0054A3", borderRadius: 5, p: "4px" }}>
                            <Typography color="#fff">{e.value} </Typography>
                            <StarIcon sx={{ color: "#FFCC00", mt: "-2px" }} />
                        </Stack>



                    </Card>
                ))}

            </Stack>


        </Box>
    )
}

export default Client