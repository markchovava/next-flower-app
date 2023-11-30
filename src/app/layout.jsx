import './globals.css'


export const metadata = {
  title: 'Flower',
  description: 'This is a flower app.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
