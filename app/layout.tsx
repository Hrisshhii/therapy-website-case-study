import type { Metadata } from "next"
import "./globals.css"
import Header from "./Components/Header"

export const metadata: Metadata = {
  title: "Dr. Maya Reynolds",
  description: "Therapy website template",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`bg-secondary text-primary`}>
        <Header />
        {children}
      </body>
    </html>
  )
}