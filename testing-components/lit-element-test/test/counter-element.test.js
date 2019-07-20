/* global describe, it */
import { fixture, expect } from '@open-wc/testing'
import '../src/counter-element'

describe('Counter Suite', () => {
  it('default value must be 0', async () => {
    const el = await fixture('<counter-element></counter-element>')
    expect(el.count).to.be.equal(0)
  })
})
