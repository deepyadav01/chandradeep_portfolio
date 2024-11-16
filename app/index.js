// pages/index.js
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        {/* Microsoft Clarity Script */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "ozjgblsi0g");`
          }}
        ></script>
      </Head>
      <h1>Welcome to the Home Page!</h1>
    </>
  );
}
