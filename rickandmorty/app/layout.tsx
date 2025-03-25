import { ReactNode } from "react";
import '../app/globals.css';


export const metadata = {
  title: "Rick and Morty",
};

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default Layout;