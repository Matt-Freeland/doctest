const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/* @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    noIndex: 'true',
    title: 'Sonatype Help',
    tagline: 'Guides, Reference, and more!',
    url: 'https://eloquent-visvesvaraya-619495.netlify.app/',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.png',
    organizationName: 'matt-freeland', // Usually your GitHub org/user name.
    projectName: 'doctest', // Usually your repo name.
    themeConfig: {
        colorMode: {
            disableSwitch: true,
            respectPrefersColorScheme: false,
        },
        navbar: {
            title: 'Doc Test',
            logo: {
                alt: 'My Site Logo',
                src: 'img/Sonatype_Documentation_Logo.svg',
            },
            items: [
                {
                    type: 'dropdown',
                    position: 'left',
                    label: 'Repository',
                    items: [
                        {
                            type: 'doc',
                            docId: 'home',
                            docsPluginId: 'repo'
                        },
                        {
                            type: 'doc',
                            docId: 'versions',
                            docsPluginId: 'repo'
                        },
                    ],
                },
                {
                    type: 'doc',
                    docsPluginId: 'lift',
                    docId: 'about',
                    label: 'Lift',
                    position: 'left',
                },
            ],
        },
        footer: {
            style: 'dark',
            copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
        },
        prism: {
            theme: lightCodeTheme,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    path: 'lift',
                    id: 'lift',
                    routeBasePath: 'lift',
                    sidebarPath: require.resolve('./sidebarsLift.js'),
                    lastVersion: 'current',
                    versions: {
                        current: {
                            label: 'Lift',
                        },
                    },
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
    plugins: [
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'repo',
                path: 'repo',
                includeCurrentVersion: true,
                lastVersion: 'current',
                versions: {
                    current: {
                        label: 'Repo',
                        path: 'repo-current',
                    },
                },
                routeBasePath: 'repo',
                sidebarPath: require.resolve('./sidebarsRepo.js')
            },
        ],
        ['@docusaurus/plugin-google-gtag'],
    ],
    themeConfig: {
        gtag: {
            trackingID 'G-T89RL3L8H0',
            anonymizeIP: true,
        },
    },
};
