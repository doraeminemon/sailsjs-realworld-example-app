module.exports = {
  description: 'Register New User',
  extendedDescription: `
  Register a new user and return the created User.
  No authentication required.
  `,
  inputs: {
    username: {
      type: 'string',
      required: true
    },
    email: {
      type: 'string',
      required: true
    },
    password: {
      type: 'string',
      required: true
    }
  },
  exits: {
    emailAlreadyExists: {
      responseType: 'badEntity'
    }
  },
  fn: async function(inputs, exits) {

    const user = await User.create({
      username: inputs.username,
      email: inputs.email,
      password: inputs.password
    })
    .intercept('E_UNIQUE', 'emailAlreadyExists')
    .fetch();

    return exits.success({
      user: user
    })
  }
}