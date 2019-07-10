const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); 

var userSchema = new mongoose.Schema({
    fullName: {
        type: String
    },
    emmail: {
        type: String
    },
    password: {
        type: String
    },
    saltSecret: String
});

userSchema.pre('save', function (next) {
    bcrypt.genSalt(10,(err, salt) => {
        bcrypt.hash(this.password,salt, (err, hash) => {
            this.password = hash;
            this.saltSecret = salt;
            next();
        });
    });
});

mongoose.model('User', userSchema);