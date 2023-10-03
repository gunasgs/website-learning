import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'

const CTA = ({ tag1, tag2, tag3, button }) => {
    return (
        <Box sx={{ backgroundColor: "#705DED", width: "90%", mx: "auto", my: 5, borderRadius: 2 }}>
            <Grid sx={{ display: "flex", p: 6, justifyContent: "space-between" }}>

                <Grid lg={6} color="white" >
                    {tag1 && <Typography variant='body1'>{tag1}</Typography>}
                    <Typography variant='h3' sx={{ py: 2 }} >{tag2}</Typography>
                    <Typography Typography variant='h6' color="#DAD5F9">{tag3}</Typography>
                </Grid>
                <Grid lg={6} >
                    <Button variant="contained" sx={{ width: "80%", backgroundColor: "#fff", color: "#000", py: 1.5, my: 7, mr: 20 }} size="large">{button}</Button>
                </Grid>

            </Grid>
        </Box >
    )
}

export default CTA