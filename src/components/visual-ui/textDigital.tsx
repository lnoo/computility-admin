import { FC, ReactNode } from "react"

interface Props {
    children?: ReactNode;
    fontSize?: string
    color?: string
}
const TextDigital: FC<Props> = ({ children, fontSize = '2rem', color }) => {
    return (
        <strong style={{ fontSize, fontFamily: 'digital', color }}>{children}</strong>
    )
}

export default TextDigital
