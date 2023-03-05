import { GlobalStyle } from "@/styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import Navbar from "./navbar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
      {children}
    </ThemeProvider>
  );
}
