import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Microsoft Community",
  description: "Microsoft Community general documentation site.",
  lastUpdated: true,
  cleanUrls: true,
  head: [
    ['meta', { name: 'theme-color', content: '#747bff' }],
    ['link', { rel: 'icon', href: '/img/favicon.ico' }]
  ],
  themeConfig: {
    nav: [
      { text: 'Member Information', link: '/member/' },
      {
        text: 'Moderator Resources',
        items: [
          { text: 'Moderator Documentation', link: '/mod/docs/' },
          { text: 'Apply for mod position', link: 'https://apply.msft.chat' },
          { text: 'Server Analytics', link: 'https://statbot.net/dashboard/150662382874525696' },
          { text: 'Server Reviews', link: 'https://disboard.org/server/reviews/150662382874525696' },
        ]
      },
      {
        text: 'Wiki',
        items: wikiLinks()
      },
      {
        text: 'About',
        items: [
          { text: 'Join Discord server', link: 'https://aka.ms/community-discord' },
          { text: 'Bots', link: '/about/bots' },
          { text: 'Contributors', link: '/about/contributors' },
          { text: 'Moderation team', link: '/about/moderators' },
          { text: 'Community reviews', link: 'https://disboard.org/server/150662382874525696' }
        ]
      },
    ],
    sidebar: {
      '/wiki/': [
        {
          text: 'Wiki',
          items: wikiLinks()
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Microsoft-community' },
      { icon: 'discord', link: 'https://aka.ms/community-discord' }
    ],
    editLink: {
      pattern: 'https://github.com/Microsoft-community/Community-website/edit/master/:path',
      text: 'Edit this page on GitHub'
    },
    search: {
      provider: 'local'
    },
    footer: {
      message: 'Not associated with Microsoft.'
    },
  }
})

function wikiLinks() {
  return [
    { text: 'Home', link: '/wiki/' },
    { text: 'Troubleshooting', link: '/wiki/troubleshooting' },
    { text: 'Fixing Problems with the Microsoft Store', link: '/wiki/fixing-microsoft-store' },
    { text: 'Installing Windows', link: '/wiki/installing-windows' },
    { text: 'Joining and Leaving the Windows Insider Program', link: '/wiki/windows-insiders' },
    { text: 'Reinstalling GPU Drivers', link: '/wiki/reinstalling-gpu-drivers' },
    { text: 'Using the Media Creation Tool', link: '/wiki/using-the-media-creation-tool' },
    { text: 'Common Windows Misconceptions', link: '/wiki/common-misconceptions' },
    { text: 'Backing Up Data', link: '/wiki/backup' },
    { text: 'The Windows Feature Store', link: '/wiki/windows-feature-store' }
  ];
}