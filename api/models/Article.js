module.exports = {
  attributes: {
    slug: {
      type: 'string',
      required: true,
    },
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string'
    },
    body: {
      type: 'string'
    },
    tags: {
      collection: 'Tag'
    },

  },
  customToJSON: function(){}
}