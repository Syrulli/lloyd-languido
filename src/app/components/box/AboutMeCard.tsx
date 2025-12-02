'use client';
import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import TerminalIcon from '@mui/icons-material/Terminal';
import TypographyHeader from '../typography/TypographyHeader';

const AboutMeTerminalCard = () => {
    return (
        <Box data-aos="fade-up" sx={{ flexDirection: 'column', px: { xs: 2, lg: 0, xl: 0 } }}>
            <Card
                sx={{
                    bgcolor: 'var(--section)',
                    width: { lg: 470, xl: 600 },
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
                    <TypographyHeader>
                        <TerminalIcon sx={{ fontSize: 'inherit' }} /> Terminal
                    </TypographyHeader>
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
                            {/* I&apos;m a junior full-stack developer with a solid foundation in PHP, MySQL, and JavaScript, passionate about building custom web solutions that are both functional and visually engaging. I&apos;m currently pursuing a Bachelor of Science in Information Technology majoring in Web Development at AMA University, where I continue to sharpen my skills in both front-end and back-end development. My journey in tech has led me to explore the exciting intersection of web development and artificial intelligence.
                            One of my standout projects is a dental condition detection AI powered by a Convolutional Neural Network (CNN), using Google&apos;s Teachable Machine a proof to my ability to implement emerging technologies into practical applications.
                            I&apos;ve demonstrated leadership as the backend team lead during Appcon 2023, a university-wide development competition.
                            Professionally, I work as a freelance developer, contributing to various projects and collaborating with a team of like-minded creatives under the name Lazy Developers. My experience as a developer through freelance work—particularly with Manuel L. Quezon University allowed me to specialize in responsive design and UI/UX development using Bootstrap, ensuring smooth, accessible, and visually cohesive experiences across all devices. */}


                            I&apos;m a full-stack developer with a strong foundation in PHP, MySQL, and JavaScript, passionate about crafting custom web solutions that are both highly functional and visually compelling. I hold a Bachelor of Science in Information Technology, majoring in Web Development, from AMA University, where I honed my expertise in full-stack development and developed a keen interest in the intersection of web technologies and artificial intelligence.
                            <br />
                            <br />
                            Professionally, I work as a Full-Stack Developer at FortunePay, a fintech company in the Philippines that delivers secure and innovative payment gateway solutions. In this role, I build and maintain high-impact financial systems while collaborating with a development team based in China. My current tech stack includes Flutter and Spring Boot for cross-platform social service applications, and Vue.Js for modern, responsive administrative dashboards and client-facing interfaces.
                            <br />
                            <br />
                            In addition to my full-time role, I continue freelancing under the collective Lazy Developers, delivering custom solutions for clients such as Manuel L. Quezon University with a focus on responsive design and intuitive UI/UX using Bootstrap,JavaScript and laravel.
                            <br />
                            <br />
                            {/* One of my proudest achievements is developing a dental condition detection AI powered by a Convolutional Neural Network (CNN) using GoogleI&apos;s Teachable Machine a practical example of applying emerging AI technologies to solve real-world problems. I also demonstrated leadership as the backend team lead at Appcon 2023, a university development competition. */}
                            With professional experience in fintech, international collaboration, and AI-integrated projects, I&apos;m committed to building scalable, secure, and user-centered solutions that drive real impact.
                        </Typography>
                    </CardContent>
                </Box>
            </Card>
        </Box>
    );
};

export default AboutMeTerminalCard;
