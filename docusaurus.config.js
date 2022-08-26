// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Developer Community',
  tagline: 'Developers are cool',
  url: 'https://developer.sailpoint.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'SailPoint', // Usually your GitHub org/user name.
  projectName: 'SailPoint Developer Community', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarCollapsible: true,
          sidebarPath: require.resolve('./sidebars.js'),
          docLayoutComponent: "@theme/DocPage",
          docItemComponent: "@theme/ApiItem" // Derived from docusaurus-theme-openapi
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        }
      },
      navbar: {
        title: '',
        logo: {
          alt: 'SailPoint Developer Community',
          src: 'img/SailPoint-Developer-Community-Lockup.png',
          srcDark: 'img/SailPoint-Developer-Community-Inverse-Lockup.png'
        },
        items: [
          {
            type: 'dropdown',
            label: 'IdentityNow',
            position: 'right',
            items: [
              {to: '/docs/category/identity-now-api-v3', label: 'V3 APIs'},
              {to: '/docs/category/identity-now-api-beta', label: 'Beta APIs'}
              // ... more items
            ],
          },
          {
            type: 'dropdown',
            label: 'IdentityNow',
            position: 'right',
            items: [
              {
                type: 'doc',
                docId: 'idn/docs/getting-started/getting-started',
                label: 'Documentation',
              },
              // ... more items
            ]
          }
        ]
      },
      footer: {},
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

    plugins: [
      [
        "docusaurus-plugin-openapi-docs",
        {
          id: "openapi",
          docsPluginId: "classic",
          config: {
            idn_v3: {
              specPath: "static/idn-api/sailpoint-api.v3.yaml",
              outputDir: "docs/idn/api/v3",
              sidebarOptions: {
                groupPathsBy: "tag",
                categoryLinkSource: "tag"
              }
            },
            idn_beta: {
              specPath: "static/idn-api/sailpoint-api.beta.yaml",
              outputDir: "docs/idn/api/beta",
              sidebarOptions: {
                groupPathsBy: "tag",
                categoryLinkSource: "tag"
              }
            },
          }
        }
      ]
    ],
  
    themes: ["docusaurus-theme-openapi-docs"]
};

module.exports = config;
