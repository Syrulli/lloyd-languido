'use client';
import { useEffect, useState } from 'react';
import { Box, Fade } from '@mui/material';
import Image from 'next/image';

export default function LoadingWrapper({ children }: { children: React.ReactNode }) {
  const [showLoading, setShowLoading] = useState(true); 
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const lastLoaded = sessionStorage.getItem('homeLastLoaded');
    const now = Date.now();

    if (!lastLoaded || now - Number(lastLoaded) > 60_000) {
      const delay = 2000; 
      const fadeDuration = 100;

      const timer = setTimeout(() => {
        setFadeOut(true);

        setTimeout(() => {
          setShowLoading(false);
          sessionStorage.setItem('homeLastLoaded', String(now));
        }, fadeDuration);
      }, delay);

      return () => clearTimeout(timer);
    } else {
      setShowLoading(false);
    }
  }, []);

  return (
    <>
      {showLoading && (
        <Fade in={!fadeOut} timeout={100}>
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
      )}
      {!showLoading && children}
    </>
  );
}
