import React from 'react'
import Display from './Display'
import * as rtl from '@testing-library/react'

describe('Display component', () => {
  // the virtual dom where we mount
  // componets would get bigger and bigger
  // every time we mount "Display"
  afterEach(rtl.cleanup)

  let wrapper;

  beforeEach(() => {
    wrapper = rtl.render(
      <Display type='Happiness' data={244} />
    )
  })

  it('displays the correct type', () => {
    // grab an element
    const theType = wrapper.queryByText(/Happiness/)
    // run assertions
    expect(theType).toBeInTheDocument()
    expect(theType).toBeVisible()
  })

  it('displays the correct data', () => {
    // recreate wrapper if wish to change the props
    const theData = wrapper.queryByText(/244/i)
    expect(theData).toBeInTheDocument()
    expect(theData).toBeVisible()
  })
})
