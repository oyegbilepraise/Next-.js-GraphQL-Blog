import React, { useEffect, useState } from "react";
import "../styles/globals.scss";
import { Layout } from "../components";
import '../styles/Nprogress.scss';

import Router from 'next/router';
import NProgress from 'nprogress';


Router.onRouteChangeStart = url => {
  NProgress.start();
}

Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;