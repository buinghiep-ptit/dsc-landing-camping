import { ILayoutProps } from "@/models"
import * as React from "react"
import { LandingLayoutDesktop } from "./landing"
import { LandingMobileLayout } from "./landing-mobile"

export interface LandingLayoutProps {}

export function LandingLayout(props: ILayoutProps) {
  return (
    <>
      <LandingLayoutDesktop />
      <LandingMobileLayout />
    </>
  )
}
