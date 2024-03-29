import { EmptyLayout } from "@/layout/empty"
import { AppPropsWithLayout } from "@/models/common"
import { createEmotionCache, theme } from "@/utils"
import { CacheProvider, EmotionCache } from "@emotion/react"
import CssBaseline from "@mui/material/CssBaseline"
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles"
import { useEffect, useState } from "react"
import "../styles/globals.css"

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface AppProps extends AppPropsWithLayout {
  emotionCache?: EmotionCache
}

function App({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: AppProps) {
  const Layout = Component.Layout ?? EmptyLayout

  const [isShowChatBox, setIsShowChatBox] = useState(true)

  useEffect(() => {
    var standalone = (window.navigator as any).standalone,
      userAgent = window.navigator.userAgent.toLowerCase(),
      safari = /safari/.test(userAgent),
      ios = /iphone|ipod|ipad/.test(userAgent)

    if (ios) {
      if (!standalone && safari) {
        console.log("browser")

        // document.getElementById("where-am-i").textContent = "browser"
      } else if (standalone && !safari) {
        // document.getElementById("where-am-i").textContent = "standalone"
      } else if (!standalone && !safari) {
        // document.getElementById("where-am-i").textContent = "uiwebview"
        setIsShowChatBox(false)
      }
    } else {
      console.log("not iOS")
      // document.getElementById("where-am-i").textContent = "not iOS"
      if (!standalone && safari) {
        console.log("browser")

        // document.getElementById("where-am-i").textContent = "browser"
      } else if (standalone && !safari) {
        // document.getElementById("where-am-i").textContent = "standalone"
      } else if (!standalone && !safari) {
        // document.getElementById("where-am-i").textContent = "uiwebview"
        setIsShowChatBox(false)
      }
    }
  }, [])

  return (
    <>
      <CacheProvider value={emotionCache}>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <CssBaseline />

            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        </StyledEngineProvider>
      </CacheProvider>
      {isShowChatBox && <div id="fb-root"></div>}
      <div id="fb-customer-chat" className="fb-customerchat"></div>

      {/* <script dangerouslySetInnerHTML={{ __html: fbChatContent }} /> */}
    </>
  )
}

export default App
