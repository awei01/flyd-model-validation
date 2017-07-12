import init from '@/Field/init'

describe('Field/init()', () => {
  it(`called with [importer, value]
      calls importer() with [value] and returns [imported]
      returns stream(imported]`,
    () => {
      const importer = jasmine.createSpy('importer').and.returnValue('imported')

      const stream = init(importer, 'foo')

      expect(importer).toHaveBeenCalledWith('foo')
      expect(stream()).toBe('imported')
    })
})
