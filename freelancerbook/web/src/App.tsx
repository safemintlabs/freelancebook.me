import { useEffect } from 'react'

import { createClient } from '@supabase/supabase-js'
import { ConfigProvider } from 'antd'

import { AuthProvider } from '@redwoodjs/auth'
import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'

import './theme.less'

const supabaseClient = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
)

const App = () => {
  useEffect(() => {
    ConfigProvider.config({
      theme: {
        primaryColor: '#000000',
      },
    })
  }, [])
  return (
    <ConfigProvider>
      <FatalErrorBoundary page={FatalErrorPage}>
        <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
          <AuthProvider client={supabaseClient} type="supabase">
            <RedwoodApolloProvider>
              <Routes />
            </RedwoodApolloProvider>
          </AuthProvider>
        </RedwoodProvider>
      </FatalErrorBoundary>
    </ConfigProvider>
  )
}

export default App
