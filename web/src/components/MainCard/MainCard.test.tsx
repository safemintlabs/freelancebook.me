import { render } from '@redwoodjs/testing/web'

import MainCard from './MainCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('MainCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MainCard />)
    }).not.toThrow()
  })
})
