import User from "../model/user.js";


function getUserInfo(req){
    const userInfo = User.findOne({username: req.body.username})
    return userInfo
    .then(response => {
        return response
    })
    .catch( error => {
        throw error
    })

}



export {getUserInfo}
