import { EmptyLayout } from "@/layout/empty"
import { AppPropsWithLayout } from "@/models/common"
import { createEmotionCache, theme } from "@/utils"
import { CacheProvider, EmotionCache } from "@emotion/react"
import CssBaseline from "@mui/material/CssBaseline"
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles"
import { useState } from "react"
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
    </>
  )
}

export default App
