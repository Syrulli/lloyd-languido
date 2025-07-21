'use client';
import { useState } from 'react';
import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import { CloseIcon } from '../icons/IconPack';
import {contactOptions, lazyOptions} from '@/constant/app';

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