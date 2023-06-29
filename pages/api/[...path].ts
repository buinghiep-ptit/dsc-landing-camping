import type { NextApiRequest, NextApiResponse } from "next"
import httpProxy from "http-proxy"

type Data = {
  name: string
}

export const config = {
  api: {
    bodyParser: false,
  },
}

const proxy = httpProxy.createProxyServer()

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  console.log("caller proxy:")

  return new Promise((resolve, reject) => {
    const option = {
      target: "https://cahn-api.campdi.vn/cahnfc",
      changeOrigin: true,
      selfHandleResponse: false,
    }
    proxy.web(req, res, option)

    proxy.once("proxyRes", () => {
      console.log("proxyRes")
      resolve(true)
    })
  })
}
