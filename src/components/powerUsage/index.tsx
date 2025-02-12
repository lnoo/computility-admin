import styles from './index.module.scss'
import circular from './circular.mp4'

export default function Env({ className }: { className?: string }) {
    return (
        <div className={`${className} ${styles.wrapper}`}>
            <div className={styles.container}>
                <span>当年能耗</span>
                <strong>15288MWh</strong>
                <video autoPlay loop muted src={circular} playsInline x-webkit-airplay="allow" x5-playsinline webkit-playsinline controlsList="nodownload" ></video>
            </div>
            <div className={styles.container}>
                <span>当日能耗</span>
                <strong>109MWh</strong>
                <video autoPlay loop muted src={circular} playsInline x-webkit-airplay="allow" x5-playsinline webkit-playsinline controlsList="nodownload" ></video>
            </div>
            <div className={styles.container}>
                <span>上月 PUE</span>
                <strong>1.5</strong>
                <video autoPlay loop muted src={circular} playsInline x-webkit-airplay="allow" x5-playsinline webkit-playsinline controlsList="nodownload" ></video>
            </div>
        </div>
    );
}
