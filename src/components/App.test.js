import React from 'react'
import App from './App'
import * as rtl from '@testing-library/react'

describe('App', () => {
  let wrapper;

  afterEach(rtl.cleanup)
  beforeEach(() => {
    wrapper = rtl.render(<App />)
  })
  // afterAll()
  // beforeAll()

  it.skip('displays the correct types', () => {
    // it renders Health text
    // it renders Morale text
    // QUESTIONABLE TEST ?
  })

  it.skip('displays the correct data', () => {
    // it renders 100 for Health
    // it renders 100 for Health
    // QUESTIONABLE TEST ?
  })

  it.skip('displays the correct button', () => {
    // it render specifically
    // exercise, eatJunkFood and catchUpWithFriends
    // QUESTIONABLE TEST ?
  })

  it('clicking eat junk food changes health and morale', () => {
    // setup and initial sanity checks
    let stats = wrapper.queryAllByText('100')
    let [health, morale] = stats;
    expect(stats).toHaveLength(2)
    expect(health).toBeInTheDocument()
    expect(morale).toBeInTheDocument()

    // queryByEtc -> returns null if thing not there
    // getByEtc   -> fails the test straight up if not there
    const button = wrapper.getByText(/eatjunkfood/i)
  
    // make sure 90 & 101 not there yet
  
    rtl.fireEvent.click(button)

    // make sure the 100s not there anymore

    // THE REAL TEST STARTS NOW
    // DID MORALE AND HEALTH CHANGE CORRECTLY???????
    
    // 1 grab a text of 101 (for morale)
    // 2 grab a text of 90 (for health)
    // assert they're there and visible!!!
    health = wrapper.getByText('90')
    morale = wrapper.getByText('101')

    expect(health).toBeInTheDocument()
    expect(health).toBeVisible()

    expect(morale).toBeInTheDocument()
    expect(morale).toBeVisible()
  })

  it('displays the correct name starting with the API data', async () => {
    // getByText will crash the test
    // queryByText will have the "amin" varible be null

    // to wait for Amin, use await keyword and the "findBy"
    const amin = await wrapper.findByText('Amin Hasan')
    expect(amin).toBeInTheDocument()
    expect(amin).toBeVisible()
  })
})
