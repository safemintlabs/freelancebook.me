import { navigate, routes } from '@redwoodjs/router'

import { Box, Text } from "@chakra-ui/react"
import { FaBookReader, FaFolder, FaLock, FaRegCalendarAlt, FaRegStar } from 'react-icons/fa'
import './styles.less'
import '@fontsource/inter'
import { useAuth } from '@redwoodjs/auth'
import { useEffect } from 'react'

// Accepts a string denoting what page this sidebar is being used (set to NULL by default)
// Accepted arguments can be 'profile', 'schedule', 'projects', or 'testimonials'
const SideBar = ({activePage=null}) => {
  
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

  // Class name of each side bar menu depends whether it corresponds to the current page or not
  var pages = {
    'profile': 'inactive',
    'schedule': 'inactive',
    'projects': 'inactive',
    'testimonials': 'inactive',
  }

  // Set the classname of the current active page to 'active'
  if (activePage) {
    pages[activePage] = 'active'
  }

  // The active page shall have a contrasting menu color as a result

  return (
    <div className="side-bar-component">
      <div className='side-bar-items'>

        <Box margin={'30px'}>
          <a onClick={() => navigate(routes.profile())}>
            <span className={pages.profile}>
              <FaBookReader
                color="#f7f9fb"
              />
            </span>
            <Text className="text"> Profile </Text>
          </a>
        </Box>

        <Box margin={'30px'}>
          <a onClick={() => navigate(routes.schedule())}>
            <span className={pages.schedule}>
              <FaRegCalendarAlt
                color="#f7f9fb"
              />
            </span>
            <Text className="text"> Schedule </Text>
          </a>
        </Box>

        <Box margin={'30px'}>
          <a onClick={() => navigate(routes.projects())}>
            <span className={pages.projects}>
              <FaFolder
                color="#f7f9fb"
              />
            </span>
            <Text className="text"> Projects </Text>
          </a>
        </Box>

        <Box margin={'30px'}>
          <a onClick={() => navigate(routes.testimonials())}>
            <span className={pages.testimonials}>
              <FaRegStar
                color="#f7f9fb"
              />
            </span>
            <Text className="text"> Testimonials </Text>
          </a>
        </Box>

        <Box margin={'30px'}>
          <a onClick={signout}>
            <span className='inactive'>
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