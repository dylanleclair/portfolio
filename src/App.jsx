// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';


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
            <div>software developer | calgary, alberta</div>
            <div>b.sc computer science @ ucalgary</div>
          </div>
        </header>

        <main>
          <section className='section section-intro'>
            <div className="content">
              <div className='subheader'>mission</div>
              <div className='w-100'>software is the beating heart of the 21st century</div>
            </div>
          </section>
        </main>
      </div>
  )
}

export default App
