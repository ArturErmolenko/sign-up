import type { Metadata } from "next";
import '@techmely/reset-css'

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
