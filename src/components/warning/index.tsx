import WarningBg from './warn.png'
import AbnormalBg from './abnormal.png'
import styles from './index.module.scss'
import Pie from './pie'
import WarningTable from './table'
import { Typography } from '@mui/material';
import { Fragment } from 'react/jsx-runtime'
import TextDigital from '../visual-ui/textDigital'

export default function Warning({ className }: { className?: string }) {
    return (
        <div className={className}>
            <div className={styles.warning}>
                <img src={WarningBg} />
                {[
                    { label: '重大警告', value: 0, color: '#F44141' },
                    { label: '关键警告', value: 2, color: '#FF843D' },
                    { label: '一般警告', value: 10, color: '#EFE16E' }
                ].map((item) =>
                    <div key={item.label} style={{ color: item.color }}>
                        <TextDigital>{item.value}</TextDigital>{item.label}
                    </div>
                )}
            </div>
            <div className={`${styles.warning} ${styles.light}`}>
                {[
                    { label: '带宽利用率异常报警', value: 1 },
                    { label: '光模块故障报警', value: 1 }
                ].map(item =>
                    <Fragment key={item.label}>
                        <img src={AbnormalBg} />
                        <div style={{ color: '#65C1FF' }}>
                            <TextDigital>{item.value}</TextDigital>{item.label}
                        </div>
                    </Fragment>
                )}
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
