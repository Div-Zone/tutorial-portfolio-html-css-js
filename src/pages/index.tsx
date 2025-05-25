// import clsx from 'clsx';
// import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
// import Heading from '@theme/Heading';
// import styles from './index.module.css';
import React, { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    window.location.href = '/docs/intro';
  }, []);

  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`Hello from ${siteConfig.title}`} description="Description will go into a meta tag in <head />">
      {/* <HomepageHeader /> */}
    </Layout>
  );
};

export default Home;

// const HomepageHeader = () => {
//   const { siteConfig } = useDocusaurusContext();
//   return (
//     <header className={clsx('hero hero--primary', styles.heroBanner)}>
//       <div className="container">
//         <Heading as="h1" className="hero__title">
//           {siteConfig.title}
//         </Heading>
//         <p className="hero__subtitle mb-3">{siteConfig.tagline}</p>
//         <div className={styles.buttons}>
//           <Link className="button button--secondary button--lg" to="/docs/intro">
//             Ingresar
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// };
