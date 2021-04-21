import React, { useState } from "react"
import { FaCheck } from "react-icons/fa"
import { pricing } from "../data/pricing"
import styles from "../styles/Home.module.css"

const Pricing = () => {
  const [cards, setCards] = useState(pricing)
  return (
    <>
      <section className="px-5 py-10 xl:max-w-7xl xl:mx-auto" id="pricing">
        <h2 className="mb-5">Pricing</h2>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {pricing.map(({ id, title, price, services, button }) => {
            return (
              <article key={id} className="bg-gray-100 shadow-lg p-5">
                <h2 className="mb-5">{price}</h2>
                <h3 className="text-4xl mb-5">{title}</h3>
                <ul className="my-10">
                  {services.map((service, index) => {
                    return (
                      <li key={index} className="flex items-center my-4">
                        <FaCheck className="mr-5 text-green-500" />
                        {service}
                      </li>
                    )
                  })}
                </ul>
                <button className={styles.btn}>{button}</button>
              </article>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Pricing
