const {readJson}=require('../../data')


module.exports = (req,res)=>{
    
    const listUser = readJson('users.json')
    

    const user = listUser.find((user)=>user.id === 1 )

    return res.render('userProfile',{
        ...user
    })
    
    
}