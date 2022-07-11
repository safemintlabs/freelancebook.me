import React from 'react'

import { BellTwoTone, UserOutlined } from '@ant-design/icons'
import { Layout, Menu, MenuProps } from 'antd'

const { Header } = Layout

const AppHeader: React.FC = () => {
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
    {
      key: 'profile',
      icon: <UserOutlined />,
      style: {
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
      },
      children: [
        {
          label: 'Signin',
          key: 'profile:signin',
        },
      ],
    },
  ]
  return (
    <Header className="header">
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        items={items}
        selectable
      />
    </Header>
  )
}

export default AppHeader
