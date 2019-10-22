/* global test, expect */
import { truncateStr } from '../index'

test('truncate string to max length of 20 simbols', () => {
  expect(
    truncateStr('Вот, что мне хотелось бы сказать на эту тему:', 20)
  ).toBe('Вот, что мне хотело…')
})
