const Router = require('koa-router');
let router = new Router();
const mongoose = require('mongoose');

// 注册处理方法
router.post('/registUser', async (ctx) => {
    // 获取model
    const User = mongoose.model('User');
    // 接收post请求封装成user对象
    let newUser = new User(ctx.request.body);
    // 使用save保存用户信息
    
    await newUser.save().then(() => {
        ctx.body = {
            code: 200,
            message: '注册成功'
        };
    }).catch(err => {
        ctx.body = {
            code: 500,
            message: '注册失败'
        };
    });
});

// 登录处理方法
router.post('/loginUser', async (ctx) => {
    // 接收前端发送的数据
    let loginUser = ctx.request.body;
    let userName = loginUser.userName;
    let password = loginUser.password;
    // 引入model
    const User = mongoose.model('User');
    // 查询用户名是否存在 存在再去比较密码
    // findOne 
    await User.findOne({ userName: userName }).exec().then(async (result) => {
        // 判断result是否存在
        if (result) {
            // 创建model层user模型的实例化对象
            let newUser = new User();
            // 使用user模型的比较方法  
            await newUser.comparePassword(password, result.password)
                .then(isMatch => {
                    // 登录成功
                    if (isMatch) {
                        ctx.body = {
                            code: 200,
                            message: '登录成功',
                            userInfo: result
                        };
                    } else {// 登录失败
                        ctx.body = {
                            code: 201,
                            message: '密码错误'
                        };
                    }
                })

        }
        else {  //如果不存在
            ctx.body = {
                code: 201,
                message: '用户名不存在'
            };
        }
    })

});
module.exports = router;