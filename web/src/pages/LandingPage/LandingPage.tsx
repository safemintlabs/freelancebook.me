import { Layout } from 'antd'

import FAQ from './components/FAQ/FAQ'
import FeaturedProfiles from './components/FeaturedProfiles/FeaturedProfiles'
import HowItWorks from './components/HowItWorks/HowItWorks'
import StartNow from './components/StartNow/StartNow'
import Stats from './components/Stats/Stats'
import LandingFooter from './LandingFooter'
import LandingHeader from './LandingHeader'

import './styles.less'

const LandingPage = () => {
  return (
    <Layout className="worksans-font">
      <LandingHeader />
      <StartNow />
      <Stats />
      <FeaturedProfiles />
      <HowItWorks />
      <FAQ />
      <LandingFooter />
    </Layout>
  )
}

export default LandingPage
