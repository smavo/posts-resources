import React from 'react'
import { render } from 'react-dom'
import App from './App'

export default function bootstrap (containerElement, src, filter) {
  render(<App src={src} filter={filter} />, containerElement)
}
