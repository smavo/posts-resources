/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import Counter from '../../src/counter'

describe('Test Suite Counter Component - Component to display a counter', () => {
  it('Should display 0, by default', () => {
    const wrapperElement = shallow(<Counter />)
    const result = wrapperElement.text()
    expect(result).toEqual('0')
  })
})
