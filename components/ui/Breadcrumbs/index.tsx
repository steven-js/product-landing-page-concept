import clsx from 'clsx'
import Link from 'next/link'
import Chevron from '../Icons/Chevron'
import styles from './Breadcrumbs.module.css'

type BreadcrumbsProps = {
  data: {
    id: number
    name: string
    link: string
  }[]
}

const Breadcrumbs = ({ data }: BreadcrumbsProps) => {
  return (
    <nav aria-label="breadcrumbs" className={clsx('C1', styles.container)}>
      <ol className={styles.list}>
        {data.map((breadcrumb, index) => (
          <li key={breadcrumb.id} className={styles.item}>
            {index < data.length - 1 ? (
              <Link
                href={breadcrumb.link}
                className={styles.link}
                aria-label={`Go to ${breadcrumb.name}`}
                tabIndex={0}
              >
                {breadcrumb.name}
              </Link>
            ) : (
              <span className={styles.current} aria-current="page">
                {breadcrumb.name}
              </span>
            )}
            {index < data.length - 1 && (
              <span className={styles.chevron}>
                <Chevron />
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default Breadcrumbs
