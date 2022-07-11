import { render } from '@redwoodjs/testing/web'

import AppMenu from './AppMenu'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AppMenu', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AppMenu />)
    }).not.toThrow()
  })
})
