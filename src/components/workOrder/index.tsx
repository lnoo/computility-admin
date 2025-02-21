import OrderTable from './table'
import styles from './index.module.scss'
import Bg1 from './bg1.png'
import Bg2 from './bg2.png'
import Bg3 from './bg3.png'
import TextDigital from '../visual-ui/textDigital'

export default function WorkOrder({ className }: { className?: string }) {
    return (
        <div className={className}>
            <div className={styles.content}>
                <div>
                    <p><small>故障派单</small> 0</p>
                    <p><small>服务工单</small> 0</p>
                </div>
                <div className={styles.animate}>
                    <img className={styles.bottom} src={Bg1} />
                    {Array.from({ length: 4 }).map((_, i) => <img key={i} className={`${styles.top} ${styles[`top-${i}`]}`} src={Bg2} />)}
                    <img className={styles.middle} src={Bg3} />
                </div>
                <div>
                    <p><small>当日故障工单</small> 2</p>
                    <p><small>当日服务工单</small> 2</p>
                </div>
            </div>
            <div className={styles.manhours}>
                <div>掉卡故障平均时长 <TextDigital color='#9ac342'>1.2</TextDigital> h</div>
                <div>ECC故障当月平均时长 <TextDigital color='#9ac342'>1.4</TextDigital> h</div>
            </div>
            <div className={styles.table}>
                <OrderTable />
            </div>
        </div>
    )
}