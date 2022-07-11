// import { useAuth } from '@redwoodjs/auth'
// import { Link, routes } from '@redwoodjs/router'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

import { MetaTags } from '@redwoodjs/web'

import UserCard from 'src/components/UserCard/UserCard'

// import Account from 'src/components/Account'
// import Auth from 'src/components/Auth'

import './styles.css'

const HomePage = () => {
  // const { isAuthenticated } = useAuth()

  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 600: 2, 850: 3, 1100: 4 }}
      >
        <Masonry gutter={15} className="masonry">
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
        </Masonry>
      </ResponsiveMasonry>
    </>
  )
}

export default HomePage
