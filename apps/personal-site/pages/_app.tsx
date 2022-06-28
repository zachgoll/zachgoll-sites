import { AppProps } from 'next/app';
import Head from 'next/head';
import { MDXProvider } from '@mdx-js/react';
import { Codepen, S3Asset } from '@zachgoll/ui';
import './styles.css';

const components = { Codepen, S3Asset };

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Zach Gollwitzer</title>
      </Head>
      <div className="app">
        <main className="px-4 py-2 sm:px-12 sm:py-8">
          <MDXProvider components={components}>
            <Component {...pageProps} />
          </MDXProvider>
        </main>
      </div>
    </>
  );
}

export default CustomApp;
