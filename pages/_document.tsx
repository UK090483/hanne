import Document, { Head, Html, Main, NextScript } from "next/document";

const isDevelopment = process.env.NODE_ENV === "development";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;800&display=swap"
            rel="stylesheet"
          />
          <script
            async
            defer
            data-website-id="63deb0c9-ab27-45a3-bf5b-865955244b62"
            src="https://umami-neon-pi.vercel.app/umami.js"
          ></script>
        </Head>

        <body
          className={`text-black break-words bg-white  ${
            isDevelopment ? "debug-screens" : ""
          } `}
        >
          <Main />
          <div id="app-portal" />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
