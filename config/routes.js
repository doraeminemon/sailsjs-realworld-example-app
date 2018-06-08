/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {


  //  ╦ ╦╔═╗╔╗ ╔═╗╔═╗╔═╗╔═╗╔═╗
  //  ║║║║╣ ╠╩╗╠═╝╠═╣║ ╦║╣ ╚═╗
  //  ╚╩╝╚═╝╚═╝╩  ╩ ╩╚═╝╚═╝╚═╝

  /***************************************************************************
   *                                                                          *
   * Make the view located at `views/homepage.ejs` your home page.            *
   *                                                                          *
   * (Alternatively, remove this and add an `index.html` file in your         *
   * `assets` directory)                                                      *
   *                                                                          *
   ***************************************************************************/

  'GET /': async function(req, res, next) {
    const articles = await Article.find();

    return res.view('pages/homepage', {
      articles: articles
    });
  },

  '/login': {
    view: 'pages/auth/login'
  },

  '/register': {
    view: 'pages/auth/register'
  },

  '/settings': {
    view: 'pages/settings'
  },

  '/editor': {
    view: 'pages/editor/create'
  },

  '/editor/:slug': {
    view: 'pages/editor/edit'
  },

  '/article/:slug': {
    view: 'pages/articles/article'
  },

  '/profile/:username': {
    view: 'pages/profiles/profile'
  },

  '/profiles/:username/favorites': {
    view: 'pages/profiles/favorites'
  },

  /**
   * TODO - Views
   */

  /***************************************************************************
   *                                                                          *
   * More custom routes here...                                               *
   * (See https://sailsjs.com/config/routes for examples.)                    *
   *                                                                          *
   * If a request to a URL doesn't match any of the routes in this file, it   *
   * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
   * not match any of those, it is matched against static assets.             *
   *                                                                          *
   ***************************************************************************/


  //  ╔═╗╔═╗╦  ╔═╗╔╗╔╔╦╗╔═╗╔═╗╦╔╗╔╔╦╗╔═╗
  //  ╠═╣╠═╝║  ║╣ ║║║ ║║╠═╝║ ║║║║║ ║ ╚═╗
  //  ╩ ╩╩  ╩  ╚═╝╝╚╝═╩╝╩  ╚═╝╩╝╚╝ ╩ ╚═╝

  /**
   * Users
   */
  'POST /api/users/login': {
    action: 'users/login'
  },

  'POST /api/users': {
    action: 'users/register'
  },

  'GET /api/user': {
    action: 'users/get-user'
  },

  'PUT /api/user': {
    action: 'users/update-user'
  },

  /**
   * Profiles
   */
  'GET /api/profiles/:username': {
    action: 'profiles/get-profile'
  },

  'POST /api/profiles/:username/follow': {
    action: 'profiles/follow-profile'
  },

  'DELETE /api/profiles/:username/follow': {
    action: 'profiles/unfollow-profile'
  },

  /**
   * Articles
   */
  'GET /api/articles': {
    action: 'articles/get-articles'
  },

  'GET /api/articles/feed': {
    action: 'articles/get-feed'
  },

  'GET /api/articles/:slug': {
    action: 'articles/get-article'
  },

  'POST /api/articles': {
    action: 'articles/create-article'
  },

  'PUT /api/articles/:slug': {
    action: 'articles/update-article'
  },

  'POST /api/articles/:slug/comments': {
    action: 'articles/add-comment'
  },

  'GET /api/articles/:slug/comments': {
    action: 'articles/get-comments'
  },

  'DELETE /api/articles/:slug/comments/:id': {
    action: 'articles/delete-comment'
  },

  'POST /api/articles/:slug/favorite': {
    action: 'articles/favorite-article'
  },

  /**
   * Tags
   */
  'GET /api/tags': {
    action: 'tags/get-tags'
  }


  //  ╦ ╦╔═╗╔╗ ╦ ╦╔═╗╔═╗╦╔═╔═╗
  //  ║║║║╣ ╠╩╗╠═╣║ ║║ ║╠╩╗╚═╗
  //  ╚╩╝╚═╝╚═╝╩ ╩╚═╝╚═╝╩ ╩╚═╝


  //  ╔╦╗╦╔═╗╔═╗
  //  ║║║║╚═╗║
  //  ╩ ╩╩╚═╝╚═╝


};
