import WarningBg from './warn.png'
import AbnormalBg from './abnormal.png'
import styles from './index.module.scss'
import Pie from './pie'
import WarningTable from './table'
import { Typography } from '@mui/material';

export default function Warning({ className }: { className?: string }) {
    return (
        <div className={className}>
            <div className={styles.warning}>
                <img src={WarningBg} />
                {[{ label: '重大警告', value: 0 }, { label: '关键警告', value: 2 }, { label: '一般警告', value: 10 }].map((item) => {
                    return <div>
                        <strong>{item.value}</strong>
                        {item.label}
                    </div>
                })}
            </div>
            <div className={`${styles.warning} ${styles.light}`}>
                <img src={AbnormalBg} />
                <div><strong>1</strong>带宽利用率异常报警</div>
                <img src={AbnormalBg} />
                <div><strong>1</strong>光模块故障报警</div>
            </div>
            <div className={styles.pie}>
                <Typography sx={{ mt: 2 }}>当月告警类型分布</Typography>
                <Pie />
            </div>
            <div className={styles.warningTable}>
                <WarningTable />
            </div>
        </div>
    );
}
