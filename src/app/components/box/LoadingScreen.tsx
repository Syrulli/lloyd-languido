'use client';
import { useEffect, useState } from 'react';
import { Box, Fade } from '@mui/material';

const LoadingScreen = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
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
          bgcolor: '#0a0a0a',
          zIndex: 9999,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* Your Logo or Image */}
        <img
          src="/logo.png" // Replace with your image path
          alt="Loading..."
          style={{ width: 100, height: 100, objectFit: 'contain' }}
        />
      </Box>
    </Fade>
  );
};

export default LoadingScreen;
