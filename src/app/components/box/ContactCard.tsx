'use client';
import { useState } from 'react';
import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import { RightArrowIcon, FacebookIcon, EmailIcon, CloseIcon } from '../icons/IconPack';

const contactOptions = [
  {
    label: 'lloydlanguido@gmail.com',
    href: 'mailto:lloydlanguido@gmail.com',
    textStyle: 'lowercase',
    fontSize: '0.7rem',
    showIcon: true,
    icon: <EmailIcon sx={{ fontSize: '1rem' }} />,
    subText: 'Feel free to ask.',
  },
  {
    label: 'Schedule a call.',
    href: 'https://calendly.com/lloydlanguido/30min',
    textStyle: 'none',
    fontSize: '0.7rem',
    showIcon: true,
    icon: <RightArrowIcon sx={{ fontSize: '1rem' }} />,
    subText: "Let's Talk",
  },
  {
    label:
      'Feel free to ask me anything about programming, web development, or my experiences in tech. Let me know how I can help.',
    href: 'mailto:lloydlanguido@gmail.com',
    textStyle: 'none',
    fontSize: '0.7rem',
    showIcon: false,
    icon: false,
    subText: 'Get in touch.',
  },
];

const lazyOptions = [
  {
    label: 'harrri.lazydevs@gmail.com',
    href: 'mailto:harrri.lazydevs@gmail.com',
    textStyle: 'none',
    fontSize: '0.7rem',
    subText: 'Contact us.',
    showIcon: true,
    icon: <EmailIcon sx={{ fontSize: '1rem' }} />,
  },
  {
    label: 'Lazy Developers',
    href: 'https://www.facebook.com/profile.php?id=100069560336398',
    textStyle: 'none',
    fontSize: '0.7rem',
    subText: 'Facebook',
    showIcon: true,
    icon: <FacebookIcon sx={{ fontSize: '1rem' }} />,
  },
  {
    label: 'Lazy Developers, a small team focused on building and deploying small-scale web projects for real-world use, delivering functional apps and tools for clients and online users.',
    href: '#',
    textStyle: 'none',
    fontSize: '0.7rem',
    subText: "I'm a member of",
    showIcon: false,
    icon: false,
  },
];

const ContactCard = () => {
  const [activeTab, setActiveTab] = useState<'contact' | 'lazy'>('contact');

  const tabs = [
    { key: 'contact', label: 'LetConnect.tsx' },
    { key: 'lazy', label: 'LazyDevelopers.tsx' },
  ];

  return (
    <Card sx={{ flex: 2 }} data-aos="fade-up" className="card-section">
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#1e1e1e',
          borderBottom: '1px solid #333',
        }}
      >
        {tabs.map((tab) => (
          <Box
            key={tab.key}
            onClick={() => setActiveTab(tab.key as 'contact' | 'lazy')}
            sx={{
              backgroundColor: activeTab === tab.key ? '#222' : '#111',
              borderRight: '1px solid #333',
              borderTopRightRadius: 4,
              px: 1.5,
              py: 0.5,
              cursor: 'pointer',
              transition: 'background-color 0.2s',
            }}
          >
            <Typography
              sx={{
                fontSize: '0.7rem',
                color: activeTab === tab.key ? 'white' : '#aaa',
              }}
            >
              {tab.label}
              <CloseIcon sx={{ fontSize: 'inherit', ml: 0.8, }} />
            </Typography>
          </Box>
        ))}
      </Box>

      <CardContent>
        {(activeTab === 'contact' ? contactOptions : lazyOptions).map(
          ({ label, href, textStyle, fontSize, subText, showIcon, icon }, idx) => (
            <Box key={idx}>
              {subText && (
                <Typography
                  variant="body2"
                  sx={{
                    pl: 1,
                    textTransform: 'none',
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
                <Typography variant="body2" sx={{ textTransform: textStyle, fontSize }}>
                  {label}
                </Typography>
                {showIcon && icon}
              </Button>
            </Box>
          )
        )}
      </CardContent>
    </Card>
  );
};
export default ContactCard;