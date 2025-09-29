'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Box, Card, Typography } from '@mui/material';

const CertificateCard = ({ item }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Link href="/certifications" passHref>
        <Card
          sx={{
            width: { lg: 510, xl: 700 },
            height: { lg: 80, xl: 80 },
            marginBottom: 1.5,
            cursor: 'pointer',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            px: 2,
            py: 1,
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
            },
          }}
          className="card-section"
        >
          <Box sx={{ flex: 1, pr: 2 }}>
            <Typography
              variant="body1"
              sx={{
                textAlign: 'left',
                fontSize: '0.8rem',
                fontWeight: 'bold',
              }}
            >
              {item.text}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                textAlign: 'justify',
                marginTop: '3px',
              }}
            >
              <small>{item.paragraph}</small>
            </Typography>
          </Box>

          {item.image && (
            <Box
              sx={{
                width: 55,
                height: 55,
                borderRadius: 1,
                overflow: 'hidden',
                flexShrink: 0,
              }}
            >
              <Image
                src={item.image}
                alt={item.text}
                width={55}
                height={55}
                style={{ objectFit: 'cover' }}
              />
            </Box>
          )}
        </Card>
      </Link>
    </Box>
  );
};
export default CertificateCard;
