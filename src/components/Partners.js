import { Box, Button, Grid, ImageList, ImageListItem, Stack, Typography } from '@mui/material'
import React from 'react'
import partner1 from "../Assets/partner-1.png"
import partner2 from "../Assets/partner-2.png"
import partner3 from "../Assets/partner-3.png"

const Partners = () => {
  let logo = [{ img: partner1 }, { img: partner2 }, { img: partner3 }, { img: partner1 }, { img: partner2 }, { img: partner3 }, { img: partner2 }, { img: partner3 }]
  return (
    <>
      <Box container sx={{
        width: "100%",
        height: "100%"
      }}>
        <Stack>
          <Typography variant="body1" my={2} component="h2" color={"#0F4089"} fontWeight={500} textAlign="center">
            In partnership with
          </Typography>
          <Typography variant="h3" component="h2" my={2} textAlign="center" fontWeight={700}>
            World's Top Universities
          </Typography>
          <ImageList sx={{ width: "70%", marginX: "auto", py: 4 }} className='brand-list'>
            {logo.map((item) => (
              <ImageListItem key={item.img} sx={{ width: "200px" }}>
                <img
                  srcSet={item.img}
                  src={item.img}
                  alt="logo"

                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
          <Stack marginX="auto" my={2}>

            <Button variant="contained" sx={{
              width: "250px", backgroundColor: "#E8F0FC", color: "#196AE5", py: 2, boxShadow: 0,
              '&:hover': {
                backgroundColor: "#E8F0FC",
                boxShadow: 'none',
              }
            }} size="large">View More Universities</Button>
          </Stack>


        </Stack>
      </Box>
    </>
  )
}

export default Partners