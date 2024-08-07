import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hi, I'm Cemile! 👋 I'm a front-end web developer with a background in
          genetics 🧬. I’m fascinated to see life sciences references in web
          development despite being inherently different fields. I enjoy what I
          do because it makes me think in new ways and learn something new
          everyday. I also enjoy sharing what I know and learning from others,
          which makes what I do even more rewarding! Read on to discover
          interesting things I've found along the way. 🌟
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
