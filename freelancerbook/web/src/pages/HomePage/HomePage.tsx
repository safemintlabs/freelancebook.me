// import { useAuth } from '@redwoodjs/auth'
// import { Link, routes } from '@redwoodjs/router'
import { Empty, Skeleton } from 'antd'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

import { MetaTags } from '@redwoodjs/web'

// eslint-disable-next-line import/order
import UserCard from 'src/components/UserCard/UserCard'
import './styles.less'
import { useProfiles } from 'src/hooks/useProfiles'

const HomePage = () => {
  const { data, isLoading } = useProfiles()
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      {data?.length ? (
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 600: 2, 850: 3, 1100: 4 }}
        >
          <Masonry gutter={15} className="masonry">
            {data.map((user) => (
              <UserCard user={user} key={`user-${user.id}`} />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      ) : isLoading ? (
        <Skeleton avatar paragraph={{ rows: 4 }} />
      ) : (
        <Empty />
      )}
    </>
  )
}

export default HomePage
