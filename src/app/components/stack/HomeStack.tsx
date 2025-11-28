import { Box, Stack, Typography, Button } from '@mui/material';
import { LocationIcon, DownloadIcon, EmailIcon } from '../icons/IconPack';
import Image from 'next/image';
export default function HomeSection() {
    return (
        <Stack
            direction={{ xs: 'column-reverse', md: 'row' }}
            sx={{
                mb: { xs: 5, lg: 3, xl: 15, },
                mt: { xs: 0, lg: 8, xl: 10},
                position: 'relative',
                height: { xs: '750px', md: '80vh', xl: '70vh' },
            }}
        >
            <Box
                sx={{
                    flex: 1,
                    px: { xs: 2, sm: 3, lg: 15, xl: 25,},
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: { xs: 'flex-start', md: 'flex-start' },
                    textAlign: 'left',

                    position: { xs: 'absolute', md: 'relative' },
                    width: { xs: '100%', md: 'auto' },
                    height: { xs: '100%', md: 'auto' },
                    zIndex: { xs: 2, md: 'auto' },
                    background: { xs: 'rgba(0,0,0,0.3)', lg: 'none' },
                    paddingTop: { xs: 60, lg: 0, xl: 0 },
                }}
            >
                <Typography variant="h5" fontWeight="bold">Lloyd Sydlik Languido</Typography>
                <Typography variant="body1" sx={{ fontSize: '0.9rem', display: 'flex', alignItems: 'center' }}>
                    <LocationIcon sx={{ fontSize: 'inherit', mr: 0.5 }} />
                    Taguig, Philippines
                </Typography>
                <Typography variant="body1" sx={{ fontSize: '0.88rem' }}>
                    Innovating across the stack to power the future.
                </Typography>
                <Stack direction="row" spacing={1} sx={{ mt: 1, }}>
                    <Button
                        component="a"
                        href="/resume/Lloyd Sydlik Nim.pdf"
                        download
                        size="small"
                        variant="contained"
                        sx={{
                            backgroundColor: '#c5661e',
                            color: 'white',
                            textTransform: 'capitalize',
                            fontSize: '0.75rem',
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
                    position: 'relative',
                    width: { xs: '100%', md: '50%' },
                    height: '100%',
                }}
            >
                <Image
                    src="/img-1.png"
                    alt="Background"
                    fill
                    priority
                    style={{ objectFit: 'cover', objectPosition: 'center', zIndex: -1 }}
                />
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: 0,
                        right: 0,
                        width: '100%',
                        height: '100px',
                        background: `
                        linear-gradient(to top, #000000 0%, rgba(17, 29, 29, 0) 100%)
                        `,
                        zIndex: 1,
                        pointerEvents: 'none',
                    }}
                />
            </Box>
        </Stack>
    );
}
