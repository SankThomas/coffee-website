import React, { useState } from "react"
import { navbar } from "../data/navbar"

const Navbar = () => {
  const [links, setLinks] = useState(navbar)

  return (
    <>
      <ul className="md:flex md:items-center md:justify-center">
        {links.map(({ id, title, url }) => {
          return (
            <li key={id} className="my-2 text-xl md:my-0 md:text-base md:mx-5">
              <a href={url} className="md:text-white md:font-semibold">
                {title}
              </a>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default Navbar
