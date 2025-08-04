import clsx from 'clsx'
import styles from './TextBlock.module.css'

type MockProductText = {
  id: number
  type: string
  text?: string
  list?: { id: number; text: string }[]
}

type TextBlockProps = {
  data: MockProductText[]
}

const TextBlock = ({ data }: TextBlockProps) => {
  return (
    <div className={clsx('P2', styles.productDescription)}>
      {data.map((item) => {
        if (item.type === 'p' && item.text) {
          return <p key={item.id}>{item.text}</p>
        }
        if (item.type === 'ul' && item.list) {
          return (
            <ul key={item.id}>
              {item.list.map((li) => (
                <li key={li.id}>{li.text}</li>
              ))}
            </ul>
          )
        }
        return null
      })}
    </div>
  )
}

export default TextBlock
