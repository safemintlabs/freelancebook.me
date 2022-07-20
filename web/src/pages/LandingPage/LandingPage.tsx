// import { useAuth } from '@redwoodjs/auth'
// import { Link, routes } from '@redwoodjs/router'
import { Empty, Layout, Skeleton } from 'antd'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

import { MetaTags } from '@redwoodjs/web'


// eslint-disable-next-line import/order
import './styles.less'

import LandingHeader from './LandingHeader'

const LandingPage = () => {
  return (
      <>
        <Layout>
          <LandingHeader />
        </Layout>
      </>
  )
}

export default LandingPage
