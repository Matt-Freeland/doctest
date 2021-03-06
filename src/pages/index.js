import React, {useEffect} from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
        <div style={styles}>
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        </div> 
        </div>
        </header>
    );
}

/*
useEffect(() => {
    const netlify = 
        if (window.netlifyIdentity) {
            window.netlifyIdentity.on("init", user => {
                if (!user) {
                    window.netlifyIdentity.on("login", () => {
                        document.location.href = "/admin/";
                    });
                }
            });
        }
    }

    const script = document.createElement('script);
    script.src = netlify
    document.body.appendChid(script)
} */

export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
        title={`Hello from ${siteConfig.title}`}
        description="Description will go into a meta tag in <head />">
        <HomepageHeader />
        <main>
        <HomepageFeatures />
        </main>
        </Layout>
    );
}
