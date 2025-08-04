'use client'

import { usePricing } from '@/app/context/PricingContext'
import RadioGroup from '@/components/ui/RadioGroup'
import SelectElement from '@/components/ui/SelectElement'
import {
  mockFrequencyOptions,
  mockQuantitySelect,
  mockSubscriptionOptions,
} from '@/data/mocks'
import styles from './SubscribeAndSave.module.css'

const SubscribeAndSave = () => {
  const { isSubscription, handleQuantityChange, handleSubscriptionChange } =
    usePricing()

  const handleSubscriptionSelect = (value: string) => {
    const isSubscription = value === 'subscription'
    handleSubscriptionChange(isSubscription)
  }

  return (
    <div className={styles.container}>
      <SelectElement
        label="Quantity"
        options={mockQuantitySelect}
        handleChange={handleQuantityChange}
      />

      <div className={styles.inner}>
        <p className="S1">Subscribe & Save 25%!</p>
        <div className={styles.options}>
          <RadioGroup
            name="subscription-options"
            options={mockSubscriptionOptions}
            selectedValue={isSubscription ? 'subscription' : 'one-off'}
            onChange={handleSubscriptionSelect}
          />
        </div>
        <SelectElement
          label="Delivery Frequency"
          options={mockFrequencyOptions}
          disabled={!isSubscription}
        />
      </div>
    </div>
  )
}

export default SubscribeAndSave
