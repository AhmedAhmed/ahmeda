import type { Metadata } from "next";
import MainLayout from "@/components/layout/main-layout";
import Providers from "@/providers";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "AhmedA",
    description: "Ahmed Ahmed Engineer Portfolio. Posted are my projects, dotfiles, experiments and workflows.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${geistSans.className} h-full antialiased`}
            suppressHydrationWarning
        >
            <body className="min-h-full flex flex-col selection:bg-blue-800 selection:text-white">
                <Providers>
                    <MainLayout>
                        {children}
                    </MainLayout>
                </Providers>
            </body>
        </html>
    );
}
