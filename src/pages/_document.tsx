import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head/>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet"/>
      <body>
        <Main />
        <NextScript />
        <script async src="../node_modules/flowbite/dist/flowbite.min.js"></script>
      </body>
    </Html>
  )
}
