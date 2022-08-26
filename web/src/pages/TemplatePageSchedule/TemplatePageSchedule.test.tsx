import { render } from '@redwoodjs/testing/web'

import TemplatePageSchedule from './TemplatePageSchedule'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('TemplatePageSchedule', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TemplatePageSchedule />)
    }).not.toThrow()
  })
})
