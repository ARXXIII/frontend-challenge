import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import { Header } from "@/components/header/header"
import { StoreProvider } from "./lib/store/StoreProvider"
import "./globals.css"

const roboto = Roboto({
    variable: "--font-geist-sans",
    subsets: ["latin"],
    weight: "400"
});

export const metadata: Metadata = {
    title: "Cats",
    description: "Internship Assignment",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <StoreProvider>
            <html lang="en">
                <body className={`${roboto.variable} antialiased`} suppressHydrationWarning>
                    <Header />
                    <main className="px-3 2xl:px-56 py-12">
                        {children}
                    </main>
                </body>
            </html>
        </StoreProvider>
    )
}
