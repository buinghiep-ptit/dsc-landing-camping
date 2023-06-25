import Head from "next/head"
import { Helmet } from "react-helmet"

const defaultMeta = {
  title: "DSC Camping",
  site_name: "campdi",
  description: "Nền tảng cung cấp thông tin đầy đủ nhất về Dã ngoại",
  url: "https://dsc-landing-camping.vercel.app/",
  keywords: "campdi, camping",
  image:
    "https://cdn.campdi.vn/camping/Feed/campdi_1684747414092_804_compressed.jpeg",
  type: "website",
  robots: "follow, index",
}

type SeoProps = {
  date?: string
  templateTitle?: string
} & Partial<typeof defaultMeta>

export default function Seo(props: SeoProps) {
  const meta = {
    ...defaultMeta,
    ...props,
  }
  meta["title"] = props.templateTitle
    ? `${props.templateTitle} | ${meta.site_name}`
    : meta.title

  return (
    <Helmet>
      {/* Search Engine Optimization Meta Tags */}
      <title>{meta.title}</title>
      <meta name="robots" content={meta.robots} />
      <meta name="description" content={meta.description} />
      <meta name="keywords" content={meta.keywords} />
      <meta property="og:url" content={meta.url} />
      <link rel="canonical" href={meta.url} />
      {/* Open Graph */}
      <meta property="og:type" content={meta.type} />
      <meta property="og:url" content={meta.url} />
      <meta property="og:site_name" content={meta.site_name} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:image" content={meta.image} />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={meta.url} />
      <meta name="twitter:site" content="@th_clarence" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />

      {meta.date && (
        <>
          <meta property="article:published_time" content={meta.date} />
          <meta
            name="publish_date"
            property="og:publish_date"
            content={meta.date}
          />
          <meta name="author" property="article:author" content="dsc dev" />
        </>
      )}

      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
    </Helmet>
  )
}
