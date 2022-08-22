import { navigate, routes } from '@redwoodjs/router'

import { Box, Stack, Text } from "@chakra-ui/react"
import { FaBookReader, FaFolder, FaLock, FaRegCalendarAlt, FaRegStar } from 'react-icons/fa'
import './styles.less'
import '@fontsource/inter'
import { useAuth } from '@redwoodjs/auth'
import { useEffect } from 'react'

import { extendTheme } from '@chakra-ui/react'

const SideBar = () => {

  // Initialization of breakpoints for responsive design
  const breakpoints = {
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1536px',
  }
  
  const theme = extendTheme({ breakpoints })

  const { logOut, reauthenticate } = useAuth()

  // Executed upon clicking of logout button
  const signout = async () => {
    const { error } = await logOut()
    console.log({ error })
  }

  useEffect(() => {
    setTimeout(() => {
      reauthenticate()
    }, 100)
  }, [])


  return (
    <div className="side-bar-component">
      <div className='side-bar-items'>

        <Box margin={'20px'}>
          <a onClick={() => navigate(routes.setup())}>
            <span className="icon">
              <FaBookReader
                color="#f7f9fb"
              />
            </span>
            <Text className="text"> Profile </Text>
          </a>
        </Box>

        <Box margin={'20px'}>
          <a onClick={() => navigate(routes.schedule())}>
            <span className="icon">
              <FaRegCalendarAlt
                color="#f7f9fb"
              />
            </span>
            <Text className="text"> Schedule </Text>
          </a>
        </Box>

        <Box margin={'20px'}>
          <a onClick={() => navigate(routes.projects())}>
            <span className="icon">
              <FaFolder
                color="#f7f9fb"
              />
            </span>
            <Text className="text"> Projects </Text>
          </a>
        </Box>

        <Box margin={'20px'}>
          <a onClick={() => navigate(routes.testimonials())}>
            <span className="icon">
              <FaRegStar
                color="#f7f9fb"
              />
            </span>
            <Text className="text"> Testimonials </Text>
          </a>
        </Box>

        <Box margin={'20px'}>
          <a onClick={signout}>
            <span className="icon">
              <FaLock
                color="#f7f9fb"
              />
            </span>
            <Text className="text"> Logout </Text>
          </a>
        </Box>
    
      </div>
    </div>
  )
}

export default SideBar