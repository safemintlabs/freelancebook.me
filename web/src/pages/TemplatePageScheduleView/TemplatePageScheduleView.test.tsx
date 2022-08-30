import { render } from '@redwoodjs/testing/web'

import TemplatePageScheduleView from './TemplatePageScheduleView'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('TemplatePageScheduleView', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TemplatePageScheduleView />)
    }).not.toThrow()
  })
})
