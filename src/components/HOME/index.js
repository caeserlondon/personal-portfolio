import { useState, useEffect } from 'react'
import Loader from 'react-loaders'
import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-s.png'
import AnimatedLetters from '../AnimatedLetters'
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
        </div>
        <div className="cube-zone">
          <section class="box-container">
            <div class="box rotating box-1">
              <div class="wall wall-1">
                {' '}
                <h2 class="text">CAESER AL-ANI</h2>
              </div>
              <div class="wall wall-2"></div>
              <div class="wall wall-3">
                <h2 class="text">GRAPHIC DESIGNER</h2>
              </div>
              <div class="wall wall-4">
                <h2 class="text">WEB DEVELOPER</h2>
              </div>
              <div class="wall wall-5"></div>
              <div class="wall wall-6">
                <h2 class="text">CAESER AL-ANI</h2>
              </div>

              <div class="box rotating box-2">
                <div class="wall wall-1"></div>
                <div class="wall wall-2"></div>
                <div class="wall wall-3"></div>
                <div class="wall wall-4"></div>
                <div class="wall wall-5"></div>
                <div class="wall wall-6"></div>

                <div class="box rotating box-3">
                  <div class="wall wall-1"></div>
                  <div class="wall wall-2"></div>
                  <div class="wall wall-3"></div>
                  <div class="wall wall-4"></div>
                  <div class="wall wall-5"></div>
                  <div class="wall wall-6"></div>
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
