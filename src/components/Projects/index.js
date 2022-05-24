import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import IMG1 from '../../assets/gallery/marble.jpeg'

const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const projArray = [
    'M',
    'y',
    ' ',
    'P',
    'r',
    'o',
    'j',
    'e',
    'c',
    't',
    's',
    ' ',
    ':',
  ]

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      {/* <div className="projects-page"> */}
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={projArray}
            index={15}
          />
        </h1>
      </div>
      <div className="portfolio-container">
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={IMG1} alt="project-1-name" />
          </div>
          <h3>
            Project name
            <span> project description and the technologies used</span>
          </h3>
          <div className="pro-buttons">
            <a
              href="http://netlify.com"
              target="_blank"
              rel="noreferrer"
              className="flat-button"
            >
              Live Demo
            </a>
            <a
              href="http://github.com"
              target="_blank"
              rel="noreferrer"
              className="flat-button"
            >
              Github
            </a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={IMG1} alt="project-1-name" />
          </div>
          <h3>
            Project name
            <span> project description and the technologies used</span>
          </h3>
          <div className="pro-buttons">
            <a
              href="http://netlify.com"
              target="_blank"
              rel="noreferrer"
              className="flat-button"
            >
              Live Demo
            </a>
            <a
              href="http://github.com"
              target="_blank"
              rel="noreferrer"
              className="flat-button"
            >
              Github
            </a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={IMG1} alt="project-1-name" />
          </div>
          <h3>
            Project name
            <span> project description and the technologies used</span>
          </h3>
          <div className="pro-buttons">
            <a
              href="http://netlify.com"
              target="_blank"
              rel="noreferrer"
              className="flat-button"
            >
              Live Demo
            </a>
            <a
              href="http://github.com"
              target="_blank"
              rel="noreferrer"
              className="flat-button"
            >
              Github
            </a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={IMG1} alt="project-1-name" />
          </div>
          <h3>
            Project name
            <span> project description and the technologies used</span>
          </h3>
          <div className="pro-buttons">
            <a
              href="http://netlify.com"
              target="_blank"
              rel="noreferrer"
              className="flat-button"
            >
              Live Demo
            </a>
            <a
              href="http://github.com"
              target="_blank"
              rel="noreferrer"
              className="flat-button"
            >
              Github
            </a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={IMG1} alt="project-1-name" />
          </div>
          <h3>
            Project name
            <span> project description and the technologies used</span>
          </h3>
          <div className="pro-buttons">
            <a
              href="http://netlify.com"
              target="_blank"
              rel="noreferrer"
              className="flat-button"
            >
              Live Demo
            </a>
            <a
              href="http://github.com"
              target="_blank"
              rel="noreferrer"
              className="flat-button"
            >
              Github
            </a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={IMG1} alt="project-1-name" />
          </div>
          <h3>
            Project name
            <span> project description and the technologies used</span>
          </h3>
          <div className="pro-buttons">
            <a
              href="http://netlify.com"
              target="_blank"
              rel="noreferrer"
              className="flat-button"
            >
              Live Demo
            </a>
            <a
              href="http://github.com"
              target="_blank"
              rel="noreferrer"
              className="flat-button"
            >
              Github
            </a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={IMG1} alt="project-1-name" />
          </div>
          <h3>
            Project name
            <span> project description and the technologies used</span>
          </h3>
          <div className="pro-buttons">
            <a
              href="http://netlify.com"
              target="_blank"
              rel="noreferrer"
              className="flat-button"
            >
              Live Demo
            </a>
            <a
              href="http://github.com"
              target="_blank"
              rel="noreferrer"
              className="flat-button"
            >
              Github
            </a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={IMG1} alt="project-1-name" />
          </div>
          <h3>
            Project name
            <span> project description and the technologies used</span>
          </h3>
          <div className="pro-buttons">
            <a
              href="http://netlify.com"
              target="_blank"
              rel="noreferrer"
              className="flat-button"
            >
              Live Demo
            </a>
            <a
              href="http://github.com"
              target="_blank"
              rel="noreferrer"
              className="flat-button"
            >
              Github
            </a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={IMG1} alt="project-1-name" />
          </div>
          <h3>
            Project name
            <span> project description and the technologies used</span>
          </h3>
          <div className="pro-buttons">
            <a
              href="http://netlify.com"
              target="_blank"
              rel="noreferrer"
              className="flat-button"
            >
              Live Demo
            </a>
            <a
              href="http://github.com"
              target="_blank"
              rel="noreferrer"
              className="flat-button"
            >
              Github
            </a>
          </div>
        </article>
      </div>
      <Loader type="ball-scale" />
      {/* </div> */}
    </>
  )
}

export default Projects
