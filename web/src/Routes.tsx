// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Private, Router, Route, Set } from '@redwoodjs/router'

import AuthLayout from 'src/layouts/AuthLayout/AuthLayout'
import PublicLayout from 'src/layouts/PublicLayout/PublicLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Route path="/auth" page={AuthPage} name="auth" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />

      <Private unauthenticated="login">
        <Set wrap={AuthLayout}>
          <Route path="/setup" page={SetupPage} name="setup" />
          <Route path="/profile" page={ProfilePage} name="profile" />
          <Route path="/schedule" page={SchedulePage} name="schedule" />
          <Route path="/schedule/{action}" page={SchedulesetupPage} name="scheduleEdit" />
          <Route path="/testimonials" page={TestimonialsPage} name="testimonials" />
          <Route path="/projects" page={ProjectsPage} name="projects" />
        </Set>
      </Private>
      <Set wrap={PublicLayout}>
        <Route path="/{username}" page={ProfilePage} name="publicProfile" />
        <Route path="/{username}/schedule" page={SchedulePage} name="publicSchedule" />
        <Route path="/{username}/schedule/{action}" page={SchedulePage} name="publicAppointment" />
        <Route path="/{username}/testimonials" page={TestimonialsPage} name="publicTestimonials" />
        <Route path="/{username}/projects" page={ProjectsPage} name="publicProjects" />
        <Route path="/" page={HomePage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
