import OrderTable from './table'
import styles from './index.module.scss'
import Bg1 from './bg1.png'
import Bg2 from './bg2.png'
import Bg3 from './bg3.png'

export default function WorkOrder({ className }: { className?: string }) {
    return (
        <div className={className}>
            <div className={styles.content}>
                <div>
                    <p>故障派单 0</p>
                    <p>服务工单 0</p>
                </div>
                <div className={styles.animate}>
                    <img className={styles.bottom} src={Bg1} />
                    {Array.from({ length: 4 }).map((_, i) => <img className={`${styles.top} ${styles[`top-${i}`]}`} src={Bg2} />)}
                    <img className={styles.middle} src={Bg3} />
                </div>
                <div>
                    <p>当日故障工单 2</p>
                    <p>当日服务工单 2</p>
                </div>
            </div>
            <div className={styles.manhours}>
                <div>掉卡故障平均时长 1.2h</div>
                <div>ECC故障当月平均时长 1.4h</div>
            </div>
            <div className={styles.table}>
                <OrderTable />
            </div>
        </div>
    )
}