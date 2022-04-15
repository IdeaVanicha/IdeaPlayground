import type { NextPage } from 'next'
import Navbar from '../components/navbar';

const Home: NextPage = () => {

  return <>
    <div className='homepage-container'>
      <Navbar logo={"Idea's Playground"}/>
    </div>
    <style jsx>{`
      .homepage-container {
        width: 100vw;
        height: 100vh;
      }
    `}</style>
  </>
}

export default Home
