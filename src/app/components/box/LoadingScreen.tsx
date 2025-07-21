'use client';
import { useEffect, useState } from 'react';
import { Box, Fade } from '@mui/material';
import Image from 'next/image';

export default function LoadingWrapper({ children }: { children: React.ReactNode }) {
  const [hasMounted, setHasMounted] = useState(false);
  const [showLoading, setShowLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    setHasMounted(true);

    const delay = 2000;
    const fadeDuration = 500;

    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setShowLoading(false);
      }, fadeDuration);
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  if (!hasMounted) return null;

  return (
    <>
      {showLoading && (
        <Fade in={!fadeOut} timeout={500}>
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
