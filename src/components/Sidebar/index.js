import React from 'react'
import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import Wreath from '../../assets/images/wreath.png'
import { AiOutlineHome, AiOutlineLinkedin } from 'react-icons/ai'
import { FiUser } from 'react-icons/fi'
import { FaRegEnvelope } from 'react-icons/fa'
import { VscGithub } from 'react-icons/vsc'
import { SiCodewars } from 'react-icons/si'
import { BsEye } from 'react-icons/bs'
import { CgNotes } from 'react-icons/cg'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={Wreath} alt="logo" />
      </Link>
      <nav>
        {/* home */}
        <NavLink exact="true" activeclassname="active" to="/">
          <AiOutlineHome />
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
        {/* projects */}
        <NavLink
          exact="true"
          activeclassname="active"
          className="projects-link"
          to="/projects"
        >
          <BsEye />
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
            target="_blanck"
            rel="noreferrer"
            href="https://www.codewars.com/users/Caeser%20Ibrahim"
          >
            <SiCodewars />
          </a>
        </li>

        <li>
          <a
            target="_blanck"
            rel="noreferrer"
            href="https://github.com/caeserlondon"
          >
            <VscGithub />
          </a>
        </li>
        <li>
          <a
            target="_blanck"
            rel="noreferrer"
            href="https://www.linkedin.com/in/caeser-ibrahim-3bb4a322a/"
          >
            <AiOutlineLinkedin />
          </a>
        </li>
        <li>
          <a target="_blanck" rel="noreferrer" href="https://www.my-cv.com">
            <CgNotes />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
