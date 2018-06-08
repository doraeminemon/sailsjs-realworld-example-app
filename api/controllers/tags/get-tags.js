module.exports = {
  description: 'Get All Tags',
  extendedDescription: `
  Get a list of all tags.
  Authentication not required.
  `,
  inputs: {},
  exits: {},
  fn: async function(inputs, exits) {
    const tags = await Tags.find();

    return exits.success({
      tags: _.flatMap(tags, (tag => tag.tag))
    });
  }
}