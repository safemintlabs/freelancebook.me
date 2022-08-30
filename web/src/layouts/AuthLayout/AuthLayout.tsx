import React, { useState } from 'react'

import { Box, Flex } from '@chakra-ui/react'
import { Affix } from 'antd'

// import AppFooter from 'src/components/AppFooter/AppFooter'
import { useParams } from '@redwoodjs/router'

import Navbar from 'src/components/Navbar/Navbar'
import SideBar from 'src/components/SideBar/SideBar'
import { useProfile } from 'src/hooks/profiles'

import './styles.less'

const AuthLayout: React.FC = ({ children }) => {
  const params = useParams()
  const { profile } = useProfile()
  const [isAffix, setAffixed] = useState(false)
  const handleAffix = (affixed: boolean) => setAffixed(affixed)
  return (
    <Flex
      direction="column"
      style={{
        margin: 0,
        minHeight: 280,
        background: '#E5E5E5',
      }}
    >
      <Affix offsetTop={0} onChange={handleAffix}>
        <Navbar
          username={params.username || profile?.username}
          isAffix={isAffix}
        />
      </Affix>
      <Flex direction="row" className="main" backgroundColor="#E5E5E5">
        <Box display={{ base: 'none', lg: 'flex' }}>
          <Affix offsetTop={0}>
            <SideBar />
          </Affix>
        </Box>

        <Flex className="content" width="100%">
          {children}
        </Flex>
      </Flex>
    </Flex>
  )
}

export default AuthLayout
