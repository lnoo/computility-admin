import styles from './index.module.scss'
import circle from './circle.png'
import circle1 from './circle1.png'
import circle2 from './circle2.png'
import circle3 from './circle3.png'
import circle4 from './circle4.png'
import { useTheme } from '@mui/material'

export default function Env({ className }: { className?: string }) {
    const theme = useTheme()

    return <div className={`${className} ${styles.wrapper}`}>

        <div className={styles.circle}>
            <img src={circle} />
            <img src={circle1} />
            <img src={circle2} />
            <img src={circle3} />
            <img src={circle4} />
        </div>
        <div className={styles.data}>
            <div style={{ color: theme.palette.error.dark }}><span>拥塞节点&ensp;</span><strong>0</strong></div>
            <div style={{ color: theme.palette.warning.dark }}><span>链路抖动&ensp;</span><strong>3</strong></div>
        </div>
    </div>
}