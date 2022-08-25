import { render } from '@redwoodjs/testing/web'

import TestSetupPage from './TestSetupPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('TestSetupPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TestSetupPage />)
    }).not.toThrow()
  })
})
