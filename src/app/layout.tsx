import { FC, PropsWithChildren } from "react";
import { fontRoboto } from "@/public/fonts";
import type { Metadata } from "next";
import "@/styles/globals.css";

import { MainLayout } from "@/components";

export const metadata: Metadata = {
  title: "Material UI Exercise App",
  description: "Material UI package exercise application",
};

const RootLayout: FC<Readonly<PropsWithChildren>> = ({ children }) => {
  return (
    <html lang="en">
      <body className={fontRoboto.className}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
};

export default RootLayout;

