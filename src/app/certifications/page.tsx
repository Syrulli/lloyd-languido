'use client';
import Image from 'next/image';
import { Box, Stack, Typography, Card, Button } from '@mui/material';
import { certificate } from '@/constant/app';
import AOSInitializer from '../components/aos/AOSInitializer';
const leftColumnCertificate = certificate.slice(0, 6);
const rightColumnCertificate = certificate.slice(6);

export default function Certificate() {
  return (
    <>
      <AOSInitializer />
      <Box sx={{ mt: { xs: 10, md: 7, xl: 10, } }}>
        <Stack direction={{ xs: 'column', md: 'row' }} sx={{ px: { xs: 2, sm: 3, lg: 15, xl: 40, }, pb: 5 }}>
          {[leftColumnCertificate, rightColumnCertificate].map((columnItemsCert, colIdx) => (
            <Box
              key={colIdx}
              sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                textAlign: 'left',
                pt: { xs: 2, sm: 3, lg: 5, xl: 7 },
              }}
            >
              {columnItemsCert.map((certificate, index) => (
                <Card
                  key={`${colIdx}-${index}`}
                  data-aos="fade-up"
                  sx={{
                    width: { lg: 495, xl: 625 },
                    height: 'auto',
                    p: 2,
                  }}
                  className="section"
                >
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="body1" sx={{ fontSize: '0.8rem', fontWeight: 'bold' }}>
                        {certificate.text}
                      </Typography>
                      <Typography variant="body2" sx={{ mt: '3px', textAlign: 'justify' }}>
                        <small>{certificate.paragraph}</small>
                      </Typography>
                      {certificate.downloadBtn && (
                        <Button
                          component="a"
                          href={certificate.downloadBtn}
                          size="small"
                          download
                          sx={{
                            backgroundColor: 'var(--background-body)',
                            color: 'white',
                            display: 'flex',
                            p: 1,
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            textAlign: 'justify',
                            mb: 0.5,
                            width: '110px',
                            height: '28px',
                            mt: 1,
                            textTransform: 'capitalize',
                            '&:hover': {
                              borderColor: 'white',
                              backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            },
                          }}
                        >
                          <Typography variant="body2" sx={{ textTransform: 'capitalize', fontSize: '0.6rem' }}>
                            Download Certificate
                          </Typography>
                        </Button>
                      )}
                    </Box>
                    {certificate.badgeImage && (
                      certificate.badgeLink ? (
                        <a href={certificate.badgeLink} target="_blank" rel="noopener noreferrer">
                          <Image
                            src={certificate.badgeImage}
                            alt={`${certificate.text} badge`}
                            width={75}
                            height={75}
                            style={{ marginLeft: '50px' }}
                            loading="lazy"
                          />
                        </a>
                      ) : (
                        <Image
                          src={certificate.badgeImage}
                          alt={`${certificate.text} badge`}
                          width={50}
                          height={50}
                          style={{ marginLeft: '20px' }}
                        />
                      )
                    )}
                  </Box>
                </Card>
              ))}
            </Box>
          ))}
        </Stack>
      </Box>
    </>
  );
}
