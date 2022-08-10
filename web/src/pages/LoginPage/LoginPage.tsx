import React, { useState } from 'react'

import {
  Button,
  Center,
  FormControl,
  FormLabel,
  useToast,
  Text,
  Input,
  Stack,
  InputGroup,
  InputLeftElement,
  Image,
  Flex,
  Box,
} from '@chakra-ui/react'
import { FaGoogle, FaEnvelope, FaLock } from 'react-icons/fa'

import './styles.less'
import { useAuth } from '@redwoodjs/auth'

const LoginPage: React.FC = () => {
  const { logIn } = useAuth()
  const toast = useToast()

  const [loading, setLoading] = useState<boolean>(false)
  const [email, setEmail] = useState<string>()
  const [password, setPassword] = useState<string>()

  const handleEmail = (event) => setEmail(event.target.value)
  const handlePassword = (event) => setPassword(event.target.value)

  const onFinish = async () => {
    try {
      setLoading(true)
      const { error } = await logIn({ email: email })
      if (error) throw error
      toast({
        title: 'Login Successful',
        description: 'Check your email for the login link!',
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
    } catch (error) {
      toast({
        title: 'Login Failed',
        description: error.error_description || error.message,
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    } finally {
      setLoading(false)
    }
  }

  const signInWithGoogle = async () => {
    const { user, session, error } = await logIn({
      provider: 'google',
      redirectTo: 'profile',
    })

    console.log({ user, session, error })
  }

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <Box marginBottom={5}>
        <Image
          borderRadius="full"
          boxSize="60px"
          src="/images/logo.svg"
          alt="Dan Abramov"
        />
      </Box>
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
          <Text fontSize="2xl" className="bree-serif-font">
            Welcome to Freelancebook
          </Text>
        </Center>

        <FormControl>
          <FormLabel>Email address</FormLabel>
          <InputGroup>
            <InputLeftElement color="gray.500" pointerEvents="none">
              <FaEnvelope color="gray.500" />
            </InputLeftElement>
            <Input type="email" onChange={handleEmail} />
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
        <Center>
          <Button
            colorScheme="green"
            width={'206px'}
            onClick={() => {
              onFinish()
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
    </Flex>
  )
}

export default LoginPage
