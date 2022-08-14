import {
  FormControl,
  Input,
  FormLabel,
  Heading,
  Button,
  Text,
  Stack,
  Center,
  Box,
} from '@chakra-ui/react'

import { navigate, routes } from '@redwoodjs/router'

const ForgotPasswordCard = ({ handleResetPassword }) => {
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
      <Heading fontSize="3xl">Forgot your password?</Heading>
      <FormControl isRequired alignContent={'center'}>
        <Text mt={5} mb={5}>
          No problemo! Just enter the email address that you signed up with to
          reset it.
        </Text>
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input
          id="email"
          placeholder="name@domain.com"
          type="email"
          width="100%"
          required
        />

        <Text mt={5} mb={5} color="gray.500">
          Can't remember? Email us at support@freelancebook.me
        </Text>

        <Button
          id="resetPasswordBtn"
          colorScheme="green"
          width={'100%'}
          marginTop={'10px'}
          onClick={handleResetPassword}
        >
          Send reset instructions
        </Button>
        <Button
          variant="link"
          onClick={() => {
            navigate(routes.auth())
          }}
          width={'100%'}
        >
          Back
        </Button>
      </FormControl>
    </Stack>
  )
}

export default ForgotPasswordCard
