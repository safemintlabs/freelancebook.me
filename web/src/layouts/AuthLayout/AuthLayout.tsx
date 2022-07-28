import React from 'react'

import { Breadcrumb, Layout } from 'antd'

// import AppFooter from 'src/components/AppFooter/AppFooter'
import AppHeader from 'src/components/AppHeader/AppHeader'
import AppMenu from 'src/components/AppMenu/AppMenu'
import { useProfile } from 'src/hooks/profiles'

import './styles.less'

const { Content, Sider } = Layout

const AuthLayout: React.FC = ({ children }) => {
  const { data: profile } = useProfile()
  return (
    <>
      <Layout style={{ minHeight: '100vh' }}>
        <AppHeader isProfile={true} />
        <Layout hasSider={profile?.isActive} style={{ flex: '1 1 0%' }}>
          {profile?.isActive && (
            <Sider
              width={200}
              style={{
                overflow: 'auto',
                height: '100vh',
                position: 'fixed',
                left: 0,
                top: 64,
                bottom: 0,
              }}
            >
              <AppMenu />
            </Sider>
          )}
          <Layout>
            {false && (
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
            )}
            <Content className="content" hasSider={profile?.isActive}>
              {children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
      {/* <AppFooter /> */}
    </>
  )
}

export default AuthLayout
