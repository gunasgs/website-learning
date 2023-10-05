import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container, ImageListItem } from '@mui/material';


function CardCom({ title, tag }) {
    let data = [1, 2, 3, 4, 5, 6, 7]
    return (
        <>
            <Container maxWidth="xl" >
                {tag && <Typography variant="body1" sx={{

                    ml: 4,
                    color: "#0F40A8",

                }}>
                    {tag}
                </Typography>}
                {tag ? <Typography variant="h3" sx={{
                    my: 4,
                    ml: 4,
                    fontWeight: "700"
                }}>
                    {title}
                </Typography> : <Typography variant="h3" sx={{
                    mt: 10, mb: 3,
                    ml: 4,
                    fontWeight: "700"
                }}>
                    {title}
                </Typography>}

                <Box sx={{
                    display: "flex", overflowX: "scroll", scrollbarWidth: 'thin', ml: 3,

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
                            minWidth: 275, minHeight: 250, display: "flex", flexDirection: "column",
                            justifyContent: "space-between", boxShadow: 2, mb: 4, my: 1, borderRadius: 2, ml: 2, "&:hover": {
                                boxShadow: 8,

                                cursor: "pointer"
                            }
                        }}>
                            <CardContent>
                                <ImageListItem sx={{ width: "150px", py: 2 }}>
                                    <img

                                        src="https://d1vwxdpzbgdqj.cloudfront.net/home-new/entrepreneur-india.png"
                                        alt="logo"

                                        loading="lazy"
                                    />
                                </ImageListItem>
                                <Typography variant="body1" fontWeight={500} py={2}>
                                    Best Corporate Training Platform - 2023
                                </Typography>


                            </CardContent>
                            <CardActions>
                                <Button size="small" sx={{ fontWeight: "600", textTransform: "none", fontSize: "15px" }}>Read more</Button>
                            </CardActions>
                        </Card>
                    ))}

                </Box>
            </Container >

        </>
    )
}

export default CardCom