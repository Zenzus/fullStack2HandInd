const User = require('../models/user');

async function addUser(username, password, email, firstName, lastName){
    var user = new User({
      firstName,
      lastName,
      username,
      password,
      email,
    });
    await user.save();
}

async function getAllUsers(){
return await User.find({});
}

async function findByUserName(userName){
  return await User.find({
    "userName": userName
    });
}

module.exports = {
  addUser,
  getAllUsers,
  findByUserName
}