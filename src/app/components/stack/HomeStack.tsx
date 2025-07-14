import { Box, Stack, Typography, Button } from '@mui/material';
import { LocationIcon, DownloadIcon, EmailIcon } from '../icons/IconPack';
import Image from 'next/image';

export default function HomeSection() {
    return (
        <Stack
            direction={{ xs: 'column', md: 'row' }}
            sx={{ mt: { xs: 15, lg: 10, }, position: 'relative' }}
        >
            <Box
                sx={{
                    flex: 1,
                    px: { xs: 5, sm: 3, lg: 15, xl: 40 },
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}
            >
                <Typography variant="h5" fontWeight="bold">Lloyd Sydlik Nim</Typography>
                <Typography variant="body1" sx={{ fontSize: '0.9rem', display: 'flex' }}><LocationIcon sx={{ fontSize: 'inherit', mr: 0.5 }} />Taguig, Philippines
                </Typography>
                <Typography variant="body1" sx={{ fontSize: '0.88rem' }}>Innovating across the stack to power the future.</Typography>
                <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                    <Button
                        component="a"
                        href="/resume/Lloyd Sydlik Nim.pdf"
                        download
                        size="small"
                        variant="contained"
                        sx={{
                            backgroundColor: '#305256',
                            color: 'white',
                            textTransform: 'capitalize',
                            fontSize: '0.75rem',
                            '&:hover': {
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            },
                        }}
                    >
                        <DownloadIcon sx={{ fontSize: '1rem', mr: 0.5 }} />
                        Download CV
                    </Button>

                    <Button
                        component="a"
                        href="mailto:lloydlanguido@gmail.com"
                        size="small"
                        variant="outlined"
                        sx={{
                            borderColor: 'white',
                            color: 'white',
                            textTransform: 'capitalize',
                            fontSize: '0.75rem',
                            '&:hover': {
                                borderColor: 'white',
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            },
                        }}
                    >
                        <EmailIcon sx={{ fontSize: '1rem', mr: 0.5 }} />
                        Send email
                    </Button>
                </Stack>
            </Box>

            <Box
                sx={{
                    width: { xs: '100%', sm: '80%', md: '60%', lg: '33%', xl: '25%' },
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <Image
                    src="/img-1.png"
                    alt="Home image"
                    width={500}
                    height={450}
                    style={{ objectFit: 'contain' }}
                    priority
                />
            </Box>

            <Box
                sx={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    width: '100%',
                    height: '100px',
                    background: `linear-gradient(to top, #000000 0%, rgba(17, 29, 29, 0) 100%)`,
                    zIndex: 1,
                    pointerEvents: 'none',
                }}
            />
        </Stack>
    );
}
