'use client';
import React from 'react';
import { Box, Button } from '@mui/material';
import TypographyHeader from '../typography/TypographyHeader';
import CertificateCard from '../card/CertificateCard';
import { LayersIcon, VerifiedIcon, ArrowIcon } from '../icons/IconPack';

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
      <Box>
        <TypographyHeader >
          <LayersIcon sx={{ fontSize: 'inherit' }} /> Tech Stack
        </TypographyHeader>

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
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mt: { xs: 3, lg: 2, xl: 3 },
        }}
      >
        <TypographyHeader>
          <VerifiedIcon sx={{ fontSize: 'inherit' }} /> Recent Certifications
        </TypographyHeader>

        <Button
          component="a"
          href="/certifications"
          sx={{
            mr: {lg: 2, xl: 3 },
            textDecoration: 'none',
            color: 'inherit',
            fontSize: 10,
            textTransform: 'none',
            '&:hover': { backgroundColor: 'transparent' },
          }}
        >
          View all <ArrowIcon sx={{ fontSize: 'inherit'}} />
        </Button>
      </Box>
      {items.map((item, index) => (
        <CertificateCard key={index} item={item} />
      ))}
    </Box>
  );
};
export default TechStackAndCertifications;