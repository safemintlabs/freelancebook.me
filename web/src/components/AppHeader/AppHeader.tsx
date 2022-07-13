import React, { useEffect } from 'react'

import { BellFilled, UserOutlined } from '@ant-design/icons'
import { Image, Layout, Menu, MenuProps, Badge } from 'antd'

import { useAuth } from '@redwoodjs/auth'
import { navigate, routes } from '@redwoodjs/router'

import './styles.less'
import { useProfile } from 'src/hooks/profiles'

const { Header } = Layout

const AppHeader = ({
  isProfile,
  username,
}: {
  isProfile?: boolean
  username?: string
}) => {
  const { data: profile } = useProfile(username)
  const { isAuthenticated, logOut, reauthenticate, currentUser } = useAuth()
  const signout = async () => {
    const { error } = await logOut()
    console.log({ error })
  }
  const homeMenu = [
    {
      key: 'home',
      label: 'Members',
    },
  ]
  const profileMenu = [
    {
      key: 'home',
      label: 'Profile',
    },
    {
      key: 'scheduule',
      label: 'Schedule',
    },
    {
      key: 'projects',
      label: 'Projects',
    },
    {
      key: 'testimonials',
      label: 'Testimonials',
    },
  ]
  console.log({ currentUser, profile })
  const menus =
    isProfile || (profile && profile.id !== currentUser?.id)
      ? profileMenu
      : homeMenu
  const notifications = isAuthenticated
    ? ([
        {
          key: 'notification',
          icon: (
            <Badge count={5} size="small">
              <BellFilled width={24} height={24} style={{ fill: '#FFF' }} />
            </Badge>
          ),
          style: {
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
            flexDirection: 'column',
          },
        },
      ] as MenuProps['items'])
    : []
  const items: MenuProps['items'] = [...menus]
  const rightMenu: MenuProps['items'] = [
    ...notifications,
    {
      key: 'menu',
      icon: <UserOutlined width={24} height={24} />,
      className: 'profile-menu',
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
              key: 'menu:profile',
              onClick: () => {
                navigate(routes.profile())
              },
            },
            {
              label: 'Logout',
              key: 'menu:signout',
              onClick: signout,
            },
          ]
        : [
            {
              label: 'Signin',
              key: 'menu:signin',
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
    <Header className="header">
      <div className="logo">
        <Image width={200} src="/images/freelancer.svg" preview={false} />
      </div>
      <Menu
        className="app-top-menu"
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={['home']}
        items={items}
        selectable
        style={{ flex: '1 1 0%', height: '100%' }}
      />
      <Menu
        style={{ width: isAuthenticated ? '108px' : '54px' }}
        className="app-top-menu"
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={['home']}
        items={rightMenu}
        selectable
      />
    </Header>
  )
}

export default AppHeader
