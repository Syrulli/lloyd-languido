import React, { ReactNode } from 'react';
import { Stack } from '@mui/material';

interface SectionStackProps {
  children: ReactNode;
}

const SectionStack: React.FC<SectionStackProps> = ({ children }) => {
  return (
    <Stack
      direction={{ xs: 'column-reverse', sm: 'column', md: 'row' }}
      spacing={{ xs: 3, sm: 3, md: 4 }}
      sx={{
        mt: 6,
        px: { xs: 2, sm: 3, md: 5, lg: 15, xl: 20 },
        alignItems: { xs: 'center', md: 'flex-start' },
        justifyContent: { md: 'space-between' },
        maxWidth: '1600px',
        mx: 'auto',
      }}
    >
      {children}
    </Stack>
  );
};

export default SectionStack;