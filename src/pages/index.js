import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import logo from "@site/static/img/avatar_large.png";

import styles from './index.module.css';


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx(styles.heroBanner)}>
    <div className="container">
      {/* <h1 className="hero__title">{siteConfig.title}</h1>
      <p className="hero__subtitle">{siteConfig.tagline}</p> */}
      <img src={logo} className={styles.avatar}/>
      <h1 style={{marginTop:'20px'}}>时雨</h1>
      <div style={{marginTop:'30px'}} className={styles.buttons}>
        {/* <Link
          className="button button--secondary button--lg"
          to="/blog/mdx-blog-post">
          自述
        </Link> */}

      </div>
    </div>
  </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}


