import { render } from '@redwoodjs/testing/web'

import NewTestimonialsCard from './NewTestimonialsCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('NewTestimonialsCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NewTestimonialsCard />)
    }).not.toThrow()
  })
})
