import * as React from "react"
import { ParallaxDesktop } from "./parallax-desktop"
import { ParallaxMobile } from "./parallax-mobile"

export interface IParallaxProps {}

export function Parallax(props: IParallaxProps) {
  return (
    <>
      <ParallaxDesktop />
      <ParallaxMobile />
    </>
  )
}
