import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import Account from 'src/components/Account'
import Auth from 'src/components/Auth'

const HomePage = () => {
  const { isAuthenticated } = useAuth()

  return (
    <>
      <MetaTags title="Home" description="Home page" />

      {!isAuthenticated ? <Auth /> : <Account />}

      <header>
        <h1>Redwood Blog</h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.profile()}>Profile</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>Home</main>
    </>
  )
}

export default HomePage
