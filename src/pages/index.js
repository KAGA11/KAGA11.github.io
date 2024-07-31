import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
// 本地miku
// import logo from "@site/static/img/avatar_large.png";
import styles from './index.module.css';



// 主页组件
/* 
  <h1 className="hero__title">{siteConfig.title}</h1>
  <p className="hero__subtitle">{siteConfig.tagline}</p> 
*/
function HomepageContent() {
  // git hub avatar
  const logo = "https://github.com/KAGA11.png";
  const {siteConfig} = useDocusaurusContext();
  
  return (
    <header className={clsx(styles.heroBanner)}>
      <div className={styles.container}>
        <img src={logo} className={styles.avatar}/>
        <h1 >时雨</h1>
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
      <main>
        <HomepageContent />
        {/* <HomepageFeatures /> */}
      </main>
    </Layout>
  );
}


