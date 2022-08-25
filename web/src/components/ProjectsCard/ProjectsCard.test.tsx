import { render } from '@redwoodjs/testing/web'

import ProjectsCard from './ProjectsCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ProjectsCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProjectsCard />)
    }).not.toThrow()
  })
})
