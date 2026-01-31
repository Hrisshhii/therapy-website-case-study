import type { Metadata } from "next"
import "./globals.css"
import Header from "./Components/Header"

export const metadata: Metadata = {
  title: "Lilac Template",
  description: "Therapy website template",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#fbf6ef] text-[#223614]">
        <Header />
        {children}
      </body>
    </html>
  )
}
