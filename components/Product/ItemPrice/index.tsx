'use client'

import { usePricing } from '@/app/context/PricingContext'
import clsx from 'clsx'
import styles from './ItemPrice.module.css'

const ItemPrice = ({ basePoints }: { basePoints: number }) => {
  const { quantity, isSubscription, price, originalPrice } = usePricing()

  return (
    <div className={styles.container}>
      <h3 className={clsx(styles.price, isSubscription && styles.subscription)}>
        £{price}
      </h3>
      {isSubscription && (
        <span className={clsx('P1', styles.previousPrice)}>
          £{originalPrice}
        </span>
      )}
      <span className={clsx('S2', styles.points)}>
        +{quantity * basePoints} Points
      </span>
    </div>
  )
}

export default ItemPrice
