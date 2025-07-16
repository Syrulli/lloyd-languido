'use client';
import Link from 'next/link';
import { Box, Card, Typography } from '@mui/material';

const CertificateCard = ({ item }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Link href='/certifications' passHref>
        <Card
          sx={{
            width: {lg: 450, xl: 700 },
            height: {lg: 76, xl: 71 },
            marginBottom: 1.5,
            cursor: 'pointer',
            textDecoration: 'none',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
            },
          }}
          className='card-section'
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 1.5,
            }}
          >
            <div style={{ flex: 1 }}>
              <Typography
                variant='body1'
                sx={{
                  textAlign: 'left',
                  fontSize: '0.9rem',
                  fontWeight: 'bold',
                }}
              >
                {item.text}
              </Typography>
              <Typography
                variant='body2'
                sx={{
                  textAlign: 'justify',
                  marginTop: '3px',
                }}
              >
                <small>{item.paragraph}</small>
              </Typography>
            </div>
          </Box>
        </Card>
      </Link>
    </Box>
  );
};
export default CertificateCard;