import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
  const timer = setTimeout(() => {
    setLetterClass('text-animate-hover')
  }, 3000);
  
  return () => clearTimeout(timer);
}, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Hi, I’m Adam Le, a Computer Engineering student at UC Irvine (Class of 2027) 
            passionate about building technology that bridges creativity, intelligence, 
            and real-world impact. I love solving problems through software — from designing 
            full-stack web apps to experimenting with artificial intelligence and automation.
          </p>
          <p align="LEFT">
            I’ve built several projects that reflect my curiosity and drive to learn. Some of 
            my favorites include an AI Image Classifier using TensorFlow and Streamlit that 
            interprets real-time image predictions, a FastAPI automation system that streamlines 
            workflows and integrates data pipelines, and a Pickleball Match Tracker web app built 
            with Next.js, Prisma, and PostgreSQL, which uses analytics to suggest ideal matchups 
            based on player performance. These projects taught me how to build scalable systems, 
            connect the backend and frontend seamlessly, and turn data into actionable insights.
          </p>
          <p>
            I’ve built several projects that reflect my curiosity and drive to learn. Some of my 
            favorites include an AI Image Classifier using TensorFlow and Streamlit that interprets 
            real-time image predictions, a FastAPI automation system that streamlines workflows and 
            integrates data pipelines, and a Pickleball Match Tracker web app built with Next.js, 
            Prisma, and PostgreSQL, which uses analytics to suggest ideal matchups based on player 
            performance. These projects taught me how to build scalable systems, connect the backend 
            and frontend seamlessly, and turn data into actionable insights.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
