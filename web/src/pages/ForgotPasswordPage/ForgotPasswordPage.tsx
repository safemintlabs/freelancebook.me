import { Box, Flex, useToast, Image } from '@chakra-ui/react'

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
        description:
          'An email containing a recovery link has been sent to the email address you provided.',
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
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      justifyContent="center"
      alignItems="center"
      backgroundColor="gray.200"
    >
      <Box marginBottom={5}>
        <Image
          borderRadius="full"
          boxSize="60px"
          src="/images/logo.svg"
          alt="Freelancebook"
        />
      </Box>
      <ForgotPasswordCard handleResetPassword={handleResetPassword} />
    </Flex>
  )
}

export default ForgotPasswordPage
