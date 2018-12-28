import counter from './index'

describe('reducers', () => {
  describe('counter', () => {
    it('powinien obsługiwać stan początkowy', () => {
      expect(counter(undefined, {})).toBe(0)
    })

    it('powinna obsługiwać akcję ZWIEKSZ', () => {
      expect(counter(1, { type: 'ZWIEKSZ' })).toBe(2)
    })

    it('powinna obsługiwać akcję ZMNIEJSZ', () => {
      expect(counter(1, { type: 'ZMNIEJSZ' })).toBe(0)
    })

    it('powinno ignorować akcje "unknown"', () => {
      expect(counter(1, { type: 'unknown' })).toBe(1)
    })
  })
})