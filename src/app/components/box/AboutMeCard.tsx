'use client';
import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import TerminalIcon from '@mui/icons-material/Terminal';

const AboutMeTerminalCard = () => {
    return (
        <Box data-aos="fade-up" sx={{ flexDirection: 'column', }}>
            <Card
                sx={{
                    bgcolor: 'var(--section)',
                    width: { md: 550, xl: 600 },
                    borderRadius: 2,
                }}
                className="card-section"
            >
                <Box
                    sx={{
                        bgcolor: '#2d2d2d',
                        px: 2,
                        py: 1,
                        borderTopLeftRadius: 8,
                        borderTopRightRadius: 8,
                    }}
                >
                    <Typography variant="body2" sx={{ color: '#9ca3af', fontSize: '0.8rem' }}>
                        <TerminalIcon sx={{ fontSize: '1rem' }} /> Terminal
                    </Typography>
                </Box>
                <Box
                    onCopy={(e) => e.preventDefault()}
                    onPaste={(e) => e.preventDefault()}
                    onContextMenu={(e) => e.preventDefault()}
                    onTouchStart={(e) => e.preventDefault()}
                    sx={{
                        userSelect: 'none',
                        WebkitUserSelect: 'none',
                        MozUserSelect: 'none',
                        msUserSelect: 'none',
                    }}
                >
                    <CardContent>
                        <Typography gutterBottom variant="body1" sx={{ color: '#B876E7', fontSize: '0.8rem' }}>
                            $ npx <span style={{ color: '#52A060' }}>create-next-app@latest about-me</span>
                        </Typography>
                        <Typography sx={{ textAlign: 'justify', fontSize: '0.8rem' }}>
                            I&apos;m a junior full-stack developer with a solid foundation in PHP, MySQL, and JavaScript, passionate about building custom web solutions that are both functional and visually engaging. I&apos;m currently pursuing a Bachelor of Science in Information Technology majoring in Web Development at AMA University, where I continue to sharpen my skills in both front-end and back-end development. My journey in tech has led me to explore the exciting intersection of web development and artificial intelligence. One of my standout projects is a dental condition detection AI powered by a Convolutional Neural Network (CNN), using Google&apos;s Teachable Machine a proof to my ability to implement emerging technologies into practical applications.
                            I&apos;ve demonstrated leadership as the backend team lead during Appcon 2023, a university-wide development competition. Professionally, I work as a freelance developer, contributing to various projects and collaborating with a team of like-minded creatives under the name Lazy Developers. My experience as a developer through freelance work—particularly with Manuel L. Quezon University allowed me to specialize in responsive design and UI/UX development using Bootstrap, ensuring smooth, accessible, and visually cohesive experiences across all devices.
                        </Typography>
                    </CardContent>
                    
                </Box>
            </Card>
        </Box>
    );
};

export default AboutMeTerminalCard;
