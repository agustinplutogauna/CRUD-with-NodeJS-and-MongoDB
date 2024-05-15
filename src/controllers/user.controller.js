const userCtrl = {};
const User = require('../models/UserModel')

userCtrl.renderUserForm = (req, res) => {
    res.render('users/newUser');
}

userCtrl.createNewUser = async (req, res) => { 
    const {name, lastName, email, pass, cellphone} = req.body;
    
    const newUser = new User({ name, lastName, email, pass, cellphone });

    await newUser.save();

    res.send('New user created');
}

userCtrl.renderUsers = (req, res) => {
    res.send('List of all users');
}

userCtrl.editUser = (req, res) => {
    res.send('Edit an user')
}

userCtrl.updateUser = (req, res) => {
    res.send('Update an user')
}

userCtrl.deleteUser = (req, res) => {
    res.send('Delete user')
}


module.exports = userCtrl;