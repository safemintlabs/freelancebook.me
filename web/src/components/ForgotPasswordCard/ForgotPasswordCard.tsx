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
    <Stack spacing={4} p="5" backgroundColor="white">
      <Center>
        <Heading fontSize="3xl">Forgot your password?</Heading>
      </Center>
      <Box p={8} shadow="lg" borderWidth="1px" borderRadius="md">
        <FormControl isRequired alignContent={'center'}>
          <Text mt={5} mb={5}>
            Enter your email address that you used to register. We'll send you
            an email link to reset your password
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
            Reset Password
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
      </Box>
    </Stack>
  )
}

export default ForgotPasswordCard
