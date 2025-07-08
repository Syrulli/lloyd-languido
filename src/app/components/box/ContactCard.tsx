import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import { RightArrowIcon } from '../icons/IconPack';

const contactOptions = [
  {
    label: 'lloydlanguido@gmail.com',
    href: 'mailto:lloydlanguido@gmail.com',
    textStyle: 'lowercase',
    fontSize: '0.7rem',
    showIcon: true,
    subText: 'Feel free to ask.',
  },
  {
    label: 'Schedule a call',
    href: 'https://calendly.com/lloydlanguido/30min',
    textStyle: 'capitalize',
    fontSize: '0.7rem',
    subText: "Let's Talk",
    showIcon: true,
  },
  {
    label: 'Feel free to ask me anything about programming, web development, or my experiences in tech. Let me know how I can help.',
    href: 'mailto:lloydlanguido@gmail.com',
    textStyle: 'none',
    fontSize: '0.7rem',
    subText: 'Get in touch',
    showIcon: false,
  },
];

const ContactCard = () => {
  return (
    <Card sx={{ flex: 1 }} data-aos="fade-up" className="card-section">
      <Box
        sx={{
          bgcolor: '#1e1e1e',
          px: 2,
          py: 1,
          display: 'flex',
          alignItems: 'center',
          gap: 1,
        }}
      >
        {['#ff5f56', '#ffbd2e', '#27c93f'].map((color, index) => (
          <Box
            key={index}
            sx={{ width: 12, height: 12, bgcolor: color, borderRadius: '50%' }}
          />
        ))}
      </Box>

      <CardContent>
        {contactOptions.map(({ label, href, textStyle, fontSize, subText, showIcon }, idx) => (
          <Box key={idx}>
            {subText && (
              <Typography
                variant="body2"
                sx={{
                  pl: 1,
                  textTransform: 'capitalize',
                  fontSize: '0.7rem',
                  mt: 1,
                  mb: 0.5,
                }}
              >
                {subText}
              </Typography>
            )}
            <Button
              component="a"
              href={href}
              size="small"
              sx={{
                backgroundColor: 'var(--background-body)',
                color: 'white',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                p: 1,
                textTransform: 'capitalize',
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              <Typography variant="body2" sx={{ textStyle, fontSize }}>
                {label}
              </Typography>
              {showIcon && <RightArrowIcon sx={{ fontSize: '1rem' }} />}
            </Button>
          </Box>
        ))}
      </CardContent>
    </Card>
  );
};

export default ContactCard;
