import {
  FormControl,
  Input,
  FormLabel,
  Heading,
  Button,
  Text,
  Container,
  Stack,
  Center,
} from '@chakra-ui/react'

const ResetPasswordCard = ({ handleChangePassword, setNewPassword }) => {
  return (
    <Stack spacing={4} p="5" backgroundColor="white">
      <Center>
        <Heading fontSize="3xl">Create New Password</Heading>
      </Center>
      <Container p={8} shadow="lg" borderWidth="1px" borderRadius="md">
        <FormControl isRequired alignContent={'center'}>
          <Text mt={5} mb={5}>
            Your new password must be different from previous used passwords.
          </Text>
          <FormLabel htmlFor="email">New Password</FormLabel>
          <Input
            placeholder=""
            type="password"
            width="100%"
            required
            onChange={(e) => {
              setNewPassword(e.target.value)
            }}
          />

          <Button
            id="resetPasswordBtn"
            colorScheme="green"
            width={'100%'}
            marginTop={'10px'}
            onClick={handleChangePassword}
          >
            Change Password
          </Button>
        </FormControl>
      </Container>
    </Stack>
  )
}

export default ResetPasswordCard
