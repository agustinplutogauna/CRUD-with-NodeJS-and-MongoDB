const {Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    pass: {
        type: String,
        required: true
    },
    cellphone: {
        type: String,
        required: true
    }

});

UserSchema.methods.encryptPassword = async pass => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(pass, salt);
}

UserSchema.methods.matchPassword = async function(pass) {
    return await bcrypt.compare(pass, this.pass);
}    

module.exports = model('User', UserSchema);
