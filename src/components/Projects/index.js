import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import Data from '../../Data'

const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const projArray = ['Some', ' ', 'Off', ' ', 'My', ' ', 'Projects', ' ', ':']

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)
  }, [])

  return (
    <>
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={projArray}
            index={5}
          />
        </h1>
      </div>
      <div className="portfolio-container">
        {Data.map(({ id, image, title, description, github, demo }) => {
          return (
            <article key={id} className="portfolio-item">
              <div className="portfolio-item-image">
                <img src={image} alt={title} />
              </div>
              <h3>
                {title}
                <span>{description}</span>
              </h3>
              <div className="pro-buttons">
                <a
                  href={demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flat-button"
                >
                  Web Site
                </a>
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  className="flat-button"
                >
                  Github
                </a>
              </div>
            </article>
          )
        })}
      </div>
      <Loader type="ball-scale" />
    </>
  )
}

export default Projects
