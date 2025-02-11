/** change width by transform scale */
import styles from './index.module.scss'
import ImgMain from './main.png'
import ImgMain1 from './main-1.svg'
import ImgFlash from './flash.svg'
import ImgFlashItem from './flash-item.svg'
import ImgMove from './move.svg'

import { FC } from 'react'

const VTitle: FC<{ content: string }> = ({ content }) => {
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        {content}
      </div>
      <img className={styles.bg} src={ImgMain} />
      <img className={styles.bg1} src={ImgMain1} />
      <img className={styles.flash} src={ImgFlash} />
      <img className={styles.move} src={ImgMove} />
      <div className={styles.flashGroup}>
        {new Array(5).fill('').map((_, i) => <img key={i} className={styles[`flashGroup-${i}`]} src={ImgFlashItem} />)}
      </div>
    </div>
  )
}

export default VTitle
