import { render } from '@redwoodjs/testing/web'

import Services from './Services'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Services', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Services />)
    }).not.toThrow()
  })
})
