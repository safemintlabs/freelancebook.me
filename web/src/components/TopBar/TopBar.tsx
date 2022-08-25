

import './styles.less'
import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, extendTheme, Image, Text, useDisclosure } from '@chakra-ui/react'

import '@fontsource/inter'
import { navigate, routes } from '@redwoodjs/router'
import { useProfile } from 'src/hooks/profiles'
import { useEffect, useState } from 'react'
import { FaBars, FaEye, FaTimes } from 'react-icons/fa'
import SideBar from '../SideBar/SideBar'

// Accepts a string denoting what page this topbar is being used (set to NULL by default)
// Accepted arguments can be 'profile', 'schedule', 'projects', or 'testimonials'
const TopBar = ({activePage=""}) => {

  const { data } = useProfile()
  const [ profile, setProfile ] = useState(data)
  const {
    username
  } = profile || {}

  useEffect(() => setProfile(data), [data])

  const [ isUndefined, setIsUndefined ] = useState(!profile)

  useEffect(() => setIsUndefined(!profile), [profile])

  const { isOpen, onOpen, onClose } = useDisclosure()
  
  return (
    <div className="top-bar-component">
      <div className='left-aligned'>
        <Image
          className='logo'
          borderRadius="full"
          boxSize={"40px"}
          src="/images/logo.svg"
          alt="Freelancebook"
        />
        <Text className='app-name' color={'green.400'}> FREELANCEBOOK </Text>
      </div>
      <div className='right-aligned'>
        <Button 
          className='preview-button'
          colorScheme='green'
          fontFamily={'Inter'}
          backgroundColor='transparent'
          color={'green.400'}
          borderWidth='1px'
          borderColor='green.400'
          borderRadius={'7px'}
          width='125px'
          height= '28px'
          disabled={isUndefined}
          onClick={() => navigate(routes.profile({username: username}))}
        >
          <span> PREVIEW </span>
        </Button>
        <Button 
          className='preview-button-icon'
          colorScheme='green'
          backgroundColor='transparent'
          color={'green.400'}
          borderWidth='1px'
          borderColor='green.400'
          borderRadius={'10px'}
          width='35px'
          height= '28px'
          disabled={isUndefined}
          fontSize="14px"
          padding="8px"
          display="none"
          onClick={() => navigate(routes.profile({username: username}))}
        >
          <FaEye />
        </Button>
        <Button
            className='sidebar-button'
            colorScheme='green'
            backgroundColor='transparent'
            color={'green.400'}
            fontSize="16px"
            onClick={onOpen}
        >
          <FaBars />
        </Button>

        <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader
            borderBottomWidth='1px'
          >
            <Button
              className='sidebar-button'
              colorScheme='green'
              backgroundColor='transparent'
              color={'green.400'}
              fontSize="14px"
              float='right'
              onClick={onClose}
            >
              <FaTimes />
            </Button>
          </DrawerHeader>
          <DrawerBody>
            <SideBar activePage={activePage} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      </div>
    </div>
  )
}

export default TopBar
