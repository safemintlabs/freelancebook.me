// import { useAuth } from '@redwoodjs/auth'
// import { Link, routes } from '@redwoodjs/router'
import { Empty, Skeleton } from 'antd'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

import { MetaTags } from '@redwoodjs/web'

// eslint-disable-next-line import/order
import UserCard from 'src/components/UserCard/UserCard'
import './styles.less'
import { useProfiles } from 'src/hooks/profiles'

const LandingPage = () => {
  return (
      <div>
        <h1> JR and JL Crash Landing on U</h1>
      </div>
  )
}

export default LandingPage
