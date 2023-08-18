import { 
  Meta
} from "@remix-run/react"

export function meta () {
  return (
    [
      { charset: 'utf-8', },
      { title: 'Blog Remix' },
      { viewport: 'width=device-width,initial-scale=1' }
    ]
  )
}

export default function App() {
  return(
    <Document>
      <h1>Bienvenidos a Remix</h1>
    </Document>
  )
}

function Document({ children }) {
  return (
    <html lang="en">
    <head>
      <Meta />
      <title>Remix blog</title>
    </head>
    <body>
      { children }
    </body>
    </html>
  )
}