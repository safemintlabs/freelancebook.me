import { navigate, routes } from '@redwoodjs/router'

import { Box, Stack, Text } from "@chakra-ui/react"
import { FaBookReader, FaFolder, FaLock, FaRegCalendarAlt, FaRegStar } from 'react-icons/fa'
import './styles.less'
import '@fontsource/inter'
import { useAuth } from '@redwoodjs/auth'
import { useEffect } from 'react'

const SideBar = () => {
  
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

        <Box margin={'30px'}>
          <a onClick={() => navigate(routes.profile())}>
            <span className="icon">
              <FaBookReader
                color="#f7f9fb"
              />
            </span>
            <Text className="text"> Profile </Text>
          </a>
        </Box>

        <Box margin={'30px'}>
          <a onClick={() => navigate(routes.schedule())}>
            <span className="icon">
              <FaRegCalendarAlt
                color="#f7f9fb"
              />
            </span>
            <Text className="text"> Schedule </Text>
          </a>
        </Box>

        <Box margin={'30px'}>
          <a onClick={() => navigate(routes.projects())}>
            <span className="icon-active">
              <FaFolder
                color="#f7f9fb"
              />
            </span>
            <Text className="text"> Projects </Text>
          </a>
        </Box>

        <Box margin={'30px'}>
          <a onClick={() => navigate(routes.testimonials())}>
            <span className="icon">
              <FaRegStar
                color="#f7f9fb"
              />
            </span>
            <Text className="text"> Testimonials </Text>
          </a>
        </Box>

        <Box margin={'30px'}>
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