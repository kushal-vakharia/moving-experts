"use client";

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const services = [
  {
    title: "Residential Moving",
    description:
      "Professional residential moving services for homes and apartments.",
  },
  {
    title: "Commercial Moving",
    description:
      "Efficient commercial moving solutions for businesses and offices.",
  },
  {
    title: "Piano Transport",
    description: "Specialized piano and delicate item transportation services.",
  },
  {
    title: "Packing Services",
    description:
      "Professional packing and unpacking services for your convenience.",
  },
  {
    title: "Storage Service",
    description: "Secure storage solutions for short-term and long-term needs.",
  },
  {
    title: "IVAC Services",
    description:
      "Special services for women victims of violence and difficult situations.",
  },
];

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <Box sx={{ py: 10, backgroundColor: "#FFFFFF" }}>
      <Container maxWidth="lg">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <Typography
            variant="h2"
            component="h2"
            sx={{
              textAlign: "center",
              mb: 2,
              color: "#000",
            }}
          >
            Our Services
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "center", mb: 6 }}>
            <Box
              sx={{
                width: "80px",
                height: "4px",
                backgroundColor: "#FDAF3B",
              }}
            />
          </Box>

          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <motion.div variants={itemVariants}>
                  <Card
                    sx={{
                      height: "100%",
                      backgroundColor: "#F8F9FA",
                      border: "none",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
                      },
                    }}
                  >
                    <CardContent sx={{ p: 4, textAlign: "center" }}>
                      {/* Service Icon Placeholder */}
                      <Box
                        sx={{
                          width: 60,
                          height: 60,
                          backgroundColor: "#ED170A",
                          borderRadius: "50%",
                          margin: "0 auto 20px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#fff",
                          fontSize: "1.5rem",
                        }}
                      >
                        {index + 1}
                      </Box>

                      <Typography
                        variant="h5"
                        component="h3"
                        sx={{
                          mb: 2,
                          color: "#000",
                          fontWeight: 600,
                        }}
                      >
                        {service.title}
                      </Typography>

                      <Typography
                        variant="body1"
                        sx={{
                          color: "#191720",
                          lineHeight: 1.6,
                        }}
                      >
                        {service.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
}
