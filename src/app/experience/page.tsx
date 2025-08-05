'use client';
import React from 'react';
import { Box, Typography, Card, CardContent, useMediaQuery, Stack } from '@mui/material';
import TypographyHeader from '../components/typography/TypographyHeader';
import AOSInitializer from '../components/aos/AOSInitializer';
import { timelineData } from '@/constant/app';

export default function ExperienceTimeline() {
    const isMobile = useMediaQuery('(max-width:600px)');
    return (
        <>
            <AOSInitializer />
            <Stack direction={{ xs: 'column', md: 'row' }} sx={{ mt: { xs: 7, lg: 10 }, justifyContent: 'center' }}>
                <Box data-aos="fade-up"
                    sx={{
                        position: 'relative',
                        pl: isMobile ? 2 : 5,
                        pr: isMobile ? 2 : 5,
                        mt: 5,
                        mb: 5,
                        width: { xs: '100%', lg: '95%', xl: '100%' },
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            left: isMobile ? '20px' : '50%',
                            top: 0,
                            bottom: 0,
                            width: '2px',
                            backgroundColor: '#888',
                            transform: isMobile ? 'none' : 'translateX(-50%)',
                        },
                        px: { lg: 11, xl: 40 },
                    }}
                >
                    {timelineData.map((item, index) => (
                        <Box
                            key={index}
                            sx={{
                                position: 'relative',
                                mb: 5,
                                display: 'flex',
                                flexDirection: isMobile ? 'row' : index % 2 === 0 ? 'row-reverse' : 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                gap: 2,
                            }}
                        >
                            <Box data-aos="fade-up"
                                sx={{
                                    width: isMobile ? '100%' : '45%',
                                    marginLeft: isMobile ? '6%' : '0',
                                    textAlign: isMobile ? 'left' : index % 2 === 0 ? 'left' : 'left',
                                }}
                            >
                                <Typography
                                    variant="subtitle2"
                                    sx={{ textTransform: 'uppercase', fontSize: '0.7rem', color: '#ddd' }}
                                >
                                    {item.date} {item.type}
                                </Typography>
                                <Card
                                    className="card-section"
                                    sx={{
                                        backgroundColor: '#111',
                                        color: '#fff',
                                        mt: 1,
                                        width: '100%',
                                        maxWidth: '100%',
                                        textAlign: 'justify',
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            backgroundColor: '#1e1e1e',
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                bgcolor: '#1e1e1e',
                                                px: 2,
                                                py: 1,
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: 1,
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    width: 12,
                                                    height: 12,
                                                    bgcolor: '#ff5f56',
                                                    borderRadius: '50%',
                                                }}
                                            />
                                            <Box
                                                sx={{
                                                    width: 12,
                                                    height: 12,
                                                    bgcolor: '#ffbd2e',
                                                    borderRadius: '50%',
                                                }}
                                            />
                                            <Box
                                                sx={{
                                                    width: 12,
                                                    height: 12,
                                                    bgcolor: '#27c93f',
                                                    borderRadius: '50%',
                                                }}
                                            />
                                        </Box>
                                    </Box>
                                    <CardContent>
                                        <TypographyHeader>
                                            {item.title}
                                        </TypographyHeader>
                                        <Typography variant="body2" sx={{ color: '#ddd', fontSize: '0.8rem' }}>
                                            {item.description}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Box>
                            <Box
                                sx={{
                                    position: 'absolute',
                                    left: isMobile ? '8px' : '50%',
                                    transform: isMobile ? 'translateX(-70%)' : 'translateX(-50%)',
                                    width: '14px',
                                    height: '14px',
                                    backgroundColor: '#888',
                                    borderRadius: '50%',
                                    zIndex: 1,
                                }}
                            />
                        </Box>
                    ))}
                </Box>
            </Stack>
        </>
    );
}