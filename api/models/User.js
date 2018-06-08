module.exports = {
  attributes: {
    email: {
      type: 'string',
      unique: true,
      required: true
    },
    username: {
      type: 'string',
      unique: true,
      required: true
    },
    bio: {
      type: 'string'
    },
    image: {
      type: 'string'
    }
  }
}