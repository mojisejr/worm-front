import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta
            name="description"
            content="วอร์มมู NFT BULE CHIP การลงทุนด้านเหมือง อาทิ เหมืองแร่ เหมืองหิน เหมืองเหล็ก และเหมืองทองคํา โดยทางเราจะเลือกมา แล้วให้ HOLDERS ของเรา เป็นคนช่วย Votes หรือ ออกความ เห็น ในการลงทุน และนําผลกําไรท่ีได้มาแบ่งให้กับ HOLDERS ทุกท่าน"
          />
          <link rel="shortcut icon" href="/images/coin.png" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Prompt:wght@300;500;600;800&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
