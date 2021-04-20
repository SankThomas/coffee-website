import React from "react"
import styles from "../styles/Home.module.css"

const showcase = () => {
  return (
    <>
      <section className={styles.showcase}>
        <div className={styles.overlay}>
          <h1 className="text-white font-bold">
            I build websites for{" "}
            <span className="text-yellow-600">coffee shops</span>
          </h1>
        </div>
      </section>
    </>
  )
}

export default showcase
