const {check, validationResult} = require("express-validator");
exports.registerRules = () => [
  check("name", "Name is Required").notEmpty(),
  check("phone", "Phone is Required").notEmpty(),
  check("phone", "Phone should be at least 6 charecters long ").isLength({
    min:8
  }),
  check("email", "Email is Required").notEmpty(),
  check("email", "Email is Required").isEmail(),
  check("password", "Passowrd should be at least 6 charecters long ").isLength({
    min:6
  })
];

exports.validator = (req, res, next) => {
  const errors = validationResult(req);
  errors.isEmpty() ? next() : res.send({ errors: errors.array() });
};
