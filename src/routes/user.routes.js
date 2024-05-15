const { Router } = require('express');
const router = Router();
const userCtrl = require('../controllers/user.controller');

router.get('/user/addUser', userCtrl.renderUserForm);

router.post('/user/addUser', userCtrl.createNewUser);

router.get('/user/renderUsers', userCtrl.renderUsers);

router.get('/user/editUser/:id', userCtrl.editUser);

router.put('/user/updateUser/:id', userCtrl.updateUser);

router.delete('/user/delete/:id', userCtrl.deleteUser);

module.exports = router;