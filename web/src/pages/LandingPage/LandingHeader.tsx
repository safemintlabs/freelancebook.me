import React from 'react'

import { Image, Layout, Button, Typography } from 'antd'

import { navigate, routes } from '@redwoodjs/router'
import './LandingHeader-styles.css'

const { Header } = Layout

const LandingHeader = () => {
  const { Title } = Typography
  return (
    <>
      <Header className="header-container">
        <Image height={35} src="/images/logo.svg" preview={false} />
        <Title className="brand-name">Freelancebook</Title>
        <div className="landingTopMenu">
          <Button
            id="log-in"
            onClick={() => {
              navigate(routes.login())
            }}
          >
            Log in
          </Button>
          <Button
            id="create"
            onClick={() => {
              navigate(routes.login())
            }}
          >
            Create Your Site
          </Button>
        </div>
      </Header>
    </>
  )
}

export default LandingHeader
