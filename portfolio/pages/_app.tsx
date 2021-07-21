import '../styles/globals.css';
import React from 'react';
import { Navbar, Footer } from '../components';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div className='container'>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </div>
    );
}
export default MyApp;
