import '../styles/global.scss'
import Tabs from '../components/tabs';

export default function MyApp({ Component, pageProps }) {
  return (
    <main className="main">
      <Tabs />
      <div className="wrapper">
        <Component {...pageProps} />
      </div>
    </main>
  );
}