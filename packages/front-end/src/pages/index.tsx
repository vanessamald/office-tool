import clsx from 'clsx';
import Head from 'next/head';
import { Inter } from '@next/font/google';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Navigation from '../components/Navigation';
import SearchBar from './search';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {

  return (
    <>
      <Head>
        <title>Atllas Takehome</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/public/favicon.ico' />
      </Head>
      <main className={clsx('min-h-screen w-full h-full', inter.className)}>
        <h1 className='uppercase px-4 py-10 text-2xl font-medium text-center'>
          User Management
        </h1>
        <div className=''>
          <SearchBar/>
        </div>
        <div className='h-screen'>
          <Navigation/>
        </div>
      </main>
    </>
  );
}