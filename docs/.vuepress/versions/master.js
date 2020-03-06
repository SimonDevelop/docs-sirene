module.exports = {
  selectText: 'Langues',
  label: 'Français',
  editLinkText: 'Éditer cette page sur GitHub',
  nav: require('./../nav/nav.fr.js'),
  sidebar: {
    '/master/': [
      {
        title: 'Master',
        collapsable: false,
        children: [
          '',
          'functions'
        ]
      }
    ]
  }
};
