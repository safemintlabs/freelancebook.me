import React from 'react'

import {
  Box,
  Text,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  FlexProps,
  Image,
} from '@chakra-ui/react'
import { IconType } from 'react-icons'
import {
  FiUser,
  FiCalendar,
  FiBriefcase,
  FiMessageCircle,
} from 'react-icons/fi'

interface LinkItemProps {
  name: string
  icon: IconType
}

interface NavItemProps extends FlexProps {
  icon: IconType
  children: string
}

const LinkItems: Array<LinkItemProps> = [
  { name: 'Profile', icon: FiUser },
  { name: 'Schedule', icon: FiCalendar },
  { name: 'Projects', icon: FiBriefcase },
  { name: 'Testimonials', icon: FiMessageCircle },
]

const AppMenu: React.FC = () => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Image
          borderRadius="full"
          boxSize="30px"
          src="/images/logo.svg"
          alt="Freelancebook"
        />
        <Text fontSize="2xl" fontWeight="bold">
          reelancebook
        </Text>
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  )
}

const NavItem = ({ icon, children }: NavItemProps) => {
  const linkUrl = children.toLowerCase()
  return (
    <Link
      href={`/${linkUrl}`}
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'green.400',
          color: 'white',
        }}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  )
}

export default AppMenu
