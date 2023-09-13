module.exports= (req,res)=>{
   req.session.destroy();
res.cookie('userRemember', "")
res.redirect('/')
}