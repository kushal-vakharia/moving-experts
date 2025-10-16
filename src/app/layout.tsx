import "./globals.css";
import { Inter } from "next/font/google";
import theme from "@/theme/theme";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Your moving experts in Montreal and Quebec",
  description:
    "We Are The Best Movers! Professional moving services in Montreal and Quebec.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
