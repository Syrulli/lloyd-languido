import React, { ReactNode } from 'react';
import { Stack } from '@mui/material';
interface SectionStackProps {
  children: ReactNode;
}
const SectionStack: React.FC<SectionStackProps> = ({ children }) => {
  return (
    <Stack direction={{ xs: 'column', md: 'row' }} sx={{px: { xs: 2, sm: 3, lg: 15, xl: 40,}, }}>
      {children}
    </Stack>
  );
};
export default SectionStack;