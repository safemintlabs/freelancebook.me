import { Layout } from 'antd'

import AppHeader from '../../components/AppHeader/AppHeader'

const { Content } = Layout

type PublicLayoutProps = {
  children?: React.ReactNode
}

const PublicLayout = ({ children }: PublicLayoutProps) => {
  return (
    <Layout style={{ height: '100vh' }}>
      <AppHeader />
      <Layout>
        <Layout style={{ padding: '0 24px 24px' }}>
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
}

export default PublicLayout
