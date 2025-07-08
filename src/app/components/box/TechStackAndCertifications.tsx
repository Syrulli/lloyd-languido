'use client';
import React from 'react';
import { Box, Button } from '@mui/material';
import TypographyHeader from '../typography/TypographyHeader';
import CertificateCard from '../card/CertificateCard';
import { LayersIcon, VerifiedIcon, ArrowIcon } from '../icons/IconPack'; 

interface Props {
  techStack: string[];
  items: any[];
}

const TechStackAndCertifications: React.FC<Props> = ({ techStack, items }) => {
  return (
    <Box data-aos="fade-up" sx={{ flex: 1, display: 'flex', flexDirection: 'column', textAlign: 'left',}}>
      <TypographyHeader><LayersIcon sx={{ fontSize: 'inherit' }} /> Tech Stack</TypographyHeader>
      <Box className="flex flex-wrap gap-2">
        {techStack.map((tech, index) => (
          <span key={index} className="px-2 py-0.5 text-xs rounded-md bg-foreground/5 border border-foreground/10">
            {tech}
          </span>
        ))}
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: { xs: 4, sm: 3, lg: 3.4, xl: 2 } }}>
        <TypographyHeader>
          <VerifiedIcon sx={{ fontSize: 'inherit' }} /> Certifications & Badges
        </TypographyHeader>
        <Button
          component="a"
          href="/certifications"
          sx={{
            mr: { lg: 2, xl: 0 },
            mb: { xs: 0.5, sm: 0.5, lg: 0.5 },
            textDecoration: 'none',
            color: 'inherit',
            fontSize: 10,
            textTransform: 'capitalize',
            '&:hover': { backgroundColor: 'transparent' },
          }}
        >
          View all <ArrowIcon sx={{ fontSize: 'inherit' }} />
        </Button>
      </Box>
      <Box sx={{ height: 245, position: 'relative' }}>
        {items.map((item, index) => (
          <CertificateCard key={index} item={item} />
        ))}
      </Box>
    </Box>
  );
};

export default TechStackAndCertifications;
