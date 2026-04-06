import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./navbar";
import Footer from "./footer";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Fucora",
	description: "Official Fucora Page, Home of multiple projects created by Fucora Team",
	keywords: ["Fucora", "UNSW", "Student Tools", "Talea Tally", "Cybersecurity"],
	openGraph: {
    title: 'Fucora',
    description: 'Official Fucora Page, Home of multiple projects created by Fucora Team',
    url: 'https://fucora.app',
    siteName: 'Fucora',
    // images: [
    //   {
    //     url: 'https://fucora.app/og-main.png', // The path to your branding image
    //     width: 1200,
    //     height: 630,
    //   },
    // ],
    locale: 'en_AU',
    type: 'website',
  },
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/favicon.png" type="image/svg+xml"></link>
			</head>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<NavBar/>
				{children}
				<Footer/>
			</body>
		</html>
	);
}
