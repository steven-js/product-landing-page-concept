'use client'

import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useMemo,
  useState,
} from 'react'
import { calculatePrice } from '../utils/calculate-price'

type PricingContextProps = {
  price: string
  originalPrice: string
  quantity: number
  isSubscription: boolean
  discountAmount: number
  handleQuantityChange: (quantity: number | string) => void
  handleSubscriptionChange: (isSubscription: boolean) => void
}

const PricingContext = createContext<PricingContextProps | undefined>(undefined)

export const PricingProvider: FC<{
  children: ReactNode
  basePrice: number
  discountAmount: number
}> = ({ children, basePrice, discountAmount }) => {
  const [quantity, setQuantity] = useState<number | string>(1)
  const [isSubscription, setIsSubscription] = useState(true) // Default to "Subscription"

  // Treat quantity as a number to calculate originalPrice
  const quantityNumber =
    typeof quantity === 'string' ? parseInt(quantity, 10) : quantity

  const originalPrice = quantityNumber * basePrice

  const price = useMemo(
    () =>
      calculatePrice({
        quantity: quantityNumber,
        basePrice,
        isSubscription,
        discountAmount,
      }),
    [quantityNumber, basePrice, isSubscription, discountAmount],
  )

  const handleQuantityChange = (newQuantity: number | string) =>
    setQuantity(newQuantity)

  const handleSubscriptionChange = (newIsSubscription: boolean) =>
    setIsSubscription(newIsSubscription)

  return (
    <PricingContext.Provider
      value={{
        price: price.toFixed(2),
        originalPrice: originalPrice.toFixed(2),
        quantity: quantityNumber,
        isSubscription,
        discountAmount,
        handleQuantityChange,
        handleSubscriptionChange,
      }}
    >
      {children}
    </PricingContext.Provider>
  )
}

export const usePricing = () => {
  const context = useContext(PricingContext)
  if (!context) {
    throw new Error('usePricing must be used within a PricingProvider')
  }
  return context
}
