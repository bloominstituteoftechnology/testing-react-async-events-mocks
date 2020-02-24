import React from 'react'
import Display from './Display'
import * as rtl from '@testing-library/react'

describe('Display component', () => {
  // the virtual dom where we mount
  // componets would get bigger and bigger
  // every time we mount "Display"
  afterEach(rtl.cleanup)

  it('displays the correct type', () => {
    // setup! Mount the thing
    const wrapper = rtl.render(
      <Display type='Happiness' data={199} />
    )
    // grab an element
    const theType = wrapper.queryByText(/Happiness/)
    // run assertions
    expect(theType).toBeInTheDocument()
    expect(theType).toBeVisible()
  })

  it('displays the correct data', () => {
    const wrapper = rtl.render(
      <Display type="thing" data={244}/>
    )
    const theData = wrapper.queryByText(/244/i)
    expect(theData).toBeInTheDocument()
    expect(theData).toBeVisible()
  })
})
