import React from 'react'

import { Button, IconButton } from '@chakra-ui/react'

import { navigate, routes } from '@redwoodjs/router'

import IconProfile from './icons/IconProfile'
import IconProjects from './icons/IconProjects'
import IconSchedule from './icons/IconSchedule'
import IconTestimonials from './icons/IconTestimonials'

import './styles.less'

type MenuItem = {
  key: string
  icon: any
  label: string
}

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
  getItem('Profile', 'profile', <IconProfile />),
  getItem('Schedule', 'schedule', <IconSchedule />),
  getItem('Projects', 'projects', <IconProjects />),
  getItem('Testimonials', 'testimonials', <IconTestimonials />),
  getItem('Logout', 'logout', <IconTestimonials />),
]

const AppMenu: React.FC = () => {
  const onClick = (key) => (e) => {
    navigate(routes[key as any]())
  }

  return (
    <div className="freelancer-nav">
      {items.map((item: MenuItem) => (
        <Button
          className="nav-buttons"
          colorScheme="teal"
          variant="link"
          key={item.key}
          onClick={onClick(item.key)}
        >
          <IconButton
            colorScheme="teal"
            aria-label="Profile"
            size="lg"
            icon={item.icon}
            style={{ borderRadius: '50%', width: 48, marginRight: 20 }}
          />
          <span>{item.label}</span>
        </Button>
      ))}
    </div>
  )
}

export default AppMenu
