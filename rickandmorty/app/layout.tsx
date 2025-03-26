import { ReactNode } from "react";
import '../app/globals.css';
import { ThemeProvider } from "@/components/theme-provider"



export const metadata = {
  title: "Rick and Morty",
};

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  </>
  );
};

export default Layout;