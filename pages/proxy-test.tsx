import axios from "axios"
import { HttpsProxyAgent } from "https-proxy-agent"
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
  React.useEffect(() => {
    ;(async () => {
      const axiosDefaultConfig = {
        baseURL: "https://jsonplaceholder.typicode.com/posts",
        proxy: false,
        httpsAgent: new HttpsProxyAgent("http://142.93.165.82:8080"),
      }

      const axios = require("axios").create(axiosDefaultConfig)
      axios
        .get("42")
        .then(function (response: any) {
          console.log("Response with axios was ok: " + response.status)
        })
        .catch(function (error: any) {
          console.log(error)
        })
    })()
  }, [])
  console.log("data ssr proxy test:", data)
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
  const axiosDefaultConfig = {
    baseURL: "https://jsonplaceholder.typicode.com/posts",
    proxy: {
      protocol: "http",
      host: "142.93.165.82",
      port: 8080,
    },
    // httpsAgent: new HttpsProxyAgent("http://142.93.165.82:8080"),
  }

  const instance = require("axios").create(axiosDefaultConfig)

  try {
    const response = await instance.get("42")
    return {
      props: {
        data: response.data,
      },
    }
  } catch (error) {
    return {
      props: {
        data: `${error}`,
      },
    }
  }
}
