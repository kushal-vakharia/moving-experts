"use client";

import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  Box,
  useScrollTrigger,
  Slide,
  Container,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";

function HideOnScroll(props: { children: React.ReactElement }) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", py: 2 }}>
      <List>
        {["Home", "Services", "About", "Testimonials", "Contact"].map(
          (item) => (
            <ListItem key={item} disablePadding>
              <Button sx={{ color: "#000", width: "100%", py: 1.5 }}>
                {item}
              </Button>
            </ListItem>
          )
        )}
      </List>
      <Button
        variant="contained"
        sx={{
          mt: 2,
          backgroundColor: "#ED170A",
          "&:hover": {
            backgroundColor: "#D11409",
          },
        }}
      >
        Get Started
      </Button>
    </Box>
  );

  return (
    <>
      <HideOnScroll>
        <AppBar
          sx={{
            backgroundColor: scrolled
              ? "rgba(255, 255, 255, 0.95)"
              : "transparent",
            backdropFilter: scrolled ? "blur(10px)" : "none",
            color: "#000",
            boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.1)" : "none",
            transition: "all 0.3s ease",
          }}
        >
          <Container>
            <Toolbar
              sx={{
                justifyContent: "space-between",
                backgroundColor: "white",
                borderRadius: "999px",
                mt: 2.5,
                py: 2,
                "&.MuiToolbar-root": {
                  px: 5,
                },
              }}
            >
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={224}
                height={41}
              />

              <Box sx={{ gap: 3, display: { xs: "none", md: "flex" } }}>
                {["Home", "Services", "About", "Testimonials", "Contact"].map(
                  (item) => (
                    <Link href={`#${item.toLowerCase()}`} key={item}>
                      <Box
                        sx={{
                          ":hover": {
                            color: "#ED170A",
                            cursor: "pointer",
                            transition: "all 0.1s ease",
                            textDecoration: "underline",
                          },
                        }}
                      >
                        {item}
                      </Box>
                    </Link>
                  )
                )}
              </Box>

              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  alignItems: "center",
                  gap: 3,
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: "999px",
                    backgroundColor: "#ED170A",
                    "&:hover": {
                      backgroundColor: "#D11409",
                    },
                  }}
                >
                  Get Started
                </Button>
              </Box>

              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ display: { md: "none" } }}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}
