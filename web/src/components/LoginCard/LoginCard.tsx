import React, { useState } from 'react'

import {
  Button,
  Center,
  FormControl,
  FormLabel,
  Text,
  Input,
  Stack,
  InputGroup,
  InputLeftElement,
  Heading,
  Flex,
} from '@chakra-ui/react'
import { FaGoogle, FaEnvelope, FaLock } from 'react-icons/fa'

import { navigate, routes } from '@redwoodjs/router'

const LoginCard = ({ signInWithGoogle, onFinish, loading }) => {
  const [email, setEmail] = useState<string>()
  const [password, setPassword] = useState<string>()

  const handleEmail = (event) => setEmail(event.target.value)
  const handlePassword = (event) => setPassword(event.target.value)

  const handleForgotPassword = () => {
    navigate(routes.forgotPassword())
  }

  return (
    <Stack
      spacing={4}
      p="5"
      backgroundColor="white"
      boxShadow="md"
      borderWidth="1px"
      borderRadius="lg"
      width={'500px'}
    >
      <Center>
        <Heading fontSize="3xl">Get started absolutely free</Heading>
      </Center>

      <FormControl>
        <FormLabel>Email address</FormLabel>
        <InputGroup>
          <InputLeftElement color="gray.500" pointerEvents="none">
            <FaEnvelope color="gray.500" />
          </InputLeftElement>
          <Input
            type="email"
            placeholder="name@domain.com"
            onChange={handleEmail}
          />
        </InputGroup>
      </FormControl>

      <FormControl>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <InputLeftElement color="gray.500" pointerEvents="none">
            <FaLock color="gray.500" />
          </InputLeftElement>
          <Input type="password" onChange={handlePassword} />
        </InputGroup>
      </FormControl>
      <Flex justifyContent="space-between">
        <Button variant="link">I already have an account</Button>
        <Button variant="link" onClick={handleForgotPassword}>
          I forgot my password
        </Button>
      </Flex>

      <Center>
        <Button
          colorScheme="green"
          width={'100%'}
          onClick={() => {
            onFinish(email, password)
          }}
          disabled={loading}
        >
          Login your account
        </Button>
      </Center>
      <Center>
        <Text>OR</Text>
      </Center>

      <Center>
        <Button
          onClick={signInWithGoogle}
          colorScheme="green"
          leftIcon={<FaGoogle />}
        >
          Signin using Google
        </Button>
      </Center>
    </Stack>
  )
}

export default LoginCard
