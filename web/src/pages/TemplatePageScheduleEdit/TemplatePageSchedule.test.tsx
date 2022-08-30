import { render } from '@redwoodjs/testing/web'

import TemplatePageScheduleEdit from './TemplatePageScheduleEdit'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('TemplatePageSchedule', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TemplatePageScheduleEdit />)
    }).not.toThrow()
  })
})
