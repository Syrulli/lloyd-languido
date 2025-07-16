'use client';
import React, { useState, useEffect } from 'react';
import { Typography, Box } from '@mui/material';

interface TypewriterTextProps {
  text: string;
  speed?: number;
  showCursor?: boolean; // optional toggle
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  speed = 50,
  showCursor = true,
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [typingDone, setTypingDone] = useState(false);

  useEffect(() => {
    let index = 0;
    setDisplayedText('');
    setTypingDone(false);

    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text.charAt(index));
        index++;
      } else {
        clearInterval(interval);
        setTypingDone(true);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <Typography
      variant="body1"
      sx={{
        fontSize: '0.88rem',
        whiteSpace: 'pre-wrap',
        display: 'inline-flex',
        alignItems: 'center',
      }}
    >
      {displayedText}
      {showCursor && (
        <Box
          component="span"
          sx={{
            width: '1px',
            height: '1.2em',
            ml: '2px',
            backgroundColor: 'white',
            animation: 'blink 1s step-start infinite',
            '@keyframes blink': {
              '50%': {
                opacity: 0,
              },
            },
          }}
        />
      )}
    </Typography>
  );
};

export default TypewriterText;
