import React from 'react'

import {
  CommentOutlined,
  ProjectOutlined,
  ScheduleOutlined,
  ProfileOutlined,
} from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Menu } from 'antd'

import { navigate, routes } from '@redwoodjs/router'

type MenuItem = Required<MenuProps>['items'][number]

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem
}

const items: MenuItem[] = [
  getItem('Profile', 'profile', <ProfileOutlined />),
  getItem('Schedule', 'schedule', <ScheduleOutlined />),
  getItem('Projects', 'projects', <ProjectOutlined />),
  getItem('Testimonials', 'testimonials', <CommentOutlined />),
]

const AppMenu: React.FC = () => {
  const onClick: MenuProps['onClick'] = (e) => {
    navigate(routes[e.key as any]())
  }

  return (
    <Menu
      theme="dark"
      onClick={onClick}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
  )
}

export default AppMenu
