import { Link } from 'react-router-dom'
import { FloatingLettersTextBuilder } from 'react-animated-text-builders'
import { useEffect,useRef, useState } from 'react'
import './index.scss';
import Font from 'react-fonts';
import logo from '../../images/icon-1.png';
// import Logo from './Logo/Logo';
import {Letters,letter, MovingComponent } from "react-moving-text";
import About from '../About/index'
import Animatedletters from '../AnimatedLetters'
const Home = () => {
 
  const func_t = () => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }
  const [letterClass, setLetterClass] = useState('text-animate')
  const hiArray = ['H', 'i', ',']
  const meArray = ['I', "'", 'm', ' ']
  const nameArray = ['i', 'l', 'a', 'l', ' ', 'j', 'a', 'v', 'a', 'i', 'd']
  const jobArray = [
    'W',
    'e',
    'b',
    ' ',
    'D',
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
    func_t()
  }, [])
  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <Animatedletters
              letterClass={letterClass}
              strArray={hiArray}
              idx={1}
            />
            <br />
            <Animatedletters
              letterClass={letterClass}
              strArray={meArray}
              idx={4}
            />
            <img src={logo} className="spinning-logo" alt="developer" />
            <Animatedletters
              letterClass={letterClass}
              strArray={nameArray}
              idx={7}
            />
            <br />
            <Animatedletters
              letterClass={letterClass}
              strArray={jobArray}
              idx={17}
            />
          </h1>
          <h2 className="heading_2">
            <FloatingLettersTextBuilder
              floatingSpeed={500}
              lettersAppearanceDelay={110}
            >
              JavaScript / React.js / Node.js
            </FloatingLettersTextBuilder>
          </h2>

          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        {/* <Logo/> */}
        <div className="bold_letter">
      <MovingComponent className="Bilal " 
        type="swing"
        duration="1100ms"
        delay="40 * 2500ms"
        direction="forwars"
        timing="ease"
        iteration="4"
        fillMode="forwards">
        B
      </MovingComponent>
              </div>
      </div>
    </>
  )
}
export default Home
