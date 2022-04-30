const user = require('./../models/user')
const User = require ('./../models/user')
const listuser = [ 1, "@Aneth", "Aneth_alvarez", "Sin bio" ]
class UserService {
    static create(id,username,name){
        return new User(id, username, name, "Sin bio")

    }

    
    static getInfo (){
        return listuser.map(listuser => listuser)
      }
}
module.exports = UserService