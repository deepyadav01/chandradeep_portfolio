// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Microsoft Clarity Script */}
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `(function(c,l,a,r,i,t,y) {
                          c[a] = c[a] || function() {
                            (c[a].q = c[a].q || []).push(arguments);
                          };
                          t = l.createElement("script");
                          t.async = 1;
                          t.src = r + "?v=" + ~~(new Date() / 60000);
                          y = l.getElementsByTagName("script")[0];
                          y.parentNode.insertBefore(t, y);
                        })(window, document, "clarity", "https://www.clarity.ms/tag/YOUR_TRACKING_ID");`
            }}
          ></script>
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
