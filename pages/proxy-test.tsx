import axios from "axios"
import * as React from "react"
import { Helmet } from "react-helmet"

export interface IHelmetSeoProps {
  title: string
  metaDescription: string
  data: any
}

export default function ProxyTestPage({
  title = "Portfolio - your name",
  metaDescription = "defaul tdescription",
  data,
}: IHelmetSeoProps) {
  console.log("data proxy test:", data)
  return (
    <Helmet>
      <title>{"title"}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="description" key="description" content={"metaDescription"} />
      <meta name="title" key="title" content={title} />
      <meta property="og:title" key="og:title" content={"title"} />
      <meta property="og:locale" key="og:locale" content="en_US" />
      <meta charSet="utf-8" />
      <meta property="og:type" key="og:type" content="website" />
      <meta
        property="og:description"
        key="og:description"
        content={"metaDescription"}
      />
      <meta
        property="og:image"
        key="og:image"
        content={`https://img.youtube.com/vi/DyenfhZB7IA/sddefault.jpg`}
      />
    </Helmet>
  )
}

export async function getServerSideProps() {
  try {
    const response = await axios.get(
      "https://dev09.campdi.vn/api/students?_page=1",
    )

    const data = response.data

    // Xử lý dữ liệu trả về từ endpoint proxy

    return {
      props: {
        data,
      },
    }
  } catch (error) {
    console.error("Error:", error)
    return {
      props: {
        error: "Failed to fetch data from proxy endpoint",
      },
    }
  }
}
