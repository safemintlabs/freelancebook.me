import { Layout } from 'antd'

import { useParams } from '@redwoodjs/router'

import AppFooter from '../../components/AppFooter/AppFooter'
import AppHeader from '../../components/AppHeader/AppHeader'

const { Content } = Layout

type PublicLayoutProps = {
  children?: React.ReactNode
  username?: string
}

const PublicLayout = ({ children }: PublicLayoutProps) => {
  const params = useParams()
  return (
    <>
      <Layout style={{ boxSizing: 'border-box' }}>
        <AppHeader username={params.username} />
        <Layout style={{ minHeight: 'calc(100vh - (64px + 62px))' }}>
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
      <AppFooter />
    </>
  )
}

export default PublicLayout
