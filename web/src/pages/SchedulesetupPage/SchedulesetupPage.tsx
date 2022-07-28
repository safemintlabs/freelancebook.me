import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const SchedulesetupPage = () => {
  return (
    <>
      <MetaTags title="Schedulesetup" description="Schedulesetup page" />

      <h1>SchedulesetupPage</h1>
      <p>
        Find me in <code>./web/src/pages/SchedulesetupPage/SchedulesetupPage.tsx</code>
      </p>
      <p>
        My default route is named <code>schedulesetup</code>, link to me with `
        <Link to={routes.schedulesetup()}>Schedulesetup</Link>`
      </p>
    </>
  )
}

export default SchedulesetupPage
