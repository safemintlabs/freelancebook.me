import React, { useEffect } from 'react'

import { BellTwoTone, UserOutlined } from '@ant-design/icons'
import { Image, Layout, Menu, MenuProps } from 'antd'

import { useAuth } from '@redwoodjs/auth'
import { navigate, routes } from '@redwoodjs/router'

import './styles.css'

const { Header } = Layout

const AppHeader: React.FC = () => {
  const { isAuthenticated, logOut, currentUser, reauthenticate } = useAuth()
  async function signout() {
    const { error } = await logOut()
    console.log({ error })
  }
  const notifications = isAuthenticated
    ? ([
        {
          key: 'notification',
          icon: <BellTwoTone width={24} height={24} />,
          style: {
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
            flexDirection: 'column',
          },
        },
      ] as MenuProps['items'])
    : []
  const items: MenuProps['items'] = [
    {
      key: 'home',
      label: 'Members',
    },
    {
      key: 'divider',
      style: { flex: '1 1 0%', border: 'none' },
      type: 'divider',
    },
    ...notifications,
    {
      key: 'profile',
      icon: <UserOutlined />,
      style: {
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
      },
      children: isAuthenticated
        ? [
            {
              label: 'My Account',
              key: 'profile:profile',
              onClick: () => {
                navigate(routes.profile())
              },
            },
            {
              label: 'Logout',
              key: 'profile:signout',
              onClick: signout,
            },
          ]
        : [
            {
              label: 'Signin',
              key: 'profile:signin',
              onClick: () => {
                navigate(routes.login())
              },
            },
          ],
    },
  ]

  useEffect(() => {
    setTimeout(() => {
      reauthenticate()
    }, 100)
  }, [])

  console.log({ isAuthenticated, currentUser })
  return (
    <Header
      className="header"
      style={{ display: 'flex', flexDirection: 'row' }}
    >
      <div className="logo">
        <Image width={200} src="/images/freelancer.svg" preview={false} />
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['home']}
        items={items}
        selectable
        style={{ width: '100%', height: '100%' }}
      />
    </Header>
  )
}

export default AppHeader
