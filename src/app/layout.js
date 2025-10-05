import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: "CITYHOTELMANAGER",
  description: "Hotel booking app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      {/* 👇 This line tells React to ignore mismatched html attributes */}
      <html lang="en" suppressHydrationWarning>
        <body>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}


