// import { useAuth } from '@redwoodjs/auth'
// import { Link, routes } from '@redwoodjs/router'
import { chakra } from '@chakra-ui/react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

import { MetaTags } from '@redwoodjs/web'

// eslint-disable-next-line import/order

import './styles.less'
import FAQ from 'src/components/FAQ/Faq'
import Footer from 'src/components/Footer/Footer'
import Hero from 'src/components/Hero/Hero'
import HowDoesItWork from 'src/components/HowDoesItWork/HowDoesItWork'
import Statistics from 'src/components/Statistics/Statistics'
import UserCard from 'src/components/UserCard/UserCard'
import { useProfiles } from 'src/hooks/profiles'
const HomePage = () => {
  const { data, isLoading } = useProfiles()
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <Hero />
      <Statistics />

      <chakra.h1
        textAlign={'center'}
        fontSize={'4xl'}
        py={10}
        fontWeight={'bold'}
      >
        Latest freelancers
      </chakra.h1>
      {data?.length && (
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 600: 2, 850: 3, 1100: 4 }}
        >
          <Masonry gutter={15} className="masonry">
            {data.slice(0, 4).map((user) => (
              <UserCard user={user} key={`user-${user.id}`} />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      )}
      <HowDoesItWork />
      <FAQ />
      <Footer />
    </>
  )
}

export default HomePage
