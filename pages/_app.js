import '../styles/global.scss'
import Tabs from '../components/tabs';

export default function MyApp({ Component, pageProps }) {
  return (
    <main className="main">
      <Tabs />
      <section className="wrapper flex wrap section">
        <Component {...pageProps} />
      </section>
    </main>
  );
}