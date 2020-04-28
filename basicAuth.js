function authUser(req, res, next) {
  if (req.user == null) {
    // Not logged in, unauthorized access
    res.status(403);
    return res.send('You need to sign in!');
  }
  next();
}

function authRole(role) {
  return (req, res, next) => {
    if (req.user.role !== role) {
      // You are Forbidden access
      res.status(401);
      return res.send('Not allowed');
    }
    next();
  };
}

module.exports = {
  authUser,
  authRole
};
