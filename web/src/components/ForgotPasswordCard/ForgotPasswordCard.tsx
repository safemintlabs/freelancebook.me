import {
  FormControl,
  Input,
  FormLabel,
  Heading,
  Button,
  Text,
  Container,
  Link,
} from '@chakra-ui/react'

import { routes } from '@redwoodjs/router'

const ForgotPasswordCard = () => {
  return (
    <>
      <Heading textAlign="center" p={5}>
        Forgot your password?
      </Heading>

      <Container p={10} shadow="lg" borderWidth="1px" borderRadius="3xl">
        <FormControl isRequired alignContent={'center'}>
          <Text fontSize="xs" mt={5} mb={5}>
            <b>
              Enter your email address that you used to register. We'll send you
              an email link to reset your password
            </b>
          </Text>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            id="email"
            placeholder="juandelacruz@gmail.com"
            type="email"
            width="100%"
            required
          />

          <Text fontSize="xs" mt={5} mb={5} color="gray.500">
            Can't remember your email?
            <Link fontSize="xs" m={4} color="blue.300">
              Email support@freelancebook.com
            </Link>
          </Text>

          <Button
            id="resetPasswordBtn"
            colorScheme="twitter"
            width={'100%'}
            marginTop={'10px'}
          >
            Reset Password
          </Button>
          <Container centerContent mt={5} mb={5}>
            <Link
              href={routes.login()}
              color="blue.300"
              justifyContent={'center'}
            >
              Back
            </Link>
          </Container>
        </FormControl>
      </Container>
    </>
  )
}

export default ForgotPasswordCard
