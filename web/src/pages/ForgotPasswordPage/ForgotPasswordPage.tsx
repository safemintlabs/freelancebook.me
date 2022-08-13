import { Container, Flex, useToast } from '@chakra-ui/react'

import { MetaTags } from '@redwoodjs/web'

import ForgotPasswordCard from 'src/components/ForgotPasswordCard/ForgotPasswordCard'
import { supabase } from 'src/supabaseClient'
import '@fontsource/inter'

const ForgotPasswordPage = () => {
  const toast = useToast()

  const handleResetPassword = async () => {
    const { data, error } = await supabase.auth.api.resetPasswordForEmail(
      'lowhpgoblin@proton.me'
    )

    if (error === null) {
      toast({
        title: 'Reset Password Successful',
        description: 'Check your email for the reset password link!',
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
    } else {
      toast({
        title: 'Reset Password Failed',
        description: 'Kindly check the email you give to us if correct',
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    }
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
        <ForgotPasswordCard handleResetPassword={handleResetPassword} />
      </Flex>
    </Container>
  )
}

export default ForgotPasswordPage
