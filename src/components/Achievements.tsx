/* eslint-disable @next/next/no-img-element */
"use client";

import { Box, Container, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const achievements = [
  { number: 1820, suffix: "+", label: "Successful Moves" },
  { number: 99.5, suffix: "%", label: "Customer Satisfaction" },
  { number: 300, suffix: "+", label: "Professional Team" },
  { number: 30, suffix: "k", label: "Items Moved" },
];

export default function Achievements() {
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

  return (
    <>
      <img src="/images/grup.png" alt="Logo" width={1437} height={504} />
      <Box sx={{ py: 10, backgroundColor: "#000" }}>
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
                color: "#fff",
              }}
            >
              Our Achievements
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
              {achievements.map((achievement, index) => (
                <Grid
                  size={{ xs: 12, sm: 6, md: 3 }}
                  sx={{ mt: index % 2 === 0 ? 0 : 4 }}
                  key={index}
                >
                  <motion.div>
                    <Box
                      sx={{
                        backgroundColor: "#191720",
                        borderRadius: "20px",
                        textAlign: "center",
                        p: 3,
                        transition: "all 0.3s ease",
                        "&:hover": {
                          transform: "translateY(-5px)",
                        },
                      }}
                    >
                      <Typography
                        variant="h2"
                        component="div"
                        sx={{
                          color: "#fff",
                          fontWeight: 700,
                          mb: 1,
                          fontSize: { xs: "2.5rem", md: "3rem" },
                        }}
                      >
                        {inView && (
                          <CountUp
                            end={achievement.number}
                            suffix={achievement.suffix}
                            duration={2.5}
                            decimals={achievement.number % 1 !== 0 ? 1 : 0}
                          />
                        )}
                      </Typography>

                      <Typography
                        variant="h6"
                        sx={{
                          color: "#fff",
                          fontWeight: 600,
                          fontSize: "1.1rem",
                        }}
                      >
                        {achievement.label}
                      </Typography>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>
    </>
  );
}
