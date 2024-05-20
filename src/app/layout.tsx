export const metadata = {
  title: 'Next.js',
  description: 'Created by Ajay',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
