"use client";

import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
  Rating,
} from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Home Owner",
    content:
      "Leverage again increases its growth in robust grayscale for strategic sector collaboration. It is easy to further the overall value proposition. Organizing growth in holistic world around disruptive networks has also been driven by well-known trends.",
    rating: 5,
  },
  {
    name: "Mike Chen",
    role: "Business Owner",
    content:
      "The moving team was exceptional! They handled our office relocation with professionalism and care. Everything was completed on time and within budget.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Family Moving",
    content:
      "Outstanding service from start to finish. The team made our stressful moving day feel smooth and organized. Highly recommended!",
    rating: 5,
  },
];

export default function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <Box
      sx={{
        py: 10,
        backgroundColor: "#F8F9FA",
        backgroundImage: "url('/images/2.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
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
            What Our Clients Say
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

          <Box
            sx={{
              display: "flex",
              gap: 4,
              overflowX: "auto",
              pb: 2,
              scrollbarWidth: "none",
              "&::-webkit-scrollbar": { display: "none" },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} style={{ minWidth: 400 }}>
                <Card
                  sx={{
                    height: "100%",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(5px)",
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    border: "none",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
                    },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Rating
                      value={testimonial.rating}
                      readOnly
                      sx={{ color: "#FDAF3B", mb: 2 }}
                    />

                    <Typography
                      variant="body1"
                      sx={{
                        color: "#191720",
                        lineHeight: 1.7,
                        mb: 3,
                        fontStyle: "italic",
                        fontSize: "1.1rem",
                      }}
                    >
                      `&quot;`{testimonial.content}`&quot;`
                    </Typography>

                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <Avatar
                        sx={{
                          width: 50,
                          height: 50,
                          backgroundColor: "#ED170A",
                        }}
                      >
                        {testimonial.name.charAt(0)}
                      </Avatar>
                      <Box>
                        <Typography
                          variant="h6"
                          sx={{
                            color: "#000",
                            fontWeight: 600,
                          }}
                        >
                          {testimonial.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: "#B5B2B2",
                          }}
                        >
                          {testimonial.role}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
