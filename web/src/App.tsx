import React, { useEffect } from 'react'

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { ConfigProvider } from 'antd'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-supabase'

import { AuthProvider } from '@redwoodjs/auth'
import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'

import './theme.less'
import './fonts.less'
import { supabase } from './supabaseClient'

const queryClient = new QueryClient()

const App = () => {
  useEffect(() => {
    ConfigProvider.config({
      theme: {
        primaryColor: '#000000',
      },
    })
  }, [])
  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider>
        <FatalErrorBoundary page={FatalErrorPage}>
          <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
            <AuthProvider client={supabase} type="supabase">
              <ColorModeScript />
              <ChakraProvider>
                <Provider value={supabase}>
                  <RedwoodApolloProvider>
                    <Routes />
                  </RedwoodApolloProvider>
                </Provider>
              </ChakraProvider>
            </AuthProvider>
          </RedwoodProvider>
        </FatalErrorBoundary>
      </ConfigProvider>
    </QueryClientProvider>
  )
}

export default App
