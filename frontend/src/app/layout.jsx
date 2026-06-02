import "./globals.css";

export const metadata = {
  title: "OAuth Auth System",
  description: "Google & GitHub OAuth Login",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}