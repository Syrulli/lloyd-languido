'use client';
import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import TerminalIcon from '@mui/icons-material/Terminal';

const AboutMeTerminalCard = () => {
    return (
        <Box data-aos="fade-up" sx={{ flex: 1, display: 'flex', flexDirection: 'column', textAlign: 'left',}}>
            <Card
                sx={{
                    bgcolor: 'var(--section)',
                    width: { md: 540, xl: 610 },
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
                <CardContent>
                    <Typography gutterBottom variant="body1" sx={{ color: '#B876E7', fontSize: '0.8rem' }}>
                        $ npx <span style={{ color: '#52A060' }}>create-next-app@latest about-me</span>
                    </Typography>
                    <Typography variant="body1" sx={{ textAlign: 'justify', fontSize: '0.8rem' }}>
                        I'm a passionate junior full-stack developer with a strong foundation in PHP, MySQL, and JavaScript. My expertise lies in crafting custom web solutions that are both functional and visually appealing. Currently pursuing a Bachelor of Science in Information Technology (BSIT) with a major in web development at AMA University, I`ve honed my skills in both front-end and back-end development.
                        Throughout my journey, I`ve been actively exploring the intersection of web development and artificial intelligence. I`ve successfully implemented AI-powered features, such as a dental detection AI using Google`s Teachable Machine, showcasing my ability to leverage cutting-edge technologies.
                        My leadership experience is present through the leadership of a backend development team during a university competition, Appcon 2023. Moreover, working as a front-end developer through freelancing activities at Manuel L. Quezon University has helped me specialize in the design areas of Bootstrap UI/UX while ensuring smooth user experiences on almost all devices.
                        I can commit myself to producing quality work, meeting deadlines, and meeting ever-changing project requirements. My willingness to contribute my skills and knowledge towards innovative projects and talented teams is high.
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
};

export default AboutMeTerminalCard;
