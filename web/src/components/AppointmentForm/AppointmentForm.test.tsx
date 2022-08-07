import { render } from '@redwoodjs/testing/web'

import AppointmentForm from './AppointmentForm'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AppointmentForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AppointmentForm />)
    }).not.toThrow()
  })
})
