// import { useAuth } from '@redwoodjs/auth'
// import { Link, routes } from '@redwoodjs/router'
import { Empty, Layout, Skeleton } from 'antd'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

import { MetaTags } from '@redwoodjs/web'


// eslint-disable-next-line import/order
import './styles.less'

import LandingHeader from './LandingHeader'
import StartNow from './components/StartNow/StartNow'
import Stats from './components/Stats/Stats'
import FAQ from './components/FAQ/FAQ'
import LandingFooter from './LandingFooter'
import FeaturedProfiles from './components/FeaturedProfiles/FeaturedProfiles'

const LandingPage = () => {
  return (
      <>
        <Layout>
          <LandingHeader />
          <StartNow />
          <Stats />
          {/* <HowItWorks /> */}
          <FeaturedProfiles />
          <FAQ />
          <LandingFooter />
        </Layout>
      </>
  )
}

export default LandingPage
