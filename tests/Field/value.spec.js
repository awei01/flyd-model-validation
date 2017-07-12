import value from '@/Field/value'
import { stream } from 'flyd'

describe('Field/value()', () => {
  it(`called with [init] where init is stream(null)
      returns [result] where result(null)`,
    () => {
      const init = stream(null)

      const result = value(init)

      expect(result()).toBe(null)
    })
  it(`called with [init]
      returns [result] that updates when init updates
      `,
    () => {
      const init = stream(null)

      const end = value(init)
      init('foo')

      expect(end()).toBe('foo')
    })
  it(`called with [init]
      returns [result] when updated does not update init
      `,
    () => {
      const init = stream(null)

      const end = value(init)
      end('foo')

      expect(end()).toBe('foo')
      expect(init()).toBe(null)
    })
})
