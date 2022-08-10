import { MetaTags } from '@redwoodjs/web'

import ForgotPasswordCard from '../../components/ForgotPasswordCard/ForgotPasswordCard'

const ForgotPasswordPage = () => {
  return (
    <>
      <MetaTags title="ForgotPassword" description="ForgotPassword page" />
      <ForgotPasswordCard />
    </>
  )
}

export default ForgotPasswordPage
