const faker = require('faker');

const DEFAULT_OPTIONS = {
  articles: 20,
  profiles: 20,
  comments: 20
}

module.exports.seed = async function (options) {
  var options = Object.assign({}, options, DEFAULT_OPTIONS);

  const articles = _.times(options.articles, () => {
    return {
      slug: faker.lorem.slug(),
      title: faker.lorem.sentence(),
      description: faker.lorem.paragraph(),
      body: faker.lorem.paragraphs(3),
    }
  });


  const articlePromise = Article.createEach(articles);

  await articlePromise;
}
