// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Private, Router, Route, Set } from '@redwoodjs/router'

import AuthLayout from './layouts/AuthLayout/AuthLayout'
import PublicLayout from './layouts/PublicLayout/PublicLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/login" page={LoginPage} name="login" />
      <Private unauthenticated="login">
        <Set wrap={AuthLayout}>
          <Route path="/setup" page={SetupPage} name="setup" />
          <Route path="/setup/schedule" page={SchedulesetupPage} name="schedulesetup" />
          <Route path="/profile" page={ProfilePage} name="profile" />
          <Route path="/schedule" page={SchedulePage} name="schedule" />
          <Route path="/testimonials" page={TestimonialsPage} name="testimonials" />
          <Route path="/projects" page={ProjectsPage} name="projects" />
        </Set>
      </Private>
      <Set wrap={PublicLayout}>
        <Route path="/{username}" page={ProfilePage} name="publicProfile" />
        <Route path="/" page={HomePage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
