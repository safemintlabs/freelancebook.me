import React from 'react'

import { Box, Flex } from '@chakra-ui/react'
import { Affix } from 'antd'

// import AppFooter from 'src/components/AppFooter/AppFooter'
import Navbar from 'src/components/Navbar/Navbar'
import SideBar from 'src/components/SideBar/SideBar'
import { useProfile } from 'src/hooks/profiles'

import './styles.less'

const AuthLayout: React.FC = ({ children }) => {
  const { data: profile } = useProfile()
  return (
    <Flex
      direction="column"
      style={{
        margin: 0,
        minHeight: 280,
        marginTop: 20,
        background: '#E5E5E5',
      }}
    >
      <Affix offsetTop={0}>
        <Navbar />
      </Affix>
      <Flex direction="row" className="main" backgroundColor="#E5E5E5">
        {profile?.isActive && (
          <Box
            display={{ base: 'none', lg: 'flex' }}
            position={{ lg: 'fixed' }}
            left={0}
            top={200}
          >
            <SideBar />
          </Box>
        )}

        <Flex className="content" marginLeft={{ lg: 250 }} width="100%">
          {children}
        </Flex>
      </Flex>
    </Flex>
  )
}

export default AuthLayout
