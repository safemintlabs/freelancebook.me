import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
} from '@chakra-ui/react'

const ForgotPasswordCreationCard = () => {
  return (
    <>
      <Heading textAlign="center" p={5}>
        Create New Password
      </Heading>

      <Container p={10} shadow="lg" borderWidth="1px" borderRadius="3xl">
        <FormControl isRequired alignContent={'center'}>
          <Text fontSize="xs" mt={5} mb={5}>
            <b>
              Your new password must be different from previous used passwords.
            </b>
          </Text>
          <FormLabel htmlFor="password">
            Enter your new password(6 or more characters)
          </FormLabel>
          <Input id="password" type="password" width="100%" required />
          <Button
            id="resetPasswordBtn"
            colorScheme="twitter"
            width={'100%'}
            marginTop={20}
          >
            Reset Password
          </Button>
        </FormControl>
      </Container>
    </>
  )
}

export default ForgotPasswordCreationCard
