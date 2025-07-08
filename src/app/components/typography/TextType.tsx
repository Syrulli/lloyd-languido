'use client';
import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';

interface TypewriterTextProps {
  text: string;
  speed?: number;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ text, speed = 50 }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    setDisplayedText('');

    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text.charAt(index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <Typography variant="body1" sx={{ fontSize: '0.88rem', whiteSpace: 'pre-wrap' }}>
      {displayedText}
    </Typography>
  );
};

export default TypewriterText;
// <TypewriterText text="test" speed={30} />
