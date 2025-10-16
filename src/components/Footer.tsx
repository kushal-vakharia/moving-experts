"use client";

import { Box, Container, Typography, Grid, Link } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

export default function Footer() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box sx={{ backgroundColor: "#000", color: "#FFFFFF", pt: 8, pb: 4 }}>
      <Container maxWidth="lg">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Grid container spacing={6}>
            <Grid size={{ xs: 12, md: 3 }} sx={{ cursor: "pointer" }}>
              <Image
                src="/images/logo2.png"
                alt="Logo"
                width={300}
                height={55}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 2 }}>
              <Typography
                variant="h6"
                sx={{
                  mb: 3,
                  fontWeight: 600,
                  color: "#FFFFFF",
                }}
              >
                Quick Links
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                {["Features", "Food Menu", "Offer", "Review", "Rider"].map(
                  (link) => (
                    <Link
                      key={link}
                      href="#"
                      sx={{
                        color: "#B5B2B2",
                        textDecoration: "none",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          color: "#ED170A",
                          transform: "translateX(5px)",
                        },
                      }}
                    >
                      {link}
                    </Link>
                  )
                )}
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 2 }}>
              <Typography
                variant="h6"
                sx={{
                  mb: 3,
                  fontWeight: 600,
                  color: "#FFFFFF",
                }}
              >
                Get to Know Us
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                {[
                  "Gift Cards",
                  "DoorDash Stories",
                  "LinkedIn",
                  "Glassdoor",
                  "Accessibility",
                ].map((link) => (
                  <Link
                    key={link}
                    href="#"
                    sx={{
                      color: "#B5B2B2",
                      textDecoration: "none",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        color: "#ED170A",
                        transform: "translateX(5px)",
                      },
                    }}
                  >
                    {link}
                  </Link>
                ))}
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 2 }}>
              <Typography
                variant="h6"
                sx={{
                  mb: 3,
                  fontWeight: 600,
                  color: "#FFFFFF",
                }}
              >
                News
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                {["Blog", "FAQ", "Lift Media ", "Press", "Presse kit"].map(
                  (link) => (
                    <Link
                      key={link}
                      href="#"
                      sx={{
                        color: "#B5B2B2",
                        textDecoration: "none",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          color: "#ED170A",
                          transform: "translateX(5px)",
                        },
                      }}
                    >
                      {link}
                    </Link>
                  )
                )}
              </Box>
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <Typography
                variant="h6"
                sx={{
                  mb: 3,
                  fontWeight: 600,
                  color: "#FFFFFF",
                }}
              >
                Contact
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                {["WhatsApp", "Support 24"].map((service) => (
                  <Link
                    key={service}
                    href="#"
                    sx={{
                      color: "#B5B2B2",
                      textDecoration: "none",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        color: "#ED170A",
                        transform: "translateX(5px)",
                      },
                    }}
                  >
                    {service}
                  </Link>
                ))}
              </Box>
            </Grid>
          </Grid>

          {/* Bottom Bar */}
          <Box
            sx={{
              borderTop: "1px solid #2A2930",
              mt: 6,
              pt: 3,
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: "#B5B2B2",
                textAlign: { xs: "center", md: "left" },
              }}
            >
              © 2024 Your Moving Experts. All rights reserved.
            </Typography>

            <Box sx={{ display: "flex", gap: 3 }}>
              <Link
                href="#"
                sx={{
                  color: "#B5B2B2",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                  "&:hover": {
                    color: "#ED170A",
                  },
                }}
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                sx={{
                  color: "#B5B2B2",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                  "&:hover": {
                    color: "#ED170A",
                  },
                }}
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                sx={{
                  color: "#B5B2B2",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                  "&:hover": {
                    color: "#ED170A",
                  },
                }}
              >
                Contact
              </Link>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
