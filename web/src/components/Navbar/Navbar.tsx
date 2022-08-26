import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import {
  Box,
  Flex,
  IconButton,
  Button,
  Stack,
  useColorModeValue,
  Image,
  useDisclosure,
  Text,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useMediaQuery,
} from '@chakra-ui/react'
import { FaTimes } from 'react-icons/fa'

import { navigate, routes, useLocation } from '@redwoodjs/router'

import { useProfile } from 'src/hooks/profiles'

import SideBar from '../SideBar/SideBar'

export default function Navbar({ username = '' }) {
  const [isLarge] = useMediaQuery('(min-width: 991px)')

  const { id } = useProfile()
  const { pathname } = useLocation()
  const { isOpen, onOpen, onClose } = useDisclosure()
  console.log({ id, isLarge })

  const getNavButton = () => {
    switch (pathname) {
      case '/':
        return id ? (
          <Button
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'green.400'}
            _hover={{
              bg: 'green.500',
            }}
            onClick={() => {
              navigate(routes.profile())
            }}
          >
            My Account
          </Button>
        ) : (
          <Button
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'green.400'}
            _hover={{
              bg: 'green.500',
            }}
            onClick={() => {
              navigate(routes.auth())
            }}
          >
            Sign Up
          </Button>
        )
      case '/profile':
        return (
          <Button
            className="preview-button"
            colorScheme="green"
            fontFamily={'Inter'}
            backgroundColor="transparent"
            color={'green.400'}
            borderWidth="1px"
            borderColor="green.400"
            borderRadius={'7px'}
            width="125px"
            height="28px"
            onClick={() => navigate(routes.profile({ username }))}
          >
            <span> PREVIEW </span>
          </Button>
        )
    }
  }

  return (
    <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
        direction="row"
      >
        <Flex display={{ base: 'flex', lg: 'none' }}>
          <IconButton
            onClick={onOpen}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Box mr={4}>
            <Image
              borderRadius="full"
              boxSize="30px"
              src="/images/logo.svg"
              alt="Freelancebook"
            />
          </Box>
          <Text fontSize="xl">Freelancebook.me</Text>
        </Flex>

        <Stack
          flex={{ base: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}
        >
          {getNavButton()}
        </Stack>
      </Flex>
      <Box display={{ base: 'none', sm: 'flex' }}>
        <Drawer
          placement={'left'}
          onClose={onClose}
          isOpen={isOpen && !isLarge}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth="1px">
              <Button
                className="sidebar-button"
                colorScheme="green"
                backgroundColor="transparent"
                color={'green.400'}
                fontSize="14px"
                float="right"
                onClick={onClose}
              >
                <FaTimes />
              </Button>
            </DrawerHeader>
            <DrawerBody>
              <SideBar />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </Box>
  )
}
