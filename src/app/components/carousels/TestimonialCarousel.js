'use client';
import React from 'react';
import Carousel from 'react-material-ui-carousel';

import { Card, CardContent, Typography, Box, useMediaQuery,useTheme, } from '@mui/material';
const recommendationCarousel = ({ recommendationGroups }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const flattenedRecommendations = recommendationGroups.flat();
  const slides = [];
  for (let i = 0; i < flattenedRecommendations.length; i += isMobile ? 1 : 2) {
    slides.push(flattenedRecommendations.slice(i, i + (isMobile ? 1 : 2)));
  }
  return (
    <Box data-aos="fade-up" sx={{ maxWidth: 1920, mb: 2 }}>
      <Carousel
        indicators={true}
        navButtonsAlwaysVisible={false}
        animation='slide'
        interval={7000}
        navButtonsProps={{ style: { pointerEvents: 'none', opacity: 0 } }}
      >
        {slides.map((slide, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              gap: 2,
              width: { lg: 1013, xl: 1350 },
            }}
          >
            {slide.map((testimonial, idx) => (
              <Card
                key={idx}
                className='card-section'
                sx={{
                  flex: 1,
                  maxWidth: 1600,
                  marginBottom: isMobile ? 2 : 1.5,
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                      mb: 1,
                    }}
                  >
                    {testimonial.image && (
                      <Box
                        component='img'
                        src={testimonial.image}
                        alt={`${testimonial.name}'s photo`}
                        loading='lazy'
                        sx={{
                          width: 50,
                          height: 50,
                          borderRadius: '50%',
                        }}
                      />
                    )}
                    <Box>
                      <Typography
                        variant='body1'
                        sx={{ fontSize: '0.9rem', fontWeight: 'bold' }}
                      >
                        {testimonial.name}
                      </Typography>
                      <Typography variant='body2' sx={{ fontSize: '0.7rem' }}>
                        {testimonial.position}
                      </Typography>
                    </Box>
                  </Box>
                  <hr />
                  <Typography
                    sx={{ fontSize: '0.7rem', fontWeight: 'bold', mt: 1 }}
                  >
                    {testimonial.text}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};
export default recommendationCarousel;
