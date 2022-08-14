import '@fontsource/inter'
import React, { useState } from 'react'

import { useToast, Image, Flex, Box } from '@chakra-ui/react'

import { useAuth } from '@redwoodjs/auth'
import { navigate, routes } from '@redwoodjs/router'

import AuthCard from 'src/components/AuthCard/AuthCard'

import './styles.less'

const AuthPage: React.FC = () => {
  const { logIn, signUp } = useAuth()
  const toast = useToast()
  const [loading, setLoading] = useState<boolean>(false)

  const onFinish = async (
    email: string,
    password: string,
    isLogin: boolean
  ) => {
    try {
      setLoading(true)
      const { error } = isLogin
        ? await logIn({ email, password })
        : await signUp({ email, password })
      if (error) throw error
      toast({
        title: isLogin ? 'Login Successful' : 'Signup Successful',
        description: isLogin ? '' : 'Check your email for the login link!',
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
      if (isLogin) navigate(routes.home())
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
          alt="Freelancebook"
        />
      </Box>
      <AuthCard
        loading={loading}
        signInWithGoogle={signInWithGoogle}
        onFinish={onFinish}
      />
    </Flex>
  )
}

export default AuthPage
