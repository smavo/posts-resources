/* eslint-env jest */
import React from 'react'
import { render } from '@testing-library/react'
import Counter from '../../src/counter'

describe('Test Suite Counter Component - Component to display a counter', () => {
  it('Should display 0, by default', () => {
    const { getByText } = render(<Counter />)
    const result = getByText('0')
    expect(result).toBeDefined()
  })
})
