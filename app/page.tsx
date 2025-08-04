// Product Page mock

import ProductDetails from '@/components/Product/ProductDetails'
import ProductGallery from '@/components/Product/ProductGallery'
import SubscribeAndSave from '@/components/Product/SubscribeAndSave'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import Button from '@/components/ui/Button'
import TextBlock from '@/components/ui/TextBlock'
import {
  mockBreadcrumbs,
  mockGalleryData,
  mockProductDetails,
  mockProductText,
} from '@/data/mocks'
import clsx from 'clsx'
import { PricingProvider } from './context/PricingContext'
import styles from './page.module.css'

const { title, basePrice, basePoints, discountAmount } = mockProductDetails

export default function ProductPage() {
  return (
    <div className={clsx('grid-container', styles.productPage)}>
      <ProductGallery data={mockGalleryData} />
      <Breadcrumbs data={mockBreadcrumbs} />
      <section className={styles.productDetails}>
        <div className={styles.productDetailsInner}>
          <PricingProvider
            basePrice={basePrice}
            discountAmount={discountAmount}
          >
            <div className={styles.productHeader}>
              <ProductDetails title={title} basePoints={basePoints} />
            </div>
            <SubscribeAndSave />
          </PricingProvider>
          <Button text="Add to Basket" className="basket" />
          <TextBlock data={mockProductText} />
        </div>
      </section>
    </div>
  )
}
