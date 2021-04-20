import React from "react"
import styles from "../styles/Home.module.css"

const Blog = () => {
  return (
    <>
      <section
        className="px-5 py-10 md:grid md:grid-cols-2 md:gap-5 md:items-center xl:max-w-7xl xl:mx-auto xl:gap-20"
        id="blog"
      >
        <div>
          <h2 className="mb-5">Blog</h2>
          <img src="/blog.png" alt="blog" className="w-full" />
        </div>
        <div>
          <h3 className="my-5">
            Read How Our Last Client Boosted Sales with their new website
          </h3>
          <p className="mb-10">
            “When I hired Sankara to build our website for us, he delivered an
            even better website and user experience than expected which has
            massively increased our online presence and brand. Needless to say,
            we now have more sales than ever”{" "}
          </p>
          <button className={styles.btn}>Read Full Article</button>
        </div>
      </section>
    </>
  )
}

export default Blog
