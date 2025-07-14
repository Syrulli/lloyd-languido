"use client";
import * as React from 'react';
import { useState } from 'react';
import {
  Stack,
  StackProps,
  Toolbar,
  Typography,
  Container,
  AppBar,
  Button,
  Drawer,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Link from 'next/link';
import Image from 'next/image';
import { pages } from '@/constant/app';

const Nav = () => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen: boolean) => () => setOpen(newOpen);

  return (
    <>
      <Button
        variant="text"
        onClick={toggleDrawer(true)}
        sx={{ color: "white", display: { xs: "flex", sm: "none" }, }}
      >
        <MenuIcon />
      </Button>
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        anchor="right"
        sx={{
          display: {  sm: "none" },
          "& .MuiDrawer-paper": {
            height: "100%",
            width: "80%",
            backgroundColor: "var(--background-body)",
            color: "white",
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
          <Button onClick={toggleDrawer(false)} sx={{ color: "white" }}>
            <CloseIcon />
          </Button>
        </Box>
        <NavList onItemClick={toggleDrawer(false)} />
      </Drawer>

      <NavList
        sx={{
          display: { xs: "none", sm: "inherit" },
          mr: { md: 3 },
        }}
      />
    </>
  );
};

const NavList = ({ onItemClick, ...props }: { onItemClick?: () => void } & StackProps) => {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      gap={4}
      width={{ xs: "100%", sm: "initial" }}
      textAlign={{ xs: "center", sm: "initial" }}
      fontSize={{ xs: "15px", sm: "initial" }}
      {...props}
    >
      {pages.map((page) => (
        <Link key={page.href} href={page.href}>
          <Typography
            onClick={onItemClick}
            sx={{
              color: { xs: "primary", sm: "white" },
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            {page.name}
          </Typography>
        </Link>
      ))}
    </Stack>
  );
};

const Header = () => {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(10px)',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 0, lg: 9, xl: 7 } }}>
        <Toolbar>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
          >
            <Link href="/">
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: 'transparent',
                  '&:hover': {
                    backgroundColor: 'transparent',
                  },
                  marginLeft: { xs: 2, sm: 0, lg: 2 },
                }}
              >
                <Image src="/logo.png" alt="Lloyd Sydlik" width={30} height={30} priority />
              </Box>
            </Link>
            <Nav />
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;