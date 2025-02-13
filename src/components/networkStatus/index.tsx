import styles from './index.module.scss'
import circle from './circle.png'
import circle1 from './circle1.png'
import circle2 from './circle2.png'
import circle3 from './circle3.png'
import circle4 from './circle4.png'

export default function Env({ className }: { className?: string }) {

    return <div className={`${className} ${styles.wrapper}`}>

        <div className={styles.circle}>
            <img src={circle} />
            <img src={circle1} />
            <img src={circle2} />
            <img src={circle3} />
            <img src={circle4} />
        </div>
        <div className={styles.data}>
            <div className={styles.congestion}>
                拥塞节点数123
            </div>
            <div className={styles.flapping}>
                链路抖动数123
            </div>
        </div>
    </div>
}