import styles from './index.module.scss'
import animateRenderer from './animate'
import { useEffect, useRef } from 'react';

export default function Env({ className }: { className?: string }) {
    const animateRef = useRef<HTMLDivElement>(null)
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
                    7800
                </strong>
            </div>
        </div>
    );
}
