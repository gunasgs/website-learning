import { Box, Button, Card, CardActions, CardContent, Stack, Typography } from '@mui/material'
import React from 'react'

const Client = () => {
    return (
        <Box container maxWidth="xl" mx={"auto"} mt={10} ml={4}>
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


        </Box>
    )
}

export default Client