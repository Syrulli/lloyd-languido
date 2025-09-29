'use client';
import React from 'react';
import { Box, Button, Card, CardContent } from '@mui/material';
import TypographyHeader from '../typography/TypographyHeader';
import CertificateCard from '../card/CertificateCard';
import { LayersIcon, VerifiedIcon, ArrowIcon } from '../icons/IconPack';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Virtual } from 'swiper/modules';

// Import Swiper styles ✅
import 'swiper/css';

type Props = {
  techStack: string[];
  items: {
    text: string;
    paragraph: string;
  }[];
};

const TechStackAndCertifications: React.FC<Props> = ({ techStack, items }) => {
  return (
    <Box data-aos="fade-up">
      {/* Tech stack card */}
      <Card
        sx={{
          width: { md: 510, xl: 600 },
        }}
        className="card-section"
      >
        <Box
          sx={{
            bgcolor: '#2d2d2d',
            px: 2,
            py: 1,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <TypographyHeader>
            <LayersIcon sx={{ fontSize: 'inherit' }} /> Tech Stack
          </TypographyHeader>
          <Button
            component="a"
            sx={{
              p: '0',
              m: '0',
              textDecoration: 'none',
              color: 'inherit',
              fontSize: 9,
              textTransform: 'none',
              bgcolor: '#111111',
              padding: '2px 6px',
            }}
          >
            View all <ArrowIcon sx={{ fontSize: 'inherit', ml: 0.5 }} />
          </Button>
        </Box>
        <CardContent>
          <Box className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-0.5 text-xs rounded-md bg-foreground/5 border border-foreground/10"
              >
                {tech}
              </span>
            ))}
          </Box>
        </CardContent>
      </Card>

      {/* Certifications Swiper */}
      <Box
        sx={{
          mt: { xs: 3, lg: 2, xl: 0 },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 1,
          }}
        >
          <TypographyHeader gutterBottom>
            <VerifiedIcon sx={{ fontSize: 'inherit' }} /> Recent Certifications
          </TypographyHeader>
          <Button
            component="a"
            href="/certifications"
            sx={{
              p: '0',
              textDecoration: 'none',
              color: 'inherit',
              fontSize: 9,
              textTransform: 'none',
              bgcolor: '#363A3F',
              padding: '2px 6px',
            }}
          >
            View all <ArrowIcon sx={{ fontSize: 'inherit', ml: 0.5 }} />
          </Button>
        </Box>

        <Swiper
          modules={[Autoplay, Virtual]}
          direction="vertical"
          slidesPerView={3}
          spaceBetween={0}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={3000}
          style={{ height: '280px' }} 
        >
          {items.map((item, index) => (
            <SwiperSlide key={index}>
              <CertificateCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default TechStackAndCertifications;
