module.exports = (req,res,next) => {
    if(req.session.userLogin && req.session.userLogin.categoryUser === "administrador"){
        next()
    }else {
        return res.redirect('/')
    }
}