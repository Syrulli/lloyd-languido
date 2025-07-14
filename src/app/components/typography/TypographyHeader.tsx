import React from 'react';
import { Typography, TypographyProps } from '@mui/material';

interface TypographyHeaderProps extends TypographyProps {}

const TypographyHeader: React.FC<TypographyHeaderProps> = ({ children, ...props }) => {
  return (
    <Typography
      gutterBottom
      variant="body1"
      sx={{ fontSize: '0.9rem', fontWeight: 'bold' }}
      {...props}
    >
      {children}
    </Typography>
  );
};

export default TypographyHeader;
