import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const links = [
  {
    type: 'button',
    name: 'Buttons'
  },
  {
    type: 'input',
    name: 'Inputs'
  }
]
const Navbar = (props) => {



  const router = useRouter();
  const currentPath = router.asPath.replace('/', '')
  console.log(currentPath)

  return <>
    <div className='navbar-container'>
      <div className='logo'>{props.logo}</div>
      <div className='links'>
        {
          links.map(val => <>
          <Link href={`/${val.type}`}>
            <div className='link' style={{
              backgroundColor: currentPath === val.type ? 'rgba(196,196,196,0.5)' : '',
              fontWeight: 700
            }}>{val.name}</div>
          </Link>
          </>
          )
        }

      </div>
    </div>
    <style jsx>{`

      .navbar-container {
        height: 70px;
        display: flex;
        padding: 10px 20px;
        border-bottom: 2px solid #E5E5E5;
      }

      .logo, .settings, .links {
        height: 100%;
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Geneva', Verdana, sans-serif;
        font-weight: 800;
      }

      .links {
        flex: 8;
        display: flex;
        justify-content: flex-end;
      }

      .link {
        height: 50px;
        width: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0px 5px;
        border-radius: 10px;
        font-weight: 500;
      }

      .link:hover{
        cursor: pointer;
      }
      
    `}</style>
  </>
}

export default Navbar;