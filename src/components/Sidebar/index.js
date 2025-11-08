import React from 'react'
import { AiOutlineHome, AiOutlineLinkedin } from 'react-icons/ai'
import { BsEye } from 'react-icons/bs'
import { CgNotes } from 'react-icons/cg'
import { FaRegEnvelope } from 'react-icons/fa'
import { FiUser } from 'react-icons/fi'
import { SiCodewars } from 'react-icons/si'
import { VscGithub } from 'react-icons/vsc'
import { NavLink } from 'react-router-dom'
import './index.scss'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <nav>
        {/* home */}
        <NavLink exact="true" activeclassname="active" to="/">
          <AiOutlineHome />
        </NavLink>

        {/* projects */}
        <NavLink
          exact="true"
          activeclassname="active"
          className="projects-link"
          to="/projects"
        >
          <BsEye />
        </NavLink>

        {/* about-me */}
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FiUser />
        </NavLink>

        {/* contact  */}
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FaRegEnvelope />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            className="codewars-link"
            target="_blanck"
            rel="noreferrer"
            href="https://www.codewars.com/users/Caeser%20Ibrahim"
          >
            <SiCodewars />
          </a>
        </li>

        <li>
          <a
            className="github-link"
            target="_blanck"
            rel="noreferrer"
            href="https://github.com/caeserlondon"
          >
            <VscGithub />
          </a>
        </li>
        <li>
          <a
            className="linked-link"
            target="_blanck"
            rel="noreferrer"
            href="https://www.linkedin.com/in/caeser-ibrahim"
          >
            <AiOutlineLinkedin />
          </a>
        </li>
        <li>
          <a
            className="onlineCv-link"
            target="_blanck"
            rel="noreferrer"
            href="https://caeser-ibrahim.netlify.app"
          >
            <CgNotes />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
