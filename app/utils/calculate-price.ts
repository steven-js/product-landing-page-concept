/**
 * The calculatePrice function calculates the final price based on quantity, base price, subscription
 * status, and discount amount, rounding to 2 decimal places.
 * @param {number} quantity - The `quantity` parameter represents the number of items being purchased.
 * @param {number} basePrice - The `basePrice` parameter represents the price of a single unit of the
 * product before any discounts are applied.
 * @param {boolean} isSubscription - The `isSubscription` parameter is a boolean value that indicates
 * whether the purchase is a subscription or not. If it is `true`, a discount based on the
 * `discountAmount` will be applied to the total price.
 * @param {number} discountAmount - The `discountAmount` parameter represents the percentage of
 * discount applied to the original price if the purchase is a subscription. For example, if
 * `discountAmount` is 0.1, it means a 10% discount will be applied to the original price for
 * subscription purchases.
 * @returns The function `calculatePrice` returns the final calculated price after applying any
 * discounts based on the input parameters provided. The final price is rounded to 2 decimal places
 * before being returned.
 */
export const calculatePrice = ({
  quantity,
  basePrice,
  isSubscription,
  discountAmount,
}: {
  quantity: number
  basePrice: number
  isSubscription: boolean
  discountAmount: number
}) => {
  const originalPrice = quantity * basePrice

  const discount = isSubscription ? originalPrice * discountAmount : 0
  const discountedPrice = originalPrice - discount
  const roundedPrice = Math.floor(discountedPrice * 1000) / 1000

  return Math.round(roundedPrice * 100) / 100 // Round to 2 decimal places
}
