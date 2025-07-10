// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import qnx_logo from '/qnx_logo.jpg'
import './App.css';
import AsciiArt from './AsciiArt';


/**
 * 
 * @param {string} title 
 * @param {string} employer 
 * @param {string} description 
 * @returns 
 */
function Job(title, employer, description)
{
  return (
    <>
      <div>{title}</div>
      <div>{employer}</div>
      <div>{description}</div>
    </>
  )
}

function App() {
  // const [count, setCount] = useState(0)

  // const jobs = [Job("IDE Software Developer", "BlackBerry QNX", "lol"), Job()]

  return (
      <div className='container'>
        
        <header>
          <div className='header'>
            <h1>dylan leclair</h1>
            
              <div>
              {/* <AsciiArt></AsciiArt> */}
                <div>software developer • calgary, alberta</div>
                <div>b.sc computer science @ ucalgary</div>
                <a href="mailto:dleclaircs@gmail.com">dleclaircs@gmail.com</a>
              </div>

          </div>
        </header>

        <main>
          <section className='section section-intro'>
            <div className="content">
              <div className='subheader'>who i am</div>

            <div className='profile'>
              <div>
               <img className='headshot' src="/headshot.jpg"></img>

              </div>

              <div className='profile-desc'>
                <div className='large'>Nice to meet you - I'm Dylan.</div>
                <div>When I'm not programming (or more likely, debugging), you can find me walking my dog, at the climbing gym, playing counter-strike, reading or geeking out over keyboards.</div>
              </div>

            </div>
                          <div className='w-100'>
                <p>In just 3.5 years of experience, I've worked on:</p>
                <ul>
                  <li>control systems to coordinate a fleet of robots</li>
                  <li>a powerful system profiler for understanding mission critical systems</li>
                  <li>procedural tooling in a AAA game engine</li>
                  <li>middleware running in vehicles across the globe</li>
                </ul>                
                <p>I'm a person who approaches new challenges with curiosity and a drive to build software that empowers people. What gives software value is not what it can do, but what it can do reliably.</p>
                <p>Modern technology is more complex than ever, and is ultimately the product of countless people just like you and me doing whatever they can to disrupt the human experience for the better.</p>
                <p>My goal is to do just that.</p>
              </div>
            </div>

            <div className="content career-content">
              <div className='subheader'>career</div>

              <div className="job-container w-100">
                <div className='job-icon'>
                  <img className='job-img' src={qnx_logo}></img>
                </div>
                <div className='job-desc'>
                  <ul>
                    <li>Built a series of attractive UI to fetch, analyze and integrate live data from QNX systems
                    into VS Code using React & TypeScript.</li>
                    <li>Upgraded the Momentics IDE and its System Profiler to support QNX 8.0.</li>
                    <li>Optimized complex calculations related to thread states and CPU usage.</li>
                    <li>Fixed bugs in huge Java and TypeScript codebases, improving code coverage and adding new test cases along the way.</li>
                    <li>Automated workflows by writing Python and shell scripts.</li>
                  </ul>
                </div>
                
                <div className='job-title'>
                  <span>systems software developer</span>
                  <span className="job-loc">@ottawa</span>
                  <span>•</span>
                  <span className='job-date'>jun 2022 - jul 2025</span>
                </div>
                <div className='job-tech'></div>
              </div>
            </div>

            <div className="content">
              <div className='subheader'>projects</div>
              <div className='w-100'>software is the beating heart of the 21st century</div>
            </div>

          </section>
        </main>
      </div>
  )
}

export default App
