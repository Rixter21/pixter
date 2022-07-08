import Navbar from '../components/Navbar'
import '../styles/globals.css'

// I want the navbar to show in all routes, so I will place in _app.js and not index.js

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
