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
  VStack,
  InputGroup,
  InputLeftElement,
  Checkbox,
  Link,
  extendTheme
} from '@chakra-ui/react'
import { FaEnvelope, FaLock } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

import './styles.css'
import { useAuth } from '@redwoodjs/auth'



const LoginCard = () => {
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
        position: 'top',
        isClosable: true,
      })
    } catch (error) {
      toast({
        description: 'Ooops, invalid email or password. Please try again.',
        status: 'error',
        duration: 9000,
        position: 'top',
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
    <Stack
      id="login-card"
      spacing={4}
      p="5"
      backgroundColor="white"
      boxShadow="md"
      borderWidth="1px"
      borderRadius="40px"
      padding="45px"
    >
      <Center>
        <VStack>
        <Text id="welcome-text">Welcome to <span id="freelancebook-text">FREELANCEBOOK</span></Text>
        <Text id="login-text">Login</Text>
        </VStack>
      </Center>

      <FormControl className='form-control-border'>
        <FormLabel className='form-label-text'>Email</FormLabel>
        <InputGroup className='input-box'>
          <InputLeftElement color="#05AED2" pointerEvents="none">
            <FaEnvelope color="#05AED2" />
          </InputLeftElement>
          <Input type="email" onChange={handleEmail} />
        </InputGroup>
      </FormControl>

      <FormControl>
        <FormLabel className='form-label-text'>Password</FormLabel>
        <InputGroup className='input-box'>
          <InputLeftElement color="#05AED2" pointerEvents="none">
            <FaLock color="#05AED2" />
          </InputLeftElement>
          <Input type="password" onChange={handlePassword} />
        </InputGroup>
      </FormControl>
      <Stack
        direction={{ base: 'column', sm: 'row' }}
        align={'start'}
        justify={'space-between'}>
        <Checkbox className="remember-me-text" colorScheme='cyan' color="#05AED2">Remember me</Checkbox>
        <Link className="remember-me-text" color={'#05AED2'} _hover={{color: "#05AED2", textDecoration: 'underline'}}>Forgot password?</Link>
      </Stack>
      <Center>
        <Button
          id='login-button'
          colorScheme="cyan"
          color='white'
          width={'206px'}
          onClick={() => {
            onFinish()
          }}
          disabled={loading}
        >
          Login
        </Button>
      </Center>
      <Center>
        <Button
          id='login-google-button'
          onClick={signInWithGoogle}
          colorScheme="cyan"
          leftIcon={<FcGoogle />}
        >
          Login with Google
        </Button>
      </Center>
      <Center>
          <Text id='no-account-yet-text'>No Account Yet?</Text>
          <Link id="sign-up-text" color={'#05AED2'} _hover={{color: "#05AED2", textDecoration: 'underline'}}>Sign up</Link>
      </Center>
    </Stack>
  )
}

export default LoginCard