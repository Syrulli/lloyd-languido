import React, { ReactNode } from 'react';
import { Stack } from '@mui/material';
interface SectionStackProps {
  children: ReactNode;
}
const SectionStack: React.FC<SectionStackProps> = ({ children }) => {
  return (
    <Stack direction={{ xs: 'column', md: 'row' }} sx={{ mb: {xs: 5, lg: 5, xl: 5}, mt: {xs: 4, lg: 5,}, px: { xs: 2, sm: 3, md: 15, xl: 40,}, }}>
      {children}
    </Stack>
  );
};
export default SectionStack;