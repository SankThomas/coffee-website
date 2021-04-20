import React from "react"
import styles from "../styles/Home.module.css"

const About = () => {
  return (
    <>
      <section
        className="flex flex-col-reverse px-5 py-10 md:grid md:grid-cols-2 md:gap-5 md:items-center xl:max-w-7xl xl:mx-auto xl:gap-20"
        id="about-me"
      >
        <div>
          <h3 className="my-5">
            Hello there. My Name is Thomas Sankara. I am a Frontend Web
            Developer
          </h3>
          <p className="mb-10">
            I build amazing experiences for my clients to ensure they get the
            value for their money, a professionally designed website, all round
            maintenance and a 99% website uptime.
          </p>
          <button className={styles.btn}>View Pricing Website</button>
        </div>
        <div>
          <h2 className="mb-5">About Me</h2>
          <img src="/about-me.png" alt="blog" className="w-full" />
        </div>
      </section>
    </>
  )
}

export default About
