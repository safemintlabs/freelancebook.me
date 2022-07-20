import React, { useEffect, useState } from 'react'
import { Image, Layout, Menu, MenuProps, Badge } from 'antd'
import './LandingHeader-styles.css'
import { Link, navigate, routes } from '@redwoodjs/router'

const { Header } = Layout

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
          <Image height={100} src="/images/logos/inlinestyle/00-freelancebook-inlinestyle.svg" preview={false} />
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