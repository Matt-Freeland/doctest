import React from 'react'


/* 
 This is a feature list. It takes an object of features and turns them into a page layout. Right now its configured to create a new column for each new item (up to 12). 

 Each object should be formatted like this: 
 {
   title: 'text between singlequotes',
   Svg: 'require('path-to-svg in singlequotes').default,
   description: (
   <>
     text between empty tags
   </>
   ),
   link: 'relative path or url',
 },
 */

const FeatureList = [
    {
       // title: 'Nexus Repository Manager',
        title: 'Product 1',
        Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
        description: (
            <>
            Manage Binaries and build artifacts across your entire software supply chain. 
            </>
        ),
        link: '/repo/repo-current/home',
    },
    {
        title: 'Product 2',
//        title: 'Nexus Lifecycle & Firewall',
        Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
        description: (
            <>
              Automatically find, fix and stop open source vulnerabilities at every stage of the software development lifecycle.
            </>
        ),
        link: '/',
    },
    {
        title: 'Product 3',
        //title: 'Sonatype Lift',
        Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
        description: (
            <>
              Find critical, performance, reliability, and security bugs when they're easiest to fix - during code review.
            </>
        ),
        link: '/lift/about',
    },
    {
        title: 'Product 4',
       // title: 'Nexus Container',
        Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
        description: (
            <>
             Protect containers and Kubernetes deployments on multiple cloud platforms.  
            </>
        ),
        link: '/',
    },
];

export default FeatureList 
