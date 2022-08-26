import { useEffect } from 'react'

import { Box, Button, Text } from '@chakra-ui/react'
import {
  FaBookReader,
  FaFolder,
  FaLock,
  FaRegCalendarAlt,
  FaRegStar,
} from 'react-icons/fa'

import { useAuth } from '@redwoodjs/auth'
import { navigate, routes } from '@redwoodjs/router'

import './styles.less'
import '@fontsource/inter'

// Accepts a string denoting what page this sidebar is being used (set to NULL by default)
// Accepted arguments can be 'profile', 'schedule', 'projects', or 'testimonials'
const SideBar = ({ activePage = '' }) => {
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
  const pages = {
    profile: 'inactive',
    schedule: 'inactive',
    projects: 'inactive',
    testimonials: 'inactive',
  }

  // Set the classname of the current active page to 'active'
  if (activePage) {
    pages[activePage] = 'active'
  }

  // The active page shall have a contrasting menu color as a result

  return (
    <Box>
      <Box marginLeft={{ sm: 10, lg: 10, xl: 243 }}>
        <Box margin={{ base: '10px', lg: '30px' }}>
          <Button variant="link" onClick={() => navigate(routes.profile())}>
            <span className={pages.profile}>
              <FaBookReader color="#f7f9fb" />
            </span>
            <Text className="text"> Profile </Text>
          </Button>
        </Box>

        <Box margin={{ base: '30px 10px', lg: '30px' }}>
          <Button variant="link" onClick={() => navigate(routes.schedule())}>
            <span className={pages.schedule}>
              <FaRegCalendarAlt color="#f7f9fb" />
            </span>
            <Text className="text"> Schedule </Text>
          </Button>
        </Box>

        <Box margin={{ base: '30px 10px', lg: '30px' }}>
          <Button variant="link" onClick={() => navigate(routes.projects())}>
            <span className={pages.projects}>
              <FaFolder color="#f7f9fb" />
            </span>
            <Text className="text"> Projects </Text>
          </Button>
        </Box>

        <Box margin={{ base: '30px 10px', lg: '30px' }}>
          <Button
            variant="link"
            onClick={() => navigate(routes.testimonials())}
          >
            <span className={pages.testimonials}>
              <FaRegStar color="#f7f9fb" />
            </span>
            <Text className="text"> Testimonials </Text>
          </Button>
        </Box>

        <Box margin={{ base: '30px 10px', lg: '30px' }}>
          <Button variant="link" onClick={signout}>
            <span className="inactive">
              <FaLock color="#f7f9fb" />
            </span>
            <Text className="text"> Logout </Text>
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default SideBar
