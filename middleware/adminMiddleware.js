const adminMiddleware = (req, res, next) => {
  // Check if the user is an admin
  console.log('User details in adminMiddleware:', req.user);

  if (!req.user.isAdmin) {
    console.log('User is not an admin');
    return res.status(403).json({ error: 'Forbidden: Only admin users can access this endpoint' });
  }
  
  console.log('User is an admin1');
  next();
};

module.exports = adminMiddleware;
