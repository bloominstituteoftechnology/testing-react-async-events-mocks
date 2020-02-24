import React from 'react'
import { Controls } from './Controls'
import * as rtl from '@testing-library/react'

describe('Controls', () => {
  afterEach(rtl.cleanup)

  it('displays the correct buttonS', () => {
    const actions = {
      exercise: Function.prototype,
      eatJunk: Function.prototype,
    }
    const wrapper = rtl.render(
      <Controls actions={actions} />
    )
    const button1 = wrapper.queryByText('exercise')
    const button2 = wrapper.queryByText('eatJunk')
    expect(button1).toBeInTheDocument()
    expect(button2).toBeInTheDocument()
  })

  it('clicking on the button calls the right action from props', () => {
    const spy = jest.fn()
    const actions = {
      exercise: spy
    }
    const wrapper = rtl.render(
      <Controls actions={actions} />
    )
    const button = wrapper.queryByText('exercise')
    rtl.fireEvent.click(button)
    expect(spy).toBeCalled()
  })
  // we could alto test that UI changes
  // if that were the case
})
