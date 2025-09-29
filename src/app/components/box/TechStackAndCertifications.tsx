'use client';
import React, { useState } from 'react';
import { Box, Button, Card, CardContent } from '@mui/material';
import TypographyHeader from '../typography/TypographyHeader';
import CertificateCard from '../card/CertificateCard';
import { LayersIcon, VerifiedIcon, ArrowIcon } from '../icons/IconPack';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Virtual } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';

type Props = {
  techStack: {
    category: string;
    items: string[];
  }[];
  items: {
    text: string;
    paragraph: string;
  }[];
};

const TechStackAndCertifications: React.FC<Props> = ({ techStack, items }) => {
  const [showAllTech, setShowAllTech] = useState(false);

  return (
    <Box data-aos="fade-up">
      <Card
        sx={{
          width: { md: 510, xl: 600 },
          transition: 'all 0.3s ease',
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
            onClick={() => setShowAllTech((prev) => !prev)}
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
            {showAllTech ? 'Collapse' : 'View all'}{' '}
            <ArrowIcon sx={{ fontSize: 'inherit', ml: 0.5 }} />
          </Button>
        </Box>

        <CardContent>
          <AnimatePresence initial={false}>
            <motion.div
              // key={showAllTech ? 'expanded' : 'collapsed'}
              initial={{ height: 110, opacity: 0.9 }}
              animate={{ height: showAllTech ? 'auto' : 100, opacity: 1 }}
              exit={{ height: 110, opacity: 0.9 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="flex flex-wrap gap-2 overflow-hidden"
            >
              {/* {techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-0.5 text-xs rounded-md bg-foreground/5 border border-foreground/10"
                >
                  {tech}
                </span>
              ))} */}
              {techStack.map((group, groupIndex) => (
                <Box key={groupIndex} sx={{ width: "100%" }}>
                  <h6 className="text-sm font-semibold mb-2">{group.category}</h6>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {group.items.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-0.5 text-xs rounded-md bg-foreground/5 border border-foreground/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </Box>
              ))}
            </motion.div>
          </AnimatePresence>
        </CardContent>
      </Card>

      <AnimatePresence>
        {!showAllTech && (
          <motion.div
            key="certifications"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            <Box
              sx={{
                mt: { xs: 3, lg: 3, xl: 0 },
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
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default TechStackAndCertifications;
