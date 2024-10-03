import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Cabana Identity",
  description: "A collection of resources for Cabana Identity Solutions",
  outDir: './dist',
  srcDir: './docs',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Projects', link: '/modules/profiles.md' }
    ],

    lastUpdated: {
      text: 'Last Updated',
    },

    editLink: {
      pattern: 'https://github.com/cabanalabs/docs/edit/main/:path',
      text: 'Edit or comment on GitHub'
    },

    sidebar: [
      {
        text: '',
        collapsed: false,
        items: [
          { text: 'Introduction', link: '/overview/introduction' },
          // { text: 'The Big Picture', link: '/overview/big-picture' },
          { text: 'Technical Overview', link: '/overview/technical-overview' },
          { text: 'Tokenomics', link: '/concepts/no-token' },
          { text: 'Infrastructure', link: '/overview/infrastructure' }
        ]
      },
      // {
      //   text: 'Solutions for:',
      //   collapsed: false,
      //   items: [
      //     { text: 'Communities', link: '/solutions/communities' },
      //     { text: 'Businesses', link: '/solutions/businesses' },
      //     { text: 'Individuals', link: '/solutions/individuals' },
      //   ]
      // },
      {
        text: '',
        items: [
          { text: 'Getting Started', link: '/overview/getting-started' }
        ]
      },
      // {
      //   text: 'Prototypes',
      //   collapsed: false,
      //   link: '/prototypes/overview',
      //   items: [
      //     // { text: 'Overview', link: '/prototypes/overview' },
      //     { text: 'Web3 Profiles', link: '/prototypes/web3-profiles' },
      //     { text: 'Verify XYZ', link: '/prototypes/coming-soon' },
      //     { text: 'Account Abstraction', link: '/prototypes/coming-soon' },
      //   ]
      // },
      {
        text: 'SDK',
        collapsed: false,
        items: [
          { text: 'Account', link: '/sdk/coming-soon' },
          { text: 'Trust Vault', link: '/sdk/coming-soon' },
          { text: 'Personas', link: '/prototypes/web3-profiles' },
          { text: 'Wallets', link: '/sdk/coming-soon' },
          // { text: 'Markdown Examples', link: '/markdown-examples' },
          // { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: 'Concepts & Technology',
        collapsed: false,
        items: [
          { text: 'Verifiable Credentials', link: '/concepts/coming-soon' },
          { text: 'Dynamic Reputation', link: '/concepts/coming-soon' },
          { text: 'Dynamic Identity Scores', link: '/concepts/coming-soon' },
          { text: 'Adaptable Security', link: '/concepts/coming-soon' },
          { text: 'Cloak IDs', link: '/concepts/coming-soon' },
          { text: 'Proof of Personhood', link: '/concepts/pop' },
          { text: 'Account Abstraction', link: '/concepts/account-abstraction' },

        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/cabanalabs/docs' }
    ]
  }
})
