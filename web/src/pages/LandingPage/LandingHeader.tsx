import React, { useEffect, useState } from 'react'
import { Image, Layout, Menu, MenuProps, Badge } from 'antd'
import './LandingHeader-styles.css'
import { Link, navigate, routes } from '@redwoodjs/router'

const { Header } = Layout

// const LandingHeader = () => {
//   // onClick: () => {
//   //   navigate(routes.login())
//   // }

//   return (
//     <>
//       <Header className='landingHeader'>
//         <div className="abra" id ="open">

//         </div>


//       <a href="index"> <img class="indexLogo" src="img/nav/joshann-logo.png"> </a>

//             <h1> JR and JL Crash Landing on U</h1>
//       </Header>
//     </>
//   )
// }


const items: MenuProps['items'] = [
  {
    label: 'Sign Up',
    key: 'sign-up',
    onClick: () => {
      navigate(routes.login())
    }
  },
  {
    label: 'Log In',
    key: 'log-in',
    onClick: () => {
      navigate(routes.login())
    }
  },
];

const LandingHeader = () => {

  return (
    <>
      <Header className='landingHeader'>
        <Link className="logo" to={routes.landing()}>
          <Image height={100} src="/images/logos/inlinestyle/01-freelancebook-inlinestyle-tagline.svg" preview={false} />
        </Link>
        <Menu className='landingTopMenu'
          mode="horizontal"
          items={items}
        />
      </Header>
    </>
  )
};

export default LandingHeader;