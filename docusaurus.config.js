const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: 'Doc Test',
    tagline: 'Documentation is cool',
    url: 'https://eloquent-visvesvaraya-619495.netlify.app/',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'matt-freeland', // Usually your GitHub org/user name.
    projectName: 'doctest', // Usually your repo name.
    themeConfig: {
        navbar: {
            title: 'Doc Test',
            logo: {
                alt: 'My Site Logo',
                src: 'img/Sonatype_Documentation_Logo.svg',
            },
            items: [
                {
                    type: 'dropdown',
                    label: 'Test', 
                    position: 'left',
                    items: [
                         {
                            type: 'docsVersionDropdown',
                            docspluginid: 'repo',
                            position: 'left',
                            // dropdownitemsafter: [{to: '/versions', label: 'all versions'}],
                        },
                            {
                                type: 'doc',
                                label: 'Repo',
                                docsPluginId: 'repo',
                                docId: 'feat',
                            },
                    ],
                },
                {
                    type: 'docsVersionDropdown',
                    docsPluginId: 'lift',
                },
                /*{
                    type: 'docsversiondropdown',
                    docspluginid: 'repo',
                    position: 'left',
                    // dropdownitemsafter: [{to: '/versions', label: 'all versions'}],
                },*/
                // disable blog
                // {to: '/blog', label: 'Blog', position: 'left'},
                {
                    href: 'https://github.com/Matt-Freeland/doctes',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Docs',
                    items: [
                        {
                            label: 'Hello!',
                            to: '/lift/greeting',
                        },
                    ],
                },
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'Stack Overflow',
                            href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                        },
                        {
                            label: 'Discord',
                            href: 'https://discordapp.com/invite/docusaurus',
                        },
                        {
                            label: 'Twitter',
                            href: 'https://twitter.com/docusaurus',
                        },
                    ],
                },
                {
                    title: 'More',
                    items: [
                        {
                            label: 'Blog',
                            to: '/blog',
                        },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/facebook/docusaurus',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
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
                    // Please change this to your repo.
                    editUrl:
                    'https://github.com/Matt-Freeland/doctest',
                    lastVersion: 'current',
                    versions: {
                        current: {
                            label: 'Lift',
                        },
                    },
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl:
                    'https://github.com/facebook/docusaurus/edit/master/website/blog/',
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
                    }
                },
                routeBasePath: 'repo',
                sidebarPath: require.resolve('./sidebarsRepo.js')
            },
        ],
    ],

};
