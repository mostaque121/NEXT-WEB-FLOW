import Footer from '@/components/Footer';
import { Navbar } from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: "NEXTWEBFLOW",
    template: "%s | RPL Fast Track",
  },
  icons: {
    icon: '/favicon/favicon-32x32.png',
    shortcut: '/favicon/favicon-16x16.png',
    apple: [
      { url: '/favicon/apple-icon-57x57.png', sizes: '57x57' },
      { url: '/favicon/apple-icon-60x60.png', sizes: '60x60' },
      { url: '/favicon/apple-icon-72x72.png', sizes: '72x72' },
      { url: '/favicon/apple-icon-76x76.png', sizes: '76x76' },
      { url: '/favicon/apple-icon-114x114.png', sizes: '114x114' },
      { url: '/favicon/apple-icon-120x120.png', sizes: '120x120' },
      { url: '/favicon/apple-icon-144x144.png', sizes: '144x144' },
      { url: '/favicon/apple-icon-152x152.png', sizes: '152x152' },
      { url: '/favicon/apple-icon-180x180.png', sizes: '180x180' },
    ],
    android: '/favicon/android-icon-192x192.png',
  },
  manifest: '/favicon/manifest.json',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <div className="mt-16 bg-bgColor dark:bg-gray-950">
            {children}
          </div>
          <Footer />

        </ThemeProvider>
      </body>
    </html>
  )
}

