import styles from './index.module.scss'
import animateRenderer from './animate'
import { useEffect, useRef, useState } from 'react';
import NumberFlow, { continuous } from '@number-flow/react'
import NumCircle from './circle'

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
                </strong>
            </div>
            <NumCircle numItems={8} />
        </div>
    );
}
