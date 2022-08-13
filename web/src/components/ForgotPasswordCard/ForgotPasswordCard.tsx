import {
  FormControl,
  Input,
  FormLabel,
  Heading,
  Button,
  Text,
  Container,
  Link,
  Stack,
  Center,
} from '@chakra-ui/react'

import { supabase } from 'src/supabaseClient'

const ForgotPasswordCard = () => {
  const handleResetPassword = async () => {
    console.log('----> handleResetPassword')
    const { data, error } = await supabase.auth.api.resetPasswordForEmail(
      'lowhpgoblin@xx.me'
    )

    console.log('data: ', data)
    console.log('error: ', error)
  }

  return (
    <Stack spacing={4} p="5" backgroundColor="white">
      <Center>
        <Heading fontSize="3xl">Forgot your password?</Heading>
      </Center>
      <Container p={8} shadow="lg" borderWidth="1px" borderRadius="md">
        <FormControl isRequired alignContent={'center'}>
          <Text mt={5} mb={5}>
            Enter your email address that you used to register. We'll send you
            an email link to reset your password
          </Text>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            id="email"
            placeholder="juandelacruz@gmail.com"
            type="email"
            width="100%"
            required
          />

          <Text mt={5} mb={5} color="gray.500">
            Can't remember? Email us at support@freelancebook.com
          </Text>

          <Button
            id="resetPasswordBtn"
            colorScheme="green"
            width={'100%'}
            marginTop={'10px'}
            onClick={handleResetPassword}
          >
            Reset Password
          </Button>
          <Container centerContent mt={5} mb={5}>
            <Link color="green.300" justifyContent={'center'}>
              Back
            </Link>
          </Container>
        </FormControl>
      </Container>
    </Stack>
  )
}

export default ForgotPasswordCard
