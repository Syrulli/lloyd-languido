'use client';
import { Stack, Box, Typography } from '@mui/material';
import TypographyHeader from '../typography/TypographyHeader';
import TestimonialCard from '../carousels/RecommendationCarousel';
import MapIframe from './MapIframe';
import ContactCard from './ContactCard';
import { ForumIcon } from '../icons/IconPack';
const Recommendation = ({ recommendationsGroups }: { recommendationsGroups: any[] }) => {
  return (
    <Stack
      data-aos="fade-up"
      direction="column"
      spacing={4}
      sx={{ px: { xs: 2, sm: 3, md: 15, xl: 40 }, pb: { xs: 2, sm: 3, md: 5 }, mt: { xs: 3, } }}
    >
      <Box sx={{ textAlign: 'justify' }}>
        <TypographyHeader data-aos="fade-up">
          <ForumIcon sx={{ fontSize: 'inherit' }} /> Recommendations
        </TypographyHeader>
        <Typography data-aos="fade-up" variant="body2" sx={{ mb: 2 }}>
          As a junior full-stack developer with a strong foundation in building efficient, user-centered applications, I am committed to continuous improvement and leveraging new technologies to enhance the user experience.
        </Typography>
        <TestimonialCard recommendationGroups={recommendationsGroups} />
        <TypographyHeader data-aos="fade-up">
          Let’s Get in Touch!
        </TypographyHeader>
        <Typography data-aos="fade-up" variant="body2" sx={{ mb: 3 }}>
          Ready to connect? I’m excited to hear from you. Reach out today and let’s start a conversation.
        </Typography>

        <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
          <MapIframe />
          <ContactCard />
        </Stack>
      </Box>
    </Stack>
  );
};
export default Recommendation;