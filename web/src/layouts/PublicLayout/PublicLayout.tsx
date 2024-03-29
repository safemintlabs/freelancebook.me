import { Layout } from 'antd'
const { Content } = Layout

type PublicLayoutProps = {
  children?: React.ReactNode
  username?: string
}

const PublicLayout = ({ children }: PublicLayoutProps) => {
  return (
    <>
      <Layout style={{ boxSizing: 'border-box' }}>
        <Layout style={{ minHeight: 'calc(100vh - (64px + 62px))' }}>
          <Layout>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
                background: '#FFF',
              }}
            >
              {children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </>
  )
}

export default PublicLayout
