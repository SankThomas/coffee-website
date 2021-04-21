import React, { useState } from "react"
import { testimonials } from "../data/testimonials"

const Testimonials = () => {
  const [cards, setCards] = useState(testimonials)
  return (
    <>
      <section className="px-5 py-10 xl:max-w-7xl xl:mx-auto" id="testimonials">
        <h2 className="mb-5">Testimonials</h2>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {cards.map(({ id, image, name, title, desc }) => {
            return (
              <article key={id} className="bg-gray-100 p-5 shadow-lg">
                <div className="flex items-center mb-5">
                  <img src={image} alt={name} />
                  <div className="ml-5">
                    <h4>{name}</h4>
                    <p>{title}</p>
                  </div>
                </div>
                <img src="/quotes.png" alt="" />
                <p className="mt-5">{desc}</p>
              </article>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Testimonials
