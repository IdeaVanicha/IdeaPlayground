import type { NextPage } from 'next'
import Navbar from '../components/navbar';

const inputs = [
  {
    title: 'Greek',
    personality: '',
    style: '',
    story: '',
    cssClass: '', 
    text: 'Enter a text',
    background: 'pink'
  },
  {
    title: 'Greek',
    personality: '',
    style: '',
    story: '',
    cssClass: 'blendy', 
    text: 'Enter a text',
    background: '#fbfbfb'
  },

]

const Input: NextPage = () => {

  return <>
    <div className='homepage-container'>
      <Navbar logo={"Idea's Playground"}/>
      <div className='body'>
      {
        inputs.map(val => <>
        <div className='button-box'>
          <div className='display-box' style={{backgroundColor: `${val.background}`}}>
            <input className={`${val.cssClass}`} maxLength={40} placeholder={val.text}/>
          </div>
          <div className='subtitle'>
            <p className='subheading'>{val.title}</p>
            <p className='subtext'><span className='subheading'>Personality: </span>{val.personality}</p>
            <p className='subtext'><span className='subheading'>Style: </span>{val.style}</p>
            <p className='subheading'>Story: </p>
            <p className='subtext'>{val.story}</p>
          </div>
        </div>
        
        </>)
      }

      </div>
     
    </div>
    <style jsx>{`
      .homepage-container {
        width: 100vw;
        height: 100vh;
      }

      .body {
        display: flex;
        flex-wrap: wrap;
      }

      .button-box {
        height: 400px;
        width: 450px;
        margin: 10px;
        display: flex;
        flex-direction: column;
        padding: 20px;
      }

      .display-box, .subtitle {
        flex: 1;
        margin: 5px 0px;
      }

      .display-box {
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .subheading {
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 700;
        font-size: 14px;
        margin: 0;
        padding: 0;
      }

      .subtext {
        font-family: Helvetica, sans-serif;
        font-weight: 400;
        font-size: 14px;
        line-height: 10px;
      }

    `}</style>
  </>
}

export default Input;
