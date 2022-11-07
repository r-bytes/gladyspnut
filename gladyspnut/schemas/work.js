export default {
    name: 'work',
    title: 'Work',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'author',
        title: 'Author',
        type: 'reference',
        to: {type: 'author'},
      },
      {
        name: 'mainImage',
        title: 'Main image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'page',
        title: 'Page',
        type: 'array',
        of: [{type: 'reference', to: {type: 'pages'}}],
      },
      {
        name: 'stack',
        title: 'Stack',
        type: 'array',
        of: [{type: 'reference', to: {type: 'stack'}}],
      },
      {
        name: 'publishedAt',
        title: 'Published at',
        type: 'datetime',
      },
    ],
  }
  