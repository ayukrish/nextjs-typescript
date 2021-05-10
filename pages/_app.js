import Head from 'next/head';
import '../styles/global.scss';
import Tabs from '../components/tabs';

export default function MyApp({ Component, pageProps }) {
  return (
    <main className="main">
      <Head>
        <title>React-hooks-typescript</title>
        <link rel="shortcut icon" href="favicon.ico" />
      </Head>
      <Tabs />
      <section className="wrapper flex wrap section">
        <Component {...pageProps} />
      </section>
    </main>
  );
}
