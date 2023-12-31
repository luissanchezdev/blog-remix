import { 
  Meta,
  Links,
  LiveReload,
  Outlet,
  Scripts
} from "@remix-run/react"
import styles from './styles/index.css'
import Header from "./components/Header"
import Footer from "./components/Footer"

export function meta () {
  return (
    [
      { charset: 'utf-8', },
      { title: 'Blog Remix' },
      { 
        name: 'viewport',
        content: 'width=device-width, initial-scale=1' 
      }
    ]
  )
}

export function links () {
  return [
    {
      rel: 'stylesheet',
      href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossOrigin: 'true'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,900&display=swap'
    },
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

export default function App() {
  return(
    <Document>
      <Outlet />
    </Document>
  )
}

function Document({ children }) {
  return (
    <html lang="en">
    <head>
      <Meta />
      <Links />
      <title>Remix blog</title>
    </head>
    <body>
      <Header />
      { children }
      <Footer />
      <Scripts />
      <LiveReload />
    </body>
    </html>
  )
}