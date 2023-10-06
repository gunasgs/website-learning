import { Box, Button, Card, CardActions, CardContent, Container, Grid, ImageListItem, Typography } from '@mui/material'
import React from 'react'

const Testimonial = () => {
    let data = [1, 2, 3,]
    return (
        <Container maxWidth="xl" p={0} className='testimonial'>
            <Typography variant="body1" sx={{
                mt: 10,

                ml: 4,
                color: "#0F40A8",

            }}>
                Inspiring everyone to learn with
            </Typography>
            <Typography variant="h3" sx={{
                mt: 2, mb: 3,
                ml: 4,
                fontWeight: "700"
            }}>
                Multiple stories of growth
            </Typography>
            <Typography variant="body1" sx={{
                mt: 2, mb: 3,
                ml: 4,
                color: "#999999"
            }}>
                Find out how our Learners transformed their careers after learning with us.
            </Typography>
            <Button sx={{ backgroundColor: "#E8F0FC", p: "12px", ml: 4, }}>
                get inspired
            </Button>
            <Box sx={{
                display: "flex", overflowX: "scroll", scrollbarWidth: 'thin', ml: 3, mt: 5,

                '&::-webkit-scrollbar': {
                    width: '1px',
                    height: "5px",

                },
                '&::-webkit-scrollbar-track': {
                    background: "#f1f1f1",
                },
                '&::-webkit-scrollbar-thumb': {
                    backgroundColor: '#705DED',
                },
                '&::-webkit-scrollbar-thumb:hover': {
                    background: '#705DED'
                },
            }}>

                {data.map((e) => (
                    <Card sx={{
                        minWidth: "60vw", minHeight: "90vh", display: "flex",
                        justifyContent: "space-between", boxShadow: 2, mb: 4, my: 1, borderRadius: 2, ml: 2, backgroundColor: "#F8F8F8", "&:hover": {
                            boxShadow: 8,

                            cursor: "pointer"
                        }
                    }}>


                        <Grid container spacing={2} >

                            <Grid item xs={6}>
                                <Typography variant="h4" fontWeight={600} pt={5} pl={5}>
                                    Getting a dream job even after a career gap
                                </Typography>
                                <Typography color={"#858585"} pt={5} pl={5}>
                                    I had a career gap of 4 years which made it impossible to crack interviews. Great Learning gave me a earning atmosphere that was friendly and made it easy to clear doubts. They also offered me 10 interviews with different companies like Credence, Prodapt, etc, which helped me get a well-paid job and a good role. I have gained so much confidence in my journey with GL
                                </Typography>

                                <img

                                    src="https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/page-banners/home/neenopal-logo.png"
                                    alt="logo"
                                    className='logo-tes'
                                    loading="lazy"
                                />
                                <Typography variant="h6" fontWeight={500} pt={2} pl={5}>
                                    Ravi Sreedhar
                                </Typography>
                                <Typography color={"#196AE5"} variant="body1" pl={5}>
                                    Data Scientist . NeenOpal
                                </Typography>
                            </Grid>
                            <Grid item xs={6} >

                                <img

                                    src="https://d1vwxdpzbgdqj.cloudfront.net/home-new-variant/ravi.png"
                                    alt="logo"
                                    loading="lazy"
                                    className='img-tes'
                                />

                            </Grid>

                        </Grid>




                    </Card>
                ))}

            </Box>
        </Container >
    )
}

export default Testimonial