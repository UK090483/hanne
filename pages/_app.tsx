import "../styles/globals.css";

import { Layout } from "@components/Layout/Layout";
import { NextComponentType, NextPageContext } from "next";
import Cookie from "@lib/Cookie/Cookie";
import PreviewIndicator from "@lib/SanityPageBuilder/lib/preview/PreviewIndicator";
import Seo from "@lib/SeoService/Seo";
import { PageResult } from "./[[...slug]]";
import { PageProps } from "@lib/SanityPageBuilder/types";
import usePreviewSubscription from "@lib/SanityPageBuilder/lib/preview/previewSubscription";
import { AppContextProvider } from "@components/AppContext";
import { AnalyticsContextProvider } from "@lib/Analytics/AnalyticsContext";
import Script from "next/script";
import AppConfig from "app.config.json";

interface AppPropsWithStaticProps {
  pageProps: PageProps<PageResult>;
  Component: NextComponentType<NextPageContext, any, PageProps<PageResult>>;
}

function App({ Component, pageProps: _pageProps }: AppPropsWithStaticProps) {
  const { data: _data, query, preview } = _pageProps;

  const { data, error, loading } = usePreviewSubscription<PageResult | null>(
    query,
    {
      initialData: _data,
      enabled: preview,
    }
  );

  const aData = { ..._data, ...data };
  const pageProps = { ..._pageProps, data: aData } as PageProps<PageResult>;

  return (
    <>
      <Script
        id="Cookiebot"
        src="https://consent.cookiebot.com/uc.js"
        data-cbid="c4685f12-00e4-4d22-ac24-c9081bc06ec7"
        data-blockingmode="auto"
        type="text/javascript"
      ></Script>
      <Script
        id="CookieDeclaration"
        src="https://consent.cookiebot.com/c4685f12-00e4-4d22-ac24-c9081bc06ec7/cd.js"
        type="text/javascript"
        async
      ></Script>
      <AnalyticsContextProvider id="G-6W1TGK0RC1">
        <AppContextProvider data={pageProps.data} hostName={AppConfig.hostname}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <PreviewIndicator show={!!preview} />
          <Cookie />
          <Seo />
        </AppContextProvider>
      </AnalyticsContextProvider>
    </>
  );
}

export default App;
