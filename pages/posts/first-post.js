import Link from "next/link";
import Script from "next/script";

export default function FirstPost() {
  return (
    <div>
      <Script src="/docParser.js" strategy="afterInteractive" />
      <div id="audio-player"></div>
      <div id="post-div">
        <h1 id="post-title">First Post</h1>
        <p id="post-content">
          We recommend using Static Generation (with and without data) whenever
          possible because your page can be built once and served by CDN, which
          makes it much faster than having a server render the page on every
          request. You can use Static Generation for many types of pages,
          including: Marketing pages Blog posts E-commerce product listings Help
          and documentation
        </p>
      </div>
      <Link href="/">
        <a>Go to home</a>
      </Link>
    </div>
  );
}
