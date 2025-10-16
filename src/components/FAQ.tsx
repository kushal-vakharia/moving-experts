"use client";

import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExpandMore as ExpandMoreIcon } from "@mui/icons-material";

const faqs = [
  {
    question: "How far in advance should I book my move?",
    answer:
      "We recommend booking your move at least 2-4 weeks in advance to ensure availability, especially during peak moving seasons. However, we also accommodate last-minute moves whenever possible.",
  },
  {
    question: "Do you offer packing services?",
    answer:
      "Yes, we offer comprehensive packing services including professional packing materials, careful packing of all your belongings, and unpacking at your new location. This service can be customized based on your needs.",
  },
  {
    question: "Are my belongings insured during the move?",
    answer:
      "Absolutely! All your belongings are fully insured during the entire moving process. We provide comprehensive insurance coverage to give you complete peace of mind throughout your move.",
  },
  {
    question: "Do you provide long-distance moving?",
    answer:
      "Yes, we specialize in both local moves within Montreal/Quebec and long-distance moves across Canada. Our team is experienced in handling moves of any distance with the same level of care and professionalism.",
  },
];

export default function FAQ() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

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
    <Box sx={{ py: 10, backgroundColor: "#F8F9FA" }}>
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
            Frequently Asked Questions
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

          <Box sx={{ maxWidth: 800, margin: "0 auto" }}>
            {faqs.map((faq, index) => (
              <motion.div key={index}>
                <Accordion
                  expanded={expanded === `panel${index}`}
                  onChange={handleChange(`panel${index}`)}
                  sx={{
                    backgroundColor: "#FFFFFF",
                    border: "none",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                    mb: 2,
                    borderRadius: "8px !important",
                    "&:before": { display: "none" },
                    transition: "all 0.3s ease",
                    "&:hover": {
                      boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                    },
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: "#ED170A" }} />}
                    sx={{
                      py: 2,
                      px: 3,
                      "& .MuiAccordionSummary-content": {
                        margin: "12px 0",
                      },
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        color: "#000",
                        fontWeight: 600,
                        fontSize: "1.1rem",
                      }}
                    >
                      {faq.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ px: 3, pb: 3 }}>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "#191720",
                        lineHeight: 1.7,
                      }}
                    >
                      {faq.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
