import React from 'react'
import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'

import { AiOutlineHome } from 'react-icons/ai'
import { FiUser } from 'react-icons/fi'
import { FaRegEnvelope } from 'react-icons/fa'

import { AiOutlineLinkedin } from 'react-icons/ai'
import { VscGithub } from 'react-icons/vsc'
import { SiCodewars } from 'react-icons/si'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoS} alt="logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="logo" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <AiOutlineHome />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about-link"
        >
          <FiUser />
        </NavLink>
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
            href="https://www.linkedin.com/in/caeser-ibrahim-3bb4a322a/"
          >
            <AiOutlineLinkedin />
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
        </li>{' '}
        <li>
          <a
            target="_blanck"
            rel="noreferrer"
            href="https://www.codewars.com/users/Caeser%20Ibrahim"
          >
            <SiCodewars />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
