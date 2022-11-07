export default {
    name: 'about',
    title: 'About',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'subtitle',
        title: 'Sub Title',
        type: 'text',
      },
      {
        name: 'intro',
        title: 'Intro',
        type: 'text',
      },
      {
        name: 'author',
        title: 'Author',
        type: 'reference',
        to: {type: 'author'},
      },
    ],
  }
  