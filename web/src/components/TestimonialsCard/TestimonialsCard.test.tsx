import { render } from '@redwoodjs/testing/web'

import TestimonialsCard from './TestimonialsCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('TestimonialsCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TestimonialsCard />)
    }).not.toThrow()
  })
})
