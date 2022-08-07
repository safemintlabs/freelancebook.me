import { render } from '@redwoodjs/testing/web'

import TestimonialsPage from './TestimonialsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('TestimonialsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TestimonialsPage />)
    }).not.toThrow()
  })
})
