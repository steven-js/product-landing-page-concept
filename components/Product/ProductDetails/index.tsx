import ItemPrice from '../ItemPrice'
import styles from './ProductDetails.module.css'

type ProductDetailsProps = {
  title: string
  basePoints: number
}

const ProductDetails = ({ title, basePoints }: ProductDetailsProps) => {
  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      <ItemPrice basePoints={basePoints} />
    </div>
  )
}

export default ProductDetails
