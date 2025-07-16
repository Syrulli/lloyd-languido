'use client';
import { useEffect, useState } from 'react';
import { Box, Fade } from '@mui/material';
import Image from 'next/image'; 

const LoadingScreen = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const lastLoaded = sessionStorage.getItem('homeLastLoaded');
    const now = Date.now();

    if (!lastLoaded || now - Number(lastLoaded) > 60_000) {
      setVisible(true);

      const timer = setTimeout(() => {
        setVisible(false);
        sessionStorage.setItem('homeLastLoaded', String(now));
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <Fade in={visible} timeout={500} unmountOnExit>
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          bgcolor: 'var(--background-body)',
          zIndex: 9999,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image
          src="/logo.png"
          alt="Loading..."
          width={100}
          height={100}
          style={{ objectFit: 'contain' }}
          priority 
        />
      </Box>
    </Fade>
  );
};

export default LoadingScreen;
