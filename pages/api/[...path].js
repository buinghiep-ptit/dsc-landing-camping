/* eslint-disable import/no-anonymous-default-export */
import httpProxy from "http-proxy"

const API_URL = "https://cahn-api.campdi.vn/store" // The actual URL of your API

const proxy = httpProxy.createProxyServer()

// Make sure that we don't parse JSON bodies on this route:
export const config = {
  api: {
    bodyParser: false,
  },
}

export default (req, res) => {
  return new Promise((resolve, reject) => {
    proxy.web(req, res, { target: API_URL, changeOrigin: true }, err => {
      if (err) {
        return reject(err)
      }
      resolve()
    })
  })
}
