export default {
    name: 'commissions',
    title: 'Commissions',
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
          type: 'string',
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
  