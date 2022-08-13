import { MetaTags } from '@redwoodjs/web'

import ForgotPasswordCreationCard from '../../components/ForgotPasswordCreationCard/ForgotPasswordCreationCard'

const ForgotPasswordCreationPage = () => {
  return (
    <>
      <MetaTags
        title="ForgotPasswordCreation"
        description="ForgotPasswordCreation page"
      />
      <ForgotPasswordCreationCard />
    </>
  )
}

export default ForgotPasswordCreationPage
