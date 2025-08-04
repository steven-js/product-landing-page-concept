import { calculatePrice } from './calculate-price'

const mockPriceTestData = {
  quantity: 2,
  basePrice: 100,
  isSubscription: true,
  discountAmount: 0.25,
}

describe('calculatePrice test', () => {
  it('should calculate the correct price with subscription discount applied', () => {
    const testData = { ...mockPriceTestData }
    const result = calculatePrice(testData)

    expect(result).toBe(150) // (100 * 2) - 25% = 150
  })

  it('should calculate the correct price without subscription discount applied', () => {
    const testData = { ...mockPriceTestData, isSubscription: false }
    const result = calculatePrice(testData)

    expect(result).toBe(200) // (100 * 2) = 200
  })

  it('should handle zero quantity correctly', () => {
    const testData = { ...mockPriceTestData, quantity: 0 }
    const result = calculatePrice(testData)

    expect(result).toBe(0) // 0 * 100 = 0
  })
})
