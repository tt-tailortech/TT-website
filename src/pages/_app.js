import '../styles/globals.css';
import Layout from '../components/layout/Layout';
import { appWithTranslation } from 'next-i18next';
import nextI18NextConfig from '../../next-i18next.config.js';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default appWithTranslation(MyApp, nextI18NextConfig);
