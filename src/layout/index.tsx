import AdBanner from "@/components/adBanner"
import Seo from "@/components/common/seo"
import { ILayoutProps } from "@/models"
import * as React from "react"
import { LandingLayoutDesktop } from "./landing"
import { LandingMobileLayout } from "./landing-mobile"

export interface LandingLayoutProps {}

export function LandingLayout(props: ILayoutProps) {
  return (
    <>
      <Seo
        title="Campdi | Trang chủ"
        description="Trang thông tin về các điểm dã ngoại, booking"
        url="https://dsc-landing-camping.vercel.app/"
        image="https://cdn.campdi.vn/camping/Feed/campdi_1684747414092_804_compressed.jpeg"
      />
      <AdBanner
        data-ad-slot="9308195259"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
      <LandingLayoutDesktop />
      <LandingMobileLayout />
    </>
  )
}
