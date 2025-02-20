import { useEffect, useState } from "react";
import styles from "./circle.module.scss";

const CircleLayout = ({ numItems }: { numItems: number }) => {
    const radius = 10; // 半径，决定圆的大小
    const angleStep = 360 / numItems; // 每个子元素的角度步长
    const [items, setItems] = useState(Array.from({ length: numItems }).map(() => ({ x: 0, y: 0, id: 0 })))

    const boxItems = [
        { x: 0, y: -60, zIndex: 7 },
        { x: 0, y: 100 },
        { x: 0, y: 10, zIndex: 8 },
        { x: -50, y: 50, zIndex: 7 },
        { x: -70, y: -20 },
        { x: 50, y: 50, zIndex: 7 },
        { x: 70, y: -20 },
    ]

    useEffect(() => {
        setItems(items.map((_, index) => {
            const angle = index * angleStep;
            const x = radius * Math.cos((angle * Math.PI) / 180); // 计算X坐标
            const y = radius * Math.sin((angle * Math.PI) / 180); // 计算Y坐标

            return { x, y, id: Math.floor(Math.random() * 100) };
        }))
    }, [numItems, angleStep])

    return (
        <div className={styles.container}>
            <div className={styles.element}>
                {boxItems.map((item, index) => (
                    <div
                        key={index}
                        className={styles.box}
                        style={{
                            transform: `translate(${item.x}%, ${item.y}%)`,
                            zIndex: item.zIndex
                        }}
                    />
                ))}
                <div className={styles.box} style={{ width: '6%', right: '20%', top: '50%' }} />
                <div className={styles.box} style={{ width: '6%', left: '20%', top: '50%' }} />
                <div className={styles.box} style={{ width: '6%', bottom: '-7vw', right: '12vw' }} />
                <div className={styles.box} style={{ width: '8%', bottom: '-8vw', right: '15vw' }} />
            </div>
            {items.map((item, index) => (
                <div
                    key={index}
                    className={styles.surrounding}
                    style={{
                        transform: `translate(${item.x}vw, ${item.y}vw)`,
                    }}
                >
                    <strong>99</strong>
                    <div className={styles.name}>А5.5.3.{item.id}</div>
                </div>
            ))}
        </div>
    );
};

export default CircleLayout
