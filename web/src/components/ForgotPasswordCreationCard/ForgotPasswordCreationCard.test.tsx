import { render } from '@redwoodjs/testing/web'

import ForgotPasswordCreationCard from './ForgotPasswordCreationCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ForgotPasswordCreationCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ForgotPasswordCreationCard />)
    }).not.toThrow()
  })
})
