import React from 'react'

import { Flex, Box, Text, Heading } from '@chakra-ui/react'

import LoginCard from "./LoginCard"

import "@fontsource/inter";

import './styles.css'

const LoginPage: React.FC = () => {
  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <Heading id="get-started">
        Get started absolutely free
      </Heading>
      <LoginCard />
    </Flex>
  )
}

export default LoginPage