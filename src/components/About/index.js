import React, { useEffect, useState } from 'react'
import { DiRuby } from 'react-icons/di'
import {
  FaAngular,
  FaBootstrap,
  FaCss3Alt,
  FaGitSquare,
  FaHtml5,
  FaNodeJs,
  FaReact,
  FaSass,
} from 'react-icons/fa'
import { SiAdobephotoshop, SiAdobexd, SiJavascript } from 'react-icons/si'

import Loader from 'react-loaders'
import Technologies from '../../Technologies'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'About me'.split('')}
              index={15}
            />
          </h1>
          <p>
            I'm a very ambitious Full-stack software developer and graphic
            designer with a bachelor's degree in architectural engineering and
            interior design.
          </p>
          <br />
          <p>
            I am creative and detail-oriented in creating and designing
            platforms that are functional and user-friendly, with a flair for
            bringing innovative UX design to life.
          </p>
          <br />
          <p>
            I graduated from Makers Academy, an immersive 16-weeks full-stack
            software development Boot Camp where I strengthened my coding
            knowledge.
          </p>
          <br />
          <p>
            I'm friendly, confident, naturally curious and perpetually working
            on improving my skills and learning new technologies.
          </p>
          <section>
            <div className=" tech-container">
              {Technologies.map(({ id, image, title }) => {
                return (
                  <article
                    key={id}
                    className="tech-item"
                    style={{ animationDelay: id * 0.15 + 's' }}
                  >
                    <div className="tech-image">
                      <img src={image} alt={title} />
                    </div>
                  </article>
                )
              })}
            </div>
          </section>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FaReact />
            </div>
            <div className="face2">
              <FaGitSquare />
            </div>
            <div className="face3">
              <FaAngular />
            </div>
            <div className="face4">
              <SiJavascript />
            </div>
            <div className="face5">
              <DiRuby />
            </div>
            <div className="face6">
              <FaNodeJs />
            </div>
          </div>
        </div>
        <div className="stage-cube-cont2">
          <div className="cubespinner2">
            <div className="face1">
              <FaBootstrap />
            </div>
            <div className="face2">
              <FaHtml5 />
            </div>
            <div className="face3">
              <FaCss3Alt />
            </div>
            <div className="face4">
              <SiAdobexd />
            </div>
            <div className="face5">
              <SiAdobephotoshop />
            </div>
            <div className="face6">
              <FaSass />
            </div>
          </div>
        </div>
      </div>
      <Loader type="ball-scale" />
    </>
  )
}

export default About
