import { FC, JSX, memo, ReactNode } from "react"
import styles from "./Title.module.scss"
import clsx from "clsx"

interface IProps {
  children: ReactNode
  as?: 1 | 2 | 3
  color?: "white" | "red"
  className?: string
}

export const Title: FC<IProps> = memo(
  ({ children, as = 3, color, className }): JSX.Element => {
    const Tag = `h${as}` as const
    return (
      <Tag
        className={clsx(
          styles.title,
          color && styles[`title_${color}`],
          className
        )}
      >
        {children}
      </Tag>
    )
  }
)
