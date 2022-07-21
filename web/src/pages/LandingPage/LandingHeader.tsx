import React, { useEffect, useState } from 'react'
import { Image, Layout, Menu, MenuProps, Badge, Button } from 'antd'
import './LandingHeader-styles.css'
import { Link, navigate, routes } from '@redwoodjs/router'

const { Header } = Layout

const LandingHeader = () => {

  return (
    <>
      <Header className='landingHeader'>
        <div className="top-logo">
          <Link to={routes.landing()}>
            <Image id="logo-image" height={100} src="/images/logos/inlinestyle/00-freelancebook-inlinestyle.svg" preview={false} />
          </Link>
        </div>
        <div className='landingTopMenu'>
          <Button id='log-in' onClick={ () => {navigate(routes.login()) } }> Log in </Button>
          <Button id='create' onClick={ () => {navigate(routes.login()) } }> Create Your Site </Button>
        </div>
      </Header>
    </>
  )
};

export default LandingHeader;