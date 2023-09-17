// pages/_app.js

import '@/styles/globals.css';
import Layout from '/src/components/Layout.jsx';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}