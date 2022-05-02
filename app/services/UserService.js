const User = require('./../models/User')

class UserService {
    static create(id, username, name){
        return new User(id, username, name, "Sin bio")
    }

    static getInfo(user){
        return Object.values(user)
    }

    static getInfo(name, username){
        user.setBio = bio
    }

   static updateBio(user, bio){
    user.setBio = bio
  }

  static updateUserUsername(user, username){
    user.setUsername = username
  }

  static getAllUsernames(users){
    const usersUsernames = users.map( user => user.username)
    return usersUsernames
  }

  static updateBio(user, bio){
    user.setBio = bio
  }

  static updateUserUsername(user, username){
    user.setUsername = username
  }

  static getAllUsernames(users){
    const usersUsernames = users.map( user => user.username)
    return usersUsernames
  }


}

module.exports = UserService