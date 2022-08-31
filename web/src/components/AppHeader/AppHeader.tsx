import React, { useEffect } from 'react'

import { BellFilled, UserOutlined } from '@ant-design/icons'
import { Image, Layout, Menu, MenuProps, Badge, Skeleton, Affix } from 'antd'

import { useAuth } from '@redwoodjs/auth'
import {
  Link,
  navigate,
  Redirect,
  routes,
  useLocation,
} from '@redwoodjs/router'

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
  const { pathname } = useLocation()
  const { profile, isLoading, isMe } = useProfile(username)
  const { isAuthenticated, logOut, reauthenticate } = useAuth()
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
      onClick: () => navigate(routes.publicProfile({ username })),
    },
    {
      key: 'schedule',
      label: 'Schedule',
      onClick: () => navigate(routes.publicSchedule({ username })),
    },
    {
      key: 'projects',
      label: 'Projects',
      onClick: () => navigate(routes.publicProjects({ username })),
    },
    {
      key: 'testimonials',
      label: 'Testimonials',
      onClick: () => navigate(routes.publicTestimonials({ username })),
    },
  ]
  const setupMenu = [
    {
      key: 'setup',
      label: 'Setup Profile',
    },
  ]

  const notProfileCompleted = !profile && isAuthenticated
  const menus = notProfileCompleted
    ? setupMenu
    : username
    ? profileMenu
    : isMe && isProfile
    ? []
    : homeMenu
  const notifications = isAuthenticated
    ? ([
        {
          key: 'notification',
          icon: (
            <Badge count={5} size="small">
              <BellFilled width={24} height={24} />
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
                navigate(routes.auth())
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

  if (notProfileCompleted && pathname !== '/setup' && !isLoading)
    return <Redirect to={routes.setup()} />

  const selectedKey =
    items.find((o) => pathname.includes(o.key as string))?.key || items[0]?.key
  return (
    <Affix offsetTop={0}>
      <Header className="header">
        <Link className="logo" to={routes.home()}>
          <Image width={200} src="/images/freelancer.svg" preview={false} />
        </Link>
        {isLoading ? (
          <Skeleton />
        ) : (
          <>
            <Menu
              className="app-top-menu"
              theme="light"
              mode="horizontal"
              selectedKeys={[selectedKey as string]}
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
          </>
        )}
      </Header>
    </Affix>
  )
}

export default AppHeader
