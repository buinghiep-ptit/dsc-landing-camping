import { EmptyLayout } from "@/layout/empty"
import { AppPropsWithLayout } from "@/models/common"
import { createEmotionCache, theme } from "@/utils"
import { CacheProvider, EmotionCache } from "@emotion/react"
import { Box } from "@mui/material"
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

  const fbChatContent = `
            var chatbox = document.getElementById("fb-customer-chat");
            chatbox.setAttribute("page_id", "119952837764885");
            chatbox.setAttribute("attribution", "biz_inbox");

            window.fbAsyncInit = function () {
              FB.init({
                xfbml: true,
                version: "v16.0",
              });
            };

            (function (d, s, id) {
              var js,
                fjs = d.getElementsByTagName(s)[0];
              if (d.getElementById(id)) return;
              js = d.createElement(s);
              js.id = id;
              js.src = "https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js";
              fjs.parentNode.insertBefore(js, fjs);
            })(document, "script", "facebook-jssdk");
          `
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
      <Box id="fb-root"></Box>
      <Box id="fb-customer-chat" className="fb-customerchat"></Box>
      {/* <script dangerouslySetInnerHTML={{ __html: fbChatContent }} /> */}
    </>
  )
}

export default App
