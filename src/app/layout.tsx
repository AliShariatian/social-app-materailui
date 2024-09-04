import { FC, PropsWithChildren } from "react";
import { Roboto } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const fontRoboto = Roboto({ weight: ["300", "400", "500", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Material UI Exercise App",
  description: "Material UI package exercise application",
};

const RootLayout: FC<Readonly<PropsWithChildren>> = ({ children }) => {
  return (
    <html lang="en">
      <body className={fontRoboto.className}>{children}</body>
    </html>
  );
};

export default RootLayout;

