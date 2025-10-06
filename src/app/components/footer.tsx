import React from 'react';
import { Box, Stack, Typography, IconButton } from '@mui/material';
import { FacebookIcon,GitHubIcon, LinkedInIcon, } from './icons/IconPack';
const Footer = () => {
    return (
        <Box
            sx={{
                color: 'white',
                py: 3,
                bottom: 0,
                width: '100%',
            }}
        >
            <Stack direction={{ xs: 'column', sm: 'row' }}
                justifyContent="space-between"
                alignItems="center"
                spacing={1}
                px={{ xs: 0, sm: 0, lg: 15, xl: 40, }}
                textAlign={{ xs: 'center' }}
            >
                <Stack sx={{ display: 'flex', alignItems: 'flex-start' }}>
                    <Typography variant="body2" gutterBottom sx={{ textAlign: 'left' }}>
                        © 2025 Lloyd Languido | All rights reserved.
                    </Typography>
                    {/* <Typography variant="body1" sx={{ fontSize: '0.875rem', display: 'flex', alignItems: 'center' }}>
                        <AlternateEmailOutlinedIcon sx={{ fontSize: 'inherit', mr: 0.5 }} /> lloydlanguido@gmail.com
                    </Typography>
                    <Typography variant="body1" sx={{ fontSize: '0.875rem', display: 'flex', alignItems: 'center' }}>
                        <LocalPhoneOutlinedIcon sx={{ fontSize: 'inherit', mr: 0.5 }} />                         09326073237
                    </Typography> */}
                </Stack>
                <Stack direction="row">
                    <IconButton
                        component="a"
                        href="https://www.facebook.com/syrullicerulli"
                        target="_blank"
                        sx={{ color: 'white' }}
                    >
                        <FacebookIcon />
                    </IconButton>
                    <IconButton
                        component="a"
                        href="https://github.com/Syrulli"
                        target="_blank"
                        sx={{ color: 'white' }}
                    >
                        <GitHubIcon />
                    </IconButton>
                    <IconButton
                        component="a"
                        href="https://www.linkedin.com/in/lloydlanguido/"
                        target="_blank"
                        sx={{ color: 'white' }}
                    >
                        <LinkedInIcon />
                    </IconButton>
                </Stack>
            </Stack>
        </Box>
    );
};
export default Footer;