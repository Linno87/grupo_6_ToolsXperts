const {readJson}=require('../../data')


module.exports = (req,res)=>{
    
    const listUser = readJson('users.json')
    
    
    const user = listUser.find((user)=>user.id === req.session.userLogin.id )
    
    return res.render('userProfile',{
        ...user
    })
    
    
}