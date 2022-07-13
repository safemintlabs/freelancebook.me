import React from 'react'

import { Breadcrumb, Layout } from 'antd'

import AppHeader from 'src/components/AppHeader/AppHeader'
import AppMenu from 'src/components/AppMenu/AppMenu'

const { Content, Sider } = Layout

const AuthLayout: React.FC = ({ children }) => (
  <Layout style={{ height: '100vh' }}>
    <AppHeader isProfile={true} />
    <Layout>
      {<Sider width={200} className="site-layout-background">
        <AppMenu />
      </Sider>}
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  </Layout>
)

export default AuthLayout
