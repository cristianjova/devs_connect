const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');

// @route     POST api/users
// @desc      Register user
// @access    Public
router.post(
  '/',
  [
    check('name', 'El campo nombre es requerido')
      .not()
      .isEmpty(),
    check('email', 'Ingrese un email valido').isEmail(),
    check('password', 'Ingrese una contraseña de 6 o más caracteres').isLength({
      min: 6
    })
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.send('User route');
  }
);

module.exports = router;
