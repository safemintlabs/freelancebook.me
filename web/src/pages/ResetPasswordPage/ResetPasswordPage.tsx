import React, { useState } from 'react'

import { Container, Flex, useToast } from '@chakra-ui/react'

import { useParams, navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import ResetPasswordCard from 'src/components/ResetPasswordCard/ResetPasswordCard'
import { supabase } from 'src/supabaseClient'

import '@fontsource/inter'

const ForgotPasswordPage = () => {
  const toast = useToast()
  const { access_token } = useParams()
  const [newPassword, setNewPassword] = useState()

  const handleChangePassword = async () => {
    const { error, data } = await supabase.auth.api.updateUser(access_token, {
      password: newPassword,
    })

    if (error === null) {
      toast({
        title: 'Reset Password Successful',
        description: 'Check your email for the reset password link!',
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
    } else {
      toast({
        title: 'Reset Password Failed',
        description: 'Kindly check the email you give to us if correct',
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    }

    setTimeout(() => {
      navigate(routes.login())
    }, 6000)
  }

  return (
    <Container>
      <MetaTags title="ForgotPassword" description="ForgotPassword page" />
      <Flex
        flexDirection="column"
        width="100wh"
        height="100vh"
        justifyContent="center"
        alignItems="center"
      >
        <ResetPasswordCard
          handleChangePassword={handleChangePassword}
          setNewPassword={setNewPassword}
        />
      </Flex>
    </Container>
  )
}

export default ForgotPasswordPage
