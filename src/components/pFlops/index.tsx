import styles from './index.module.scss'
import animateRenderer from './animate'
import { useEffect, useRef, useState } from 'react';
import NumberFlow, { continuous } from '@number-flow/react'
import NumCircle from './circle'
import NumBg from './num.png'
import { Brightness1 } from '@mui/icons-material';
import { Button, Tooltip } from '@mui/material';

export default function Env({ className }: { className?: string }) {
    const animateRef = useRef<HTMLDivElement>(null)
    const [flopsNum, setNum] = useState(7800)

    useEffect(() => {
        const timer = setInterval(() => {
            setNum(Math.random() * 800 + 7000)
        }, 3e3);
        return () => {
            clearInterval(timer)
        }
    }, [])

    useEffect(() => {
        if (!animateRef.current) return

        const dom = animateRenderer.domElement
        animateRef.current.prepend(dom)
        animateRenderer.setSize(animateRef.current.clientWidth, animateRef.current.clientHeight);
        setTimeout(() => {
            animateRef.current!.style.opacity = '1'
        }, 5e2);
    }, [])
    return (
        <div className={className}>
            <div className={styles.pFlopsNum} ref={animateRef} style={{ opacity: 0 }}>
                <strong>
                    <NumberFlow value={flopsNum} format={{ notation: "compact", maximumFractionDigits: 0 }} plugins={[continuous]} />
                    <small>PFlops</small>
                </strong>
            </div>
            <NumCircle className={styles.main} numItems={8} />
            <div className={styles.desc}>
                {
                    [
                        { label: '集群数', value: 10, online: '100%' },
                        { label: '节点数', value: 20, online: '100%' },
                        { label: '交换机数', value: 110, online: '100%' },
                    ].map(item => {
                        return <div key={item.label}>
                            <img src={NumBg} />
                            <div>
                                <div>
                                    <strong style={{ fontSize: '2.5rem' }}>{item.value}</strong>
                                    <Tooltip title="在线率" placement='top'>
                                        <Button sx={{ fontSize: '12px' }}>
                                            <Brightness1 color='success' sx={{ fontSize: '10px' }} /> {item.online}
                                        </Button>
                                    </Tooltip>
                                </div>
                                {item.label}
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    );
}
