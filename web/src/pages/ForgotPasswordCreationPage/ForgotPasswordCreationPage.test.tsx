import { render } from '@redwoodjs/testing/web'

import ForgotPasswordCreationPage from './ForgotPasswordCreationPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ForgotPasswordCreationPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ForgotPasswordCreationPage />)
    }).not.toThrow()
  })
})
