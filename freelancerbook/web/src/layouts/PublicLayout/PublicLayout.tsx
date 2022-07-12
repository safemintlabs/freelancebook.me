import { Layout } from 'antd'

import AppFooter from '../../components/AppFooter/AppFooter'
import AppHeader from '../../components/AppHeader/AppHeader'

const { Content } = Layout

type PublicLayoutProps = {
  children?: React.ReactNode
}

const PublicLayout = ({ children }: PublicLayoutProps) => {
  return (
    <>
      <Layout style={{ boxSizing: 'border-box' }}>
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
      <AppFooter />
    </>
  )
}

export default PublicLayout
