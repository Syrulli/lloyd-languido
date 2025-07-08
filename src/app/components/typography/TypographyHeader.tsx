import React, { ReactNode } from 'react';
import { Typography } from '@mui/material';
interface TypographyHeaderProps {
    children: ReactNode;
}
const TypographyHeader: React.FC<TypographyHeaderProps> = ({ children }) => {
    return (
        <Typography gutterBottom variant="body1" sx={{fontSize: '0.9rem', fontWeight: 'bold' }}>
            {children}
        </Typography>
    );
};
export default TypographyHeader;