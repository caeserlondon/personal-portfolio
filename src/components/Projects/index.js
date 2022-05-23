import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'

const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const projArray = ['M', 'y', ' ', 'P', 'r', 'o', 'j', 'e', 'c', 't', 's']

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="proj-container projects-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={projArray}
              index={15}
            />
          </h1>
        </div>
        <Loader type="ball-scale" />
      </div>
    </>
  )
}

export default Projects
