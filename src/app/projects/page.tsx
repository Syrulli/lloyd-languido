'use client';
import Image from 'next/image';
import { useState } from 'react';
import { Box, Card, Modal, Grid, Container, Typography } from '@mui/material';
import TypographyHeader from '../components/typography/TypographyHeader';
import { projects } from '@/constant/app';
import AOSInitializer from '../components/aos/AOSInitializer';

export default function Projects() {
    const [open, setOpen] = useState(false);
    const [modalImage, setModalImage] = useState<string | null>(null);

    const handleOpen = (img: string) => {
        setModalImage(img);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setModalImage(null);
    };

    return (
        <>
            <AOSInitializer />
            <Container sx={{ mt: { xs: 10, md: 12 }, px: { lg: 11 }, }}>
                <Grid container spacing={2} justifyContent="center">
                    {projects.map((proj, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card
                                className='card-section'
                                onClick={() => handleOpen(proj.image)}
                                data-aos="fade-up"
                                sx={{
                                    width: '100%',
                                    cursor: 'pointer',
                                    overflow: 'hidden',
                                    height: '100%',
                                }}
                            >
                                <Box
                                    sx={{
                                        width: '100%',
                                        height: 180,
                                        position: 'relative',
                                        '& img': {
                                            filter: 'grayscale(100%) brightness(0.4)',
                                            transition: 'filter 0.3s ease',
                                        },
                                        '&:hover img': {
                                            filter: 'none',
                                        },
                                    }}
                                >
                                    <Image
                                        src={proj.image}
                                        alt={`${proj.title} badge`}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                    />
                                </Box>

                                <Box sx={{ p: 2 }}>
                                    <TypographyHeader>
                                        {proj.title}
                                    </TypographyHeader>
                                    <Box className="flex flex-wrap gap-2 mt-2">
                                        {proj.techStack?.map((tech: string, index: number) => (
                                            <Box
                                                key={index}
                                                className="px-2 py-0.5 text-xs rounded-md bg-foreground/5 border border-foreground/10"
                                            >
                                                {tech}
                                            </Box>
                                        ))}
                                    </Box>

                                </Box>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <Modal open={open} onClose={handleClose}>
                <Box
                    className="card-section"
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '100%',
                        maxWidth: 600,
                        maxHeight: 'vh',
                        overflow: 'auto',
                        outline: 'none',
                    }}
                >
                    <Box
                        sx={{
                            width: '100%',
                            height: 300,
                            backgroundImage: `url(${modalImage})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                    <Box sx={{ p: 2 }}>
                        <Typography variant="h6" gutterBottom color="white">
                            Certificate Details
                        </Typography>
                        <Typography variant="body2" sx={{ textAlign: 'justify', color: 'white' }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolore enim saepe earum eaque illum tempora sunt, maxime modi iusto...
                        </Typography>
                    </Box>
                </Box>
            </Modal>
        </>
    );
}