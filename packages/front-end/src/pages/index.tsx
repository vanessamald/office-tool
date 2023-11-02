import clsx from 'clsx';
import Head from 'next/head';
import { Inter } from '@next/font/google';
import Navigation from '../components/Navigation';
import PageTitle from '../components/PageTitle';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {

  return (
    <>
      <Head>
        <title>Atllas Takehome</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel="manifest" href="/manifest.json" />
        <link rel='icon' href='/public/favicon.ico' />
        <meta name="theme-color" content="#000" />
      </Head>
      <main className={clsx('min-h-screen w-full h-full text-white', inter.className)}>
        <PageTitle title='User Management'/>
        <div className='h-screen'>
          <Navigation/>
        </div>
      </main>
    </>
  );
}