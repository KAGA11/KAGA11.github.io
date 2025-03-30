// @ts-check
// 配置文件

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '母港',
  tagline: 'お帰りなさいました',
  favicon: 'img/favicon.ico',
  customFields: {
    avatar: 'img/avatar_large',
    superman: 'lol',
  },
  


  // Set the production url of your site here
  url: 'https://kaga11.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'KAGA11', // Usually your GitHub org/user name.
  projectName: 'kaga11.github.io', // Usually your repo name.
  deploymentBranch : 'gh-pages',
  

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Chinese : "zh-Hans"     English: "en"  
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans','en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          postsPerPage: 15,
          blogSidebarCount: 15,  // 这会显示最近15篇文章
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
      // Replace with your project's social card
      image: 'img/suzume_chair.jpeg',
      navbar: {
        title: '避风港',
        logo: {
          alt: 'My Site Logo',
          src: 'img/suzume_chair.jpeg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'right',
            label: '文章',
            to:'/docs/intro',
          },
          {
            to: '/blog', 
            label: '笔记', 
            position: 'right'
          },
        ],
      },
      footer: {
        style: 'light',
        // links: [
        //   {
        //     title: 'More',
        //     items: [
        //       {
        //         label: 'Blog',
        //         to: '/blog',
        //       },
        //       {
        //         label: 'GitHub',
        //         href: 'https://github.com/KAGA11',
        //       },
        //     ],
        //   },
        // ],
        copyright: `Copyright © 2023 - ${new Date().getFullYear()} 時雨. Built with <a href = "https://docusaurus.io/" target="_blank"> Docusaurus. </a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      
    }),
};

module.exports = config;
