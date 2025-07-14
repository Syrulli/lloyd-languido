'use client';
import React from 'react';
import { Box } from '@mui/material';
import Image from 'next/image';
import yourImage from ''; // Adjust the path if needed

const HomeImage = () => {
  return (
    <Box sx={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
      <Box
        sx={{
          position: 'absolute',
          width: '150%',
          height: '150%',
          backgroundColor: '#2e4c4c', 
          clipPath: 'polygon(0 100%, 100% 0, 100% 100%, 0% 100%)',
          animation: 'slideDown 2s ease-in-out forwards',
          zIndex: 1,
        }}
      />

      <Box sx={{ position: 'relative', zIndex: 2, display: 'flex', justifyContent: 'center' }}>
        <Image
          src={yourImage}
          alt="person"
          style={{ width: 'auto', height: '100vh', objectFit: 'contain' }}
        />
      </Box>

      <style jsx global>{`
        @keyframes slideDown {
          from {
            transform: translateY(-100%);
          }
          to {
            transform: translateY(0%);
          }
        }
      `}</style>
    </Box>
  );
};

export default HomeImage;
