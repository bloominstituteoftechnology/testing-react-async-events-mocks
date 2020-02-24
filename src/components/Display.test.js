import React from 'react'
import Display from './Display'
import * as rtl from '@testing-library/react'

describe('Display', () => {

  afterEach(rtl.cleanup)

  it('displays the correct type', () => {
    const wrapper = rtl.render(<Display type='lady' data={166} />)
    const type = wrapper.queryByText(/lady/)
    expect(type).toBeInTheDocument()
    expect(type).toBeVisible()
  })

  it('displays the correct data', () => {
    const wrapper = rtl.render(<Display type='lady' data={166} />)
    const type = wrapper.queryByText(/^166$/)
    expect(type).toBeInTheDocument()
    expect(type).toBeVisible()
  })
})