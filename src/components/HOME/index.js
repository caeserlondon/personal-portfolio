import { useState, useEffect } from 'react'
import Loader from 'react-loaders'
import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-c.png'
import AnimatedLetters from '../AnimatedLetters'
import CV from '../../assets/cv.pdf'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = [
    'a',
    'e',
    's',
    'e',
    'r',
    ' ',
    ' ',
    'A',
    'l',
    '-',
    'A',
    'n',
    'i',
  ]
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <img src={LogoTitle} alt="developer" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              index={9}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              index={20}
            />
          </h1>
          <h2>Frontend / Backend / Graphic Design</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
          <a href={CV} download className="flat-button CV">
            DOWNLOAD CV
          </a>
        </div>
        <div className="cube-zone">
          <section className="box-container">
            <div className="box rotating box-1">
              <div className="wall wall-1">
                {' '}
                <h2 className="text">CAESER AL-ANI</h2>
              </div>
              <div className="wall wall-2"></div>
              <div className="wall wall-3">
                <h2 className="text">GRAPHIC DESIGNER</h2>
              </div>
              <div className="wall wall-4">
                <h2 className="text">WEB DEVELOPER</h2>
              </div>
              <div className="wall wall-5"></div>
              <div className="wall wall-6">
                <h2 className="text">CAESER AL-ANI</h2>
              </div>

              <div className="box rotating box-2">
                <div className="wall wall-1"></div>
                <div className="wall wall-2"></div>
                <div className="wall wall-3"></div>
                <div className="wall wall-4"></div>
                <div className="wall wall-5"></div>
                <div className="wall wall-6"></div>

                <div className="box rotating box-3">
                  <div className="wall wall-1"></div>
                  <div className="wall wall-2"></div>
                  <div className="wall wall-3"></div>
                  <div className="wall wall-4"></div>
                  <div className="wall wall-5"></div>
                  <div className="wall wall-6"></div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Loader type="ball-scale" />
    </>
  )
}

export default Home
