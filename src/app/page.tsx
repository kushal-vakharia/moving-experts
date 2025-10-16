import { Box } from "@mui/material";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Achievements from "@/components/Achievements";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <Box sx={{ overflowX: "hidden", height: "100%" }}>
      <Header />
      <Hero />
      <Services />
      <Testimonials />
      <Achievements />
      <FAQ />
      <Footer />
    </Box>
  );
}
