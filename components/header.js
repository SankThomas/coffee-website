import React, { useState, useEffect } from "react"
import { HiMenuAlt2 } from "react-icons/hi"
import Navbar from "./navbar"

const Header = () => {
  const [menu, setMenu] = useState(false)
  const [width, setWidth] = useState(769)
  useEffect(() => {
    if (window.innerWidth >= width) {
      setMenu(true)
    }
  })
  return (
    <>
      <header className="absolute w-full p-5">
        {menu && (
          <nav className="w-full bg-white p-5 rounded shadow-lg md:bg-transparent md:w-auto md:p-0 md:shadow-none md:rounded-none">
            <Navbar />
          </nav>
        )}

        <div className="md:hidden">
          <button>
            <HiMenuAlt2
              className="text-4xl text-white"
              onClick={() => setMenu(!menu)}
            />
          </button>
        </div>
      </header>
    </>
  )
}

export default Header
