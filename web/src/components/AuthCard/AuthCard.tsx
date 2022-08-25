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

const AuthCard = ({ signInWithGoogle, onFinish, loading }) => {
  const [email, setEmail] = useState<string>()
  const [password, setPassword] = useState<string>()
  const [isLogin, setIsLogin] = useState<boolean>(false)

  const handleEmail = (event) => setEmail(event.target.value)
  const handlePassword = (event) => setPassword(event.target.value)

  const handleForgotPassword = () => {
    navigate(routes.forgotPassword())
  }

  const handleChangeText = () => {
    setIsLogin(!isLogin)
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
        <Heading fontSize="3xl">
          {isLogin ? 'Login your account' : 'Create an account free'}
        </Heading>
      </Center>

      <FormControl>
        <FormLabel>Email Address</FormLabel>
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
          <Input
            type="password"
            placeholder="●●●●●"
            onChange={handlePassword}
          />
        </InputGroup>
      </FormControl>
      <Flex justifyContent="space-between">
        {isLogin && (
          <Button variant="link" onClick={handleForgotPassword}>
            I forgot my password
          </Button>
        )}
      </Flex>

      <Center>
        <Button
          colorScheme="green"
          width={'100%'}
          onClick={() => {
            onFinish(email, password, isLogin)
          }}
          disabled={loading}
        >
          {isLogin ? 'Login your account' : 'Create your account'}
        </Button>
      </Center>
      <Center>
        <Button
          colorScheme="green"
          width={'100%'}
          variant="ghost"
          onClick={handleChangeText}
        >
          {isLogin ? 'Create new account?' : 'Already have an account?'}
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
          width={'100%'}
        >
          {isLogin ? 'Login using Google' : 'Register using Google'}
        </Button>
      </Center>
    </Stack>
  )
}

export default AuthCard
