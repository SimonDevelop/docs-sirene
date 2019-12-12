module.exports = {
  base: '/',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: 'https://raw.githubusercontent.com/SimonDevelop/docs-sirene/master/docs/.vuepress/public/assets/img/logo.png' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:title', content: 'Documentation Sirene' }],
    ['meta', { name: 'og:description', content: 'Documentation Sirene - Documentation de la librairie php Sirene.' }],
    ['meta', { name: 'og:image', content: 'https://raw.githubusercontent.com/SimonDevelop/docs-sirene/master/docs/.vuepress/public/assets/img/logo.png' }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
    ['meta', { name: 'twitter:title', content: 'Documentation Sirene' }],
    ['meta', { name: 'twitter:description', content: 'Documentation Sirene - Documentation de la librairie php Sirene.' }],
    ['meta', { name: 'twitter:image', content: 'https://raw.githubusercontent.com/SimonDevelop/docs-sirene/master/docs/.vuepress/public/assets/img/logo.png' }],
    ['meta', { name: 'theme-color', content: '#0099ff' }]
  ],
  locales: {
    '/': {
      lang: 'fr',
      title: 'Documentation Sirene',
      description: 'Documentation Sirene - Documentation de la librairie php Sirene.'
    }
  },
  themeConfig: {
    logo: 'https://raw.githubusercontent.com/SimonDevelop/docs-sirene/master/docs/.vuepress/public/assets/img/logo.png',
    repo: 'SimonDevelop/sirene',
    docsRepo: 'SimonDevelop/docs-sirene',
    docsDir: 'docs',
    editLinks: true,
    locales: {
      '/': require('./config.fr')
    }
  },
  plugins: {
    '@vuepress/plugin-back-to-top': true,
    '@vuepress/medium-zoom': true
  }
};
