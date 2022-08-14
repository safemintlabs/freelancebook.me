import { render } from '@redwoodjs/testing/web'

import HowDoesItWork from './HowDoesItWork'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('HowDoesItWork', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HowDoesItWork />)
    }).not.toThrow()
  })
})
