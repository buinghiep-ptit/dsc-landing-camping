import * as React from "react"
import { Helmet } from "react-helmet"

export interface IHelmetSeoProps {}

export default function HelmetSeo(props: IHelmetSeoProps) {
  return (
    <div>
      <Helmet>
        <title>{"Helmet Seo Page Title"}</title>
        <meta
          name="description"
          content={
            "Helmet Page, Nền tảng cung cấp thông tin đầy đủ nhất về Dã ngoại"
          }
        />
        <meta property="og:title" content={"Helmet Seo Page Title"} />
        <meta
          property="og:description"
          content={
            "Helmet Page, Nền tảng cung cấp thông tin đầy đủ nhất về Dã ngoại"
          }
        />
        <meta
          property="og:image"
          itemProp="image"
          content={
            "https://cdn.campdi.vn/camping/Feed/campdi_1684747414092_804_compressed.jpeg"
          }
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={location.href} />
        <meta property="twitter:title" content={"Helmet Seo Page Title"} />
        <meta
          property="twitter:description"
          content={
            "Helmet Page, Nền tảng cung cấp thông tin đầy đủ nhất về Dã ngoại"
          }
        />
        <meta
          property="twitter:image"
          itemProp="image"
          content={
            "https://cdn.campdi.vn/camping/Feed/campdi_1684747414092_804_compressed.jpeg"
          }
        />
        <meta property="twitter:card" content="summary_large_image" />
      </Helmet>
      <h1>HelmetSeo</h1>
    </div>
  )
}
