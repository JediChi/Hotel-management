const authorize = async (req, res, next) => {
  // try {
  //   if (req.user.roles[0]) {
  //     return res.send({
  //       data: `Access granted`,
  //     });
  //   } else if (req.user.roles[1]) {
  //     return res.status(403).send({
  //       data: `Acess denied, can only view`,
  //     });
  //   }

  //   next();
  // } catch (error) {
  //   res.status(401).send({ success: false, error: "Unauthorized" });
  // }

  if (!req.user.isAdmin) {
    return res.status(403).send({
      success: false,
      message: "Access denied"
    })
  }
  next();
};

module.exports = authorize;
