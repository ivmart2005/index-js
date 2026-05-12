import { FC, JSX, memo, ReactNode } from "react"
import styles from "./Text.module.scss"
import clsx from "clsx"

interface IProps {
  children: ReactNode
  size?: "xs" | "s" | "m" | "l" | "xl"
  weight?: "300" | "400" | "500" | "600" | "700"
  color?:
    | "primary"
    | "secondary"
    | "white"
    | "light"
    | "gray"
    | "dim"
    | "success"
    | "danger"
    | "red"
  as?: "p" | "span" | "div" | "h1" | "h2" | "h3"
  nowrap?: boolean
  uppercase?: boolean
  className?: string
}

export const Text: FC<IProps> = memo(
  ({
    children,
    size = "m",
    weight = "400",
    color = "primary",
    as: Tag = "p",
    nowrap = false,
    uppercase = false,
    className = ""
  }): JSX.Element => {
    return (
      <Tag
        className={clsx(
          styles.text,
          styles[`text--${size}`],
          styles[`text--${weight}`],
          styles[`text--${color}`],
          className
        )}
        style={{
          whiteSpace: nowrap ? "nowrap" : "initial",
          textTransform: uppercase ? "uppercase" : "initial"
        }}
      >
        {children}
      </Tag>
    )
  }
)
