//校验
const { body, validationResult } = require('express-validator')
const { User } = require('../../model')
const validate = require('./errorBack')

module.exports.register = validate([//用户注册
    body('username').notEmpty().withMessage('用户名不能为空').bail().isLength({ min: 3 }).withMessage('用户名长度不能小于3').custom(async val => {
        const usernameValidate = await User.findOne({ username: val })
        if (usernameValidate) {
            return Promise.reject('用户名已经被注册，请换用户名注册')
        }
    }),
    body('email').notEmpty().withMessage('邮箱不能为空').bail().isEmail().withMessage('请输入正确的邮箱').custom(async val => {
        const emailValidate = await User.findOne({ email: val })
        if (emailValidate) {
            return Promise.reject('邮箱已经被注册，请换邮箱注册')
        }
    }),
    body('phone').notEmpty().withMessage('手机号不能为空').bail().custom(async val => {
        const phoneValidate = await User.findOne({ phone: val })
        if (phoneValidate) {
            return Promise.reject('手机号码已经被注册，请换新手机号注册')
        }
    }),
    body('password').notEmpty().withMessage('密码不能为空').bail()
])

module.exports.login = validate([//登录验证
    body('email').notEmpty().withMessage('邮箱不能为空').bail().isEmail().withMessage('请输入正确的邮箱').custom(async val => {
        const emailValidate = await User.findOne({ email: val })
        if (!emailValidate) {
            return Promise.reject('邮箱未注册')
        }
    }).bail(),
    body('password').notEmpty().withMessage('密码不能为空').bail()
])
