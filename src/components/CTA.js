import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'

const CTA = ({ tag1, tag2, tag3, button }) => {
    return (
        <Box className="cta-box" sx={{ backgroundColor: "#705DED", p: 5, mx: "auto", my: 10, borderRadius: 2, width: "90%" }} >
            <Grid sx={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>

                <Grid lg={6} color="white" width={"60%"}>
                    {tag1 && <Typography variant='body1'>{tag1}</Typography>}
                    <Typography variant='h3' sx={{ py: 2 }}  >{tag2}</Typography>
                    <Typography variant='h6' color="#DAD5F9">{tag3}</Typography>
                </Grid>
                <Grid lg={6} width={"40%"} display={"flex"} justifyContent={"flex-end"}>
                    <Button variant="contained" sx={{
                        width: "max-content", backgroundColor: "#fff", color: "#000", py: 1.5, my: 7, mr: 10, '&:hover': {
                            backgroundColor: '#fff',
                            boxShadow: 'none',
                        },
                    }} size="large">{button}</Button>
                </Grid>

            </Grid>
        </Box >
    )
}

export default CTA