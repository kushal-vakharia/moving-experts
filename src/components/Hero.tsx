"use client";

import { Box, Typography, Button } from "@mui/material";

export default function Hero() {
  return (
    <Box
      sx={{
        height: "100svh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        backgroundImage: "url('/images/hero-img.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box
        sx={{
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)", // for Safari
          backgroundColor: "rgba(255, 255, 255, 0.2)", // optional
          borderRadius: "20px",
          px: { xs: 2, md: 5 },
          py: { xs: 2, md: 5 },
          mb: { xs: 2, md: 5 },
          textAlign: "center",
          justifySelf: "center",
          alignSelf: "flex-end",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography sx={{ color: "#ED170A", fontSize: "1.5rem" }}>
          {" "}
          Welcome To aarion.ca
        </Typography>
        <Typography
          variant="h1"
          component="h1"
          sx={{
            maxWidth: "900px",
            color: "#000",
            mb: 2,
            fontSize: { xs: "2.5rem", md: "3.5rem" },
          }}
        >
          Your moving experts in{" "}
          <Box component="span" sx={{ color: "#ED170A" }}>
            Montreal
          </Box>{" "}
          and{" "}
          <Box component="span" sx={{ color: "#ED170A" }}>
            Quebec
          </Box>
          !
        </Typography>

        <Typography
          variant="h3"
          component="h2"
          sx={{
            color: "#1E1E1E",
            mb: 3,
            fontSize: { xs: "1rem", md: "1.5rem" },
          }}
        >
          Our goal is to make your life easier.
        </Typography>

        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: "#1E1E1E",
              borderRadius: "999px",
              px: 4,
              py: 1.5,
              "&:hover": {
                backgroundColor: "#D11409",
                transform: "translateY(-2px)",
              },
              transition: "all 0.3s ease",
            }}
          >
            Get Free Quote
          </Button>
        </Box>

        {/* <Typography
                variant="body1"
                sx={{
                  color: "#191720",
                  mb: 1,
                  fontSize: "1.1rem",
                }}
              >
                Construct a Western Europe on Europe for your working role at
                the 20th of February, beginning with the 21st series.
              </Typography> */}

        {/* <Typography
                variant="body1"
                sx={{
                  color: "#191720",
                  mb: 4,
                  fontSize: "1.1rem",
                }}
              >
                However, you`&apos;`re not aware of any issues that are present
                in this area. I think we can be interested in our business.
              </Typography> */}
      </Box>
    </Box>
  );
}
