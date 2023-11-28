import React from 'react'

import '../styles/global.scss'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head>
        <title>Victor Hugo Cépil</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="description" content="Desenvolvedor front-end" />

        <meta charSet="utf-8" />

        <meta property="image" content="/assets/photo.png" />

        <meta property="og:title" content="Victor Hugo Cépil" />
        <meta property="og:description" content="Desenvolvedor front-end" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/assets/photo.png" />

        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lexend&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
