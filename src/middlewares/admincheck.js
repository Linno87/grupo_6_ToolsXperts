module.exports = (req,res,next) => {
    if(req.session.userLogin && req.session.userLogin.roleId === 1){
        next()
    }else {
        return res.redirect('/')
    }
}