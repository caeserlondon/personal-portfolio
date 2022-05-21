import React from 'react'
import { useEffect, useState } from 'react'
import { FaHtml5 } from 'react-icons/fa'
import { FaReact } from 'react-icons/fa'
import { FaCss3Alt } from 'react-icons/fa'
import { SiJavascript } from 'react-icons/si'
import { DiRuby } from 'react-icons/di'
import { FaNodeJs } from 'react-icons/fa'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            index={15}
          />
        </h1>
        <p>
          I'm very abmitious Full-stack junior software developer and graphic
          designer looking for a role in established IT company with the
          oppertunity to work with the latest technologies on challenging and
          diverse projects.
        </p>
        <p>
          I am creative and detail-oriented in designing platforms that are
          functional and user-friendly, with a flair for bringing innovative UX
          design to life.
        </p>
        <p>
          I graduated from Makers Academy, an immersive 16 weeks full stack
          software development BootCamp where I strengthened my coding knowledge
        </p>
        <p>
          I'm friendly, confident, naturally curious and prepetually working on
          improving my skills and learning new technologies.
        </p>
      </div>

      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FaReact />
          </div>
          <div className="face2">
            <FaHtml5 />
          </div>
          <div className="face3">
            <FaCss3Alt />
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
    </div>
  )
}

export default About
