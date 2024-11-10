import Header from '@/components/layout/Header';
import "./globals.css";

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  title: {
    default: "Sandro Pacella | Frontend Developer",
    template: "%s | Sandro Pacella"
  },
  description: "Frontend Developer specializing in React and Next.js",
  keywords: ["Frontend Developer", "React", "Next.js", "Web Development"],
  authors: [{ name: "Sandro Pacella" }],
  creator: "Sandro Pacella",
  icons: {
    icon: [
      { url: '/icon.png', sizes: '32x32', type: 'image/png' }
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
