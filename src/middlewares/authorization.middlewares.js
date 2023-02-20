const authorize = async (req, res, next) => {
  try {
    if (req.user.roles === "admin") {
      return res.send({
        sucess: true,
        data: `Access granted`,
      });
    }
    next();

    return res.status(403).send({
      success: false,
      data: `Acess denied, can only view`,
    });
  } catch (error) {
    res.status(401).send({ success: false, error: "Unauthorized" });
  }

  // if (!req.user.isAdmin) {
  //   return res.status(403).send({
  //     success: false,
  //     message: "Access denied"
  //   })
  // }
  // next();
};

module.exports = authorize;
