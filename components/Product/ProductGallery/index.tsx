'use client'

import clsx from 'clsx'
import Image from 'next/image'
import { useRef, useState } from 'react'
import { Swiper, SwiperClass, SwiperRef, SwiperSlide } from 'swiper/react'
import styles from './ProductGallery.module.css'

import 'swiper/css'

type ImageData = {
  id: number
  src: string
  alt: string
}

export type ProductGalleryProps = {
  data: ImageData[]
}

const ProductGallery = ({ data }: ProductGalleryProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const swiperRef = useRef<SwiperRef>(null)

  const handleSlideChange = (swiper: SwiperClass) => {
    setActiveIndex(swiper.realIndex)
  }

  const handleSelection = (index: number) => {
    setActiveIndex(index)
    swiperRef?.current?.swiper.slideTo(index) // Change the main swiper slide
  }

  return (
    <section className={styles.gallery}>
      {/* Thumbnails */}
      <div className={styles.thumbnails}>
        <div className={styles.inner}>
          {data.map((image, index) => (
            <div
              key={image.id}
              className={clsx(styles.thumbnail, {
                [styles.activeThumbnail]: activeIndex === index,
              })}
              onClick={() => handleSelection(index)}
              onFocus={() => handleSelection(index)}
              tabIndex={0}
            >
              <Image
                src={image.src}
                alt={image.alt || 'Thumbnail product image'}
                fill
                sizes="140px"
                fetchPriority="high"
                priority={true}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Main Image */}
      <div className={styles.mainImage}>
        <Swiper
          onSlideChange={handleSlideChange}
          initialSlide={activeIndex}
          className={styles.inner}
          ref={swiperRef}
        >
          {data.map((image) => (
            <SwiperSlide key={image.id}>
              <Image
                src={image.src}
                alt={image.alt || 'Product image'}
                fill
                sizes="(max-width: 700px) 95vw, (max-width: 1100px) 47vw, (max-width: 1775px) 51vw, (min-width: 1776px) 57vw"
                fetchPriority="high"
                priority={true}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
export default ProductGallery
