import { Container } from '@chakra-ui/react'

import { MetaTags } from '@redwoodjs/web'

import ForgotPasswordCard from 'src/components/ForgotPasswordCard/ForgotPasswordCard'
import '@fontsource/inter'

const ForgotPasswordPage = () => {
  return (
    <Container>
      <MetaTags title="ForgotPassword" description="ForgotPassword page" />
      <ForgotPasswordCard />
    </Container>
  )
}

export default ForgotPasswordPage
