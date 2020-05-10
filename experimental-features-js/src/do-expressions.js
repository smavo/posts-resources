export function simpleDoWithReturning() {
  return do {
    'Hello world!'
  }
}

export function simpleDoNoReturning() {
  return do {
    const x = 'Hello world!'
  }
}

export function someFactory(factory) {
  return do {
    if (factory === 'web') {
      'Web Factory'
    }
    else {
      'Other Factory'
    }
  }
}
