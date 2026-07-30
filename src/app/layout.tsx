import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono, Figtree } from "next/font/google";
import "./globals.css";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import { cn } from "@/lib/utils";

const figtree = Figtree({subsets:['latin'],variable:'--font-sans'});

const jetbrainsMono = JetBrains_Mono({subsets:['latin'],variable:'--font-mono'});

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
	keywords: ["Fucora", "UNSW", "Student Tools", "Tally", "Student Led Project"],
	openGraph: {
    url: 'https://fucora.app',
    siteName: 'Fucora',
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
		<html lang="en" className={cn(jetbrainsMono.variable, "font-sans", figtree.variable)}>
			<head>
				<link rel="icon" href="/favicon.png" type="image/svg+xml"></link>
			</head>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}>
				<NavBar/>
				{children}
				<Footer/>
			</body>
		</html>
	);
}
