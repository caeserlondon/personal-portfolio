import React from 'react'
import { useEffect, useState } from 'react'

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
    </div>
  )
}

export default About
