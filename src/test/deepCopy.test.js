/* global test, expect */
import { deepCopy } from '../index'

const source = {
  a: 1,
  b: 2,
  c: {
    d: {
      e: 3,
      f: 4
    },
    g: 5
  }
}

const dest = deepCopy(source)

test('compare inner objects in source and copyed objects not to be equals', () => {
  expect(dest.c.d === source.c.d).toBe(false)
})
