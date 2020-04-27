function authUser(req, res, next) {
  if (req.user == null) {
    // Not logged in, unauthorized access
    res.status(403);
    return res.send('You need to sign in!');
  }
  next();
}

module.exports = {
  authUser
};
