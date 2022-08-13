import { Container, Flex } from '@chakra-ui/react'

import { MetaTags } from '@redwoodjs/web'

import ForgotPasswordCard from 'src/components/ForgotPasswordCard/ForgotPasswordCard'
import '@fontsource/inter'

const ForgotPasswordPage = () => {
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
        <ForgotPasswordCard />
      </Flex>
    </Container>
  )
}

export default ForgotPasswordPage
