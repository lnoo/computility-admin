/** auto width */
import styles from './index.module.scss'
import ImgMain from './main.png'
import ImgDot from './dot.svg'
import ImgDotMove from './dot-move.svg'
import ImgFlashItem from './flash-item.svg'

import { FC } from 'react'

const VTitle: FC<{ content: string }> = ({ content }) => {
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        {content}
      </div>
      <img className={styles.bg} src={ImgMain} />
      <img className={styles.dot} src={ImgDot} />
      <img className={styles.dot1} src={ImgDot} />
      <img className={styles.rightDot} src={ImgDot} />
      <img className={styles.rightDot1} src={ImgDot} />
      <div className={styles.flashGroup}>
        {new Array(6).fill('').map((_, i) => <img key={i} src={ImgFlashItem} />)}
      </div>
      <div className={styles.flashGroup1}>
        {new Array(6).fill('').map((_, i) => <img key={i} src={ImgFlashItem} />)}
      </div>
      <div className={styles.dotMove}>
        {new Array(5).fill('').map((_, i) => <img key={i} src={ImgDotMove} />)}
      </div>
    </div>
  )
}

export default VTitle
