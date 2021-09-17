import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import FeatureList from '../data/features.js'
import Link from '@docusaurus/Link'


function Feature({Svg, title, description, link}) {
  return (
    <div className={clsx('col')}>
      <div className="text--center">
        <Link to={link}>
          <Svg className={styles.featureSvg} alt={title} />
        </Link>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
