const CustomError = require("../errors");

const checkPermission = (requestUser, resourceUserId) => {
  if (requestUser.role === "admin") {
    return;
  }
  if (requestUser.userId === resourceUserId.toString()) {
    return;
  }
  throw new CustomError.UnauthorizedError(
    "Not authorized to Access this route"
  );
};

module.exports = { checkPermission };
