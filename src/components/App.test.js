import React from 'react'
import App from './App'
import * as rtl from '@testing-library/react'

describe('App', () => {

  afterEach(rtl.cleanup)

  it('displays the correct types', () => {
    const wrapper = rtl.render(<App />)
    const typeHealth = wrapper.queryByText(/Health/)
    const typeMorale = wrapper.queryByText(/Morale/)
    expect(typeHealth).toBeVisible()
    expect(typeMorale).toBeVisible()
  })

  it('displays the correct data', () => {
    const wrapper = rtl.render(<App />)
    const data = wrapper.queryAllByText(/^100$/)
    expect(data).toHaveLength(2)
  })

  it('displays the correct button', () => {
    const wrapper = rtl.render(<App />)
    const button = wrapper.queryByText(/exercise/)
    expect(button).toBeInTheDocument()
    expect(button).toBeVisible()
  })
})
