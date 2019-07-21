const CODE = {
  ML_PARSE: {
    UNEXPECTED_LEFT_ANGLE_BRACKET: -1,
    UNKNOW_STATE: -2
  },
  CODE_GENERATE: {
    X: -1025
  },
  OPTIMIZE: {
    X: -2049
  },
  XS_PARSE: {
    INVALID_RESERVED_IDENTIFIER: -3073,
    ES5_PARSE_ERROR: -3074,
    BABEL_PARSE_ERROR: -3075,
    INVALID_OBJECTPROPERTY: -3076,
    INVALID_MEMBEREXPRESSION: -3077,
    UNEXPECTED_TOKEN: -3078,
    INVALID_THIS: -3079,
    INVALID_ARGUMENTS: -3080,
    BABEL_GENERATE: -3081
  },
  Z_PARSE: {
    BABEL_PARSE_EXPRESSION: -4097,
    TOO_MUCH_AST_BODY: -4098,
    TOO_MUCH_AST_DIRECTIVES: -4099,
    WRONG_EXPRESSION_TYPE: -4100,
    UNKNOW_EXPRESSION_SEPARATOR_STATE: -4101
  }
};
class QccError {
  constructor(code, message) {
    this.code = code;
    this.message = message;
  }
}

module.exports.CODE = CODE;

module.exports.QccError = QccError;