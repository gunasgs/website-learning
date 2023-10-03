import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import reason1 from "../Assets/reson-1.jpg"
import reason2 from "../Assets/reason-2.jpg"
import reason3 from "../Assets/reason-3.png"
import DoneIcon from '@mui/icons-material/Done';
import StarIcon from '@mui/icons-material/Star';
const Reasons = () => {
    let data = [{
        id: "1",
        img: reason1,
        title: "Get Personalized Guidance",
        des: "Weekly mentorship sessions with Industry Experts along with Personalized attention in small groups of 5-15 learners. Gain hands-on exposure through industry-relevant projects",
        icon1: DoneIcon,
        icon2: StarIcon,
        val1: "2,00,000+",
        val2: "4.7/5",
        des1: "Mentorship Sessions Completed",
        des2: "Average Mentor Rating",
        button: "view experience",
        row: true
    }, {
        id: "2",
        img: reason2,
        title: "GL Excelerate Dedicated Career Support",
        des: "We offer mock interviews to prep for your dream job. Participate in hackathons and career fairs to stay ahead of others.",
        icon1: DoneIcon,
        icon2: StarIcon,
        val1: "66%",
        val2: "3000+",
        des1: "Alumni Career Transition",
        des2: "Hiring Companies",
        button: "Learn more",
        row: false
    }, {
        id: "3",
        img: reason3,
        title: "Networking and Program Support",
        des: "Grow your professional network with peer interactions, sessions with industry leaders, and get access to a dedicated program manager to solve your queries.",
        icon1: DoneIcon,
        icon2: StarIcon,
        val1: "1:1",
        val2: "4.3/5",
        des1: "Program support",
        des2: "Average Support Rating",
        row: true
    }]
    return (
        <>
            <Box container maxWidth="lg" mx={"auto"} >
                <Typography variant="body1" sx={{
                    my: 2,
                    color: "#0F4089", fontWeight: "500", textAlign: "center"
                }} >
                    Here are more reasons
                </Typography>
                <Typography variant="h2" sx={{
                    my: 2,
                    fontWeight: "700", textAlign: "center"
                }}>
                    Why choose Great Learning courses?
                </Typography>
                {data.map((e) => (
                    <Grid container spacing={7} mt={2} flexDirection={e.row ? "row" : "row-reverse"}>
                        <Grid item lg={6} >
                            <img
                                src={e.img}
                                alt="person"
                                loading="lazy"
                            />
                        </Grid>
                        <Grid item lg={6}>
                            <Stack>
                                <Typography variant="h3" sx={{ width: "70%", fontWeight: "500", mx: "auto", textAlign: "center", mt: 2 }}>
                                    {e.title}
                                </Typography>
                                <Typography variant="h6" sx={{ width: "80%", mx: "auto", color: "#919191", py: 3, textAlign: "center" }}  >
                                    {e.des}
                                </Typography>
                                <Stack direction="row" spacing={2} mx="auto" textAlign="center">
                                    <Grid py={2}>
                                        <DoneIcon sx={{ color: "#1ABAAF", backgroundColor: "#F8F8F8", borderRadius: 10, fontSize: "3rem", p: 1 }} />
                                        <Typography variant="h5" component="h2" fontWeight={600} py={1}>{e.val1}</Typography>
                                        <Typography variant="h6" color={"#818181"} sx={{ width: "90%" }} mx="auto" component="h2">{e.des1}</Typography>

                                    </Grid>
                                    <Grid py={2}>

                                        <StarIcon sx={{ color: "#ffcc00", backgroundColor: "#F8F8F8", borderRadius: 10, fontSize: "3rem", p: 1 }} />
                                        <Typography variant="h5" component="h2" fontWeight={600} py={1}>{e.val2}</Typography>
                                        <Typography variant="h6" color={"#818181"} sx={{ width: "90%" }} mx="auto" component="h2">{e.des2}</Typography>
                                    </Grid>
                                </Stack>
                                {e.button && <Button variant="contained" sx={{ width: "200px", mx: "auto", py: 2, my: 4 }} size="large">{e.button}</Button>}
                            </Stack>
                        </Grid>
                    </Grid>)
                )}
            </Box>

        </>
    )
}

export default Reasons