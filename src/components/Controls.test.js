import React from 'react'
import { Controls } from './Controls'
import * as rtl from '@testing-library/react'

describe('Controls', () => {

  afterEach(rtl.cleanup)

  it('displays the correct button', () => {
    const action = jest.fn()
    const wrapper = rtl.render(
      <Controls
        actions={{ spamMe: action }}
      />
    )
    const button = wrapper.queryByText(/spamMe/)
    expect(button).toBeInTheDocument()
    expect(button).toBeVisible()
  })

  it('clicking on the button calls the right action from props', () => {
    const action = jest.fn()
    const wrapper = rtl.render(
      <Controls
        actions={{ spamMe: action }}
      />
    )
    const button = wrapper.queryByText(/spamMe/)
    rtl.fireEvent.click(button)
    expect(action).toBeCalled()
  })
})
