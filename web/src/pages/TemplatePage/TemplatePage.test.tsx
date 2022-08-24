import { render } from '@redwoodjs/testing/web'

import TemplatePage from './TemplatePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('TemplatePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TemplatePage />)
    }).not.toThrow()
  })
})
