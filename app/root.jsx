export default function App() {
  return(
    <Document>
      <h1>Bienvenidos a Remix</h1>
    </Document>
  )
}

export function Document({ children }) {
  return (
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Remix blog</title>
    </head>
    <body>
      { children }
    </body>
    </html>
  )
}