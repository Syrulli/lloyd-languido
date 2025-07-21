import { Box, Stack, Typography, Button, } from '@mui/material';
import { GitHubIcon, AccountTreeIcon } from '../icons/IconPack';
import CardSwap, { Card } from '../card/CardSwap';
import Image from 'next/image';

export default function ProjectSection() {
    return (
        <Stack
            direction={{ xs: 'column', md: 'row' }}
            alignItems={{ xs: 'center', md: 'center' }}
            sx={{
                maxWidth: { xs: '93%', lg: '1025px', xl: '1350px' },
                height: { xs: '350px', lg: '450px', xl: '460px' },
                mx: 'auto',
                overflow: 'hidden',
                mt: 2,
                borderRadius: 2,
            }}
            className="card-section"
            data-aos="fade-up"
        >
            <Box
                sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    px: { xs: 2, sm: 4, lg: 5 },

                }}
            >
                <Box sx={{ mt: { xs: 5, }, marginRight: { xs: 9, }, }}>
                    <Typography variant="h5" fontWeight="bold">
                        Recent Projects
                    </Typography>
                    <Typography variant="body1" sx={{ fontSize: '0.88rem' }}>
                        Bringing ideas to life through development.
                    </Typography>
                </Box>
                <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                    <Button
                        component="a"
                        href="https://github.com/Syrulli"
                        target="_blank"
                        size="small"
                        variant="contained"
                        sx={{
                            backgroundColor: '#c5661e',
                            color: 'white',
                            textTransform: 'capitalize',
                            fontSize: '0.75rem',
                        }}
                    >
                        <GitHubIcon sx={{ fontSize: 'inherit', mr: 0.5, mb: 0.3 }} />
                        Github
                    </Button>
                    <Button
                        component="a"
                        href="/projects"
                        size="small"
                        variant="outlined"
                        sx={{
                            borderColor: 'white',
                            color: 'white',
                            textTransform: 'none',
                            fontSize: '0.75rem',
                            '&:hover': {
                                borderColor: 'white',
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            },
                        }}
                    >
                        <AccountTreeIcon sx={{ fontSize: 'inherit', mr: 0.5, }} />
                        View projects
                    </Button>
                </Stack>
            </Box>

            <Box
                sx={{
                    flex: 1,
                    height: 450,
                    marginRight: { xs: 0, lg: 10, },
                    position: 'relative',
                }}
            >
                <CardSwap cardDistance={60} verticalDistance={70} delay={5000}>
                    <Card className="card-section" >
                        <Box
                            sx={{
                                px: 3,
                                py: 1,
                                display: 'flex',
                                gap: 1,
                            }}
                        >
                            {['#ff5f56', '#ffbd2e', '#27c93f'].map((color, index) => (
                                <Box
                                    key={index}
                                    sx={{ width: 12, height: 12, bgcolor: color, borderRadius: '50%' }}
                                />
                            ))}
                        </Box>
                        <Image
                            src="/projects/img-6.png"
                            alt="Home image"
                            width={500}
                            height={450}
                            style={{
                                objectFit: 'contain',
                                borderBottomLeftRadius: 8,
                                borderBottomRightRadius: 8,
                            }}
                            loading='lazy'
                        />
                    </Card>
                    <Card className="card-section" >
                        <Box
                            sx={{
                                px: 2,
                                py: 1,
                                display: 'flex',
                                gap: 1,
                            }}
                        >
                            {['#ff5f56', '#ffbd2e', '#27c93f'].map((color, index) => (
                                <Box
                                    key={index}
                                    sx={{ width: 12, height: 12, bgcolor: color, borderRadius: '50%' }}
                                />
                            ))}
                        </Box>
                        <Image
                            src="/projects/img-8.png"
                            alt="Home image"
                            width={500}
                            height={450}
                            style={{
                                objectFit: 'contain',
                                borderBottomLeftRadius: 8,
                                borderBottomRightRadius: 8,
                            }}
                            loading='lazy'
                        />
                    </Card>
                    <Card className="card-section" >
                        <Box
                            sx={{
                                px: 2,
                                py: 1,
                                display: 'flex',
                                gap: 1,

                            }}
                        >
                            {['#ff5f56', '#ffbd2e', '#27c93f'].map((color, index) => (
                                <Box
                                    key={index}
                                    sx={{ width: 12, height: 12, bgcolor: color, borderRadius: '50%' }}
                                />
                            ))}
                        </Box>
                        <Image
                            src="/projects/img-3.png"
                            alt="Home image"
                            width={500}
                            height={450}
                            style={{
                                objectFit: 'contain',
                                borderBottomLeftRadius: 8,
                                borderBottomRightRadius: 8,
                            }}
                            loading='lazy'
                        />
                    </Card>
                </CardSwap>
            </Box>
        </Stack>
    );
}