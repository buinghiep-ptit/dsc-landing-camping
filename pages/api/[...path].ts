import httpProxy from "http-proxy"
import type { NextApiRequest, NextApiResponse } from "next"

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
  console.log("caller proxy")

  return new Promise((resolve, reject) => {
    req.headers.cookie = ""
    const option = {
      target: "https://js-post-api.herokuapp.com",
      changeOrigin: true,
      selfHandleResponse: false,
    }
    proxy.web(req, res, option)

    proxy.once("proxyRes", () => {
      console.log("proxyRes")
      resolve(true)
    })
  })

  // res.status(200).json({ name: 'Path Math all here' });
}
