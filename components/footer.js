import React from "react"
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaBehance,
  FaPinterest,
  FaDribbble,
} from "react-icons/fa"

const Footer = () => {
  return (
    <>
      <footer className="px-5 py-10">
        <h2 className="text-center mb-5">Social Media Contacts</h2>
        <ul className="flex items-center justify-center flex-wrap">
          <li className="mx-5 my-5">
            <FaFacebook className="text-2xl" />
          </li>
          <li className="mx-5 my-5">
            <FaTwitter className="text-2xl" />
          </li>
          <li className="mx-5 my-5">
            <FaInstagram className="text-2xl" />
          </li>
          <li className="mx-5 my-5">
            <FaBehance className="text-2xl" />
          </li>
          <li className="mx-5 my-5">
            <FaPinterest className="text-2xl" />
          </li>
          <li className="mx-5 my-5">
            <FaDribbble className="text-2xl" />
          </li>
        </ul>
      </footer>
    </>
  )
}

export default Footer
