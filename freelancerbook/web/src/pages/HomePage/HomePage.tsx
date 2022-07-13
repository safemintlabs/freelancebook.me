// import { useAuth } from '@redwoodjs/auth'
// import { Link, routes } from '@redwoodjs/router'
import React, { useEffect, useState } from 'react'

import { Empty } from 'antd'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

import { MetaTags } from '@redwoodjs/web'

// eslint-disable-next-line import/order
import UserCard from 'src/components/UserCard/UserCard'
import './styles.less'

import { supabase } from 'src/supabaseClient'

const HomePage = () => {
  const [data, setData] = useState([])
  // const { isAuthentiasync cated } = useAuth()
  const getProfiles = async (): Promise<void> => {
    const { data, error, status } = await supabase.from('profiles').select('*')
    console.log({ data, error, status })
    if (status === 200) {
      setData(data)
    }
  }
  useEffect(() => {
    getProfiles()
  }, [])

  return (
    <>
      <MetaTags title="Home" description="Home page" />
      {data.length ? (
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 600: 2, 850: 3, 1100: 4 }}
        >
          <Masonry gutter={15} className="masonry">
            {data.map((user) => (
              <UserCard user={user} key={`user-${user.id}`} />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      ) : (
        <Empty />
      )}
    </>
  )
}

export default HomePage
