module.exports = function badEntity(errors) {
  if(req.wantsJSON){
    return res.sendStatus(422).json({
      errors: errors
    });
  } else {
    /**
     * TODO error page for redirect
     */
    return res.redirect('/');
  }
}