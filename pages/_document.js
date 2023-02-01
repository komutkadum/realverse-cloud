import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        ></link>
        <script
          src="https://kit.fontawesome.com/cd76c07470.js"
          crossOrigin="anonymous"
          async
        ></script>

        <script
          src="https://unpkg.com/flowbite@1.5.3/dist/flowbite.js"
          async
        ></script>
      </Head>
      <body className="white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
