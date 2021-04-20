import Head from "next/head"
import About from "../components/about"
import Blog from "../components/blog"
import Footer from "../components/footer"
import Header from "../components/header"
import Pricing from "../components/pricing"
import Showcase from "../components/showcase"
import Testimonials from "../components/testimonials"

export default function Home() {
  return (
    <div id="home">
      <Head>
        <title>Coffee Website Developer Portfolio</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Components */}
      <Header />
      <Showcase />
      <Blog />
      <About />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  )
}
