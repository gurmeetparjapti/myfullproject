const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keysecret = "jbvkajbfsfuwf"
const userSchema = new mongoose.Schema({
    username: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    age: {
        type: String
    },
    password: {
        type: String
    },
    address: {
        type: String
    },
    pass: {
        type: String
    },
    mypic: {
        type: String
    },
    tokens: [
        {
            token: {
                type: String,
                require: true
            }
        }
    ]

});




userSchema.pre("save", async function (next) {
    if (this.isModified("pass")) {
        this.pass = await bcrypt.hash(this.pass, 12);
    }
    next();
});
userSchema.methods.customgeenratefunction = async function () {
    try {
        let mytoken = jwt.sign({ _id: this._id }, keysecret, {
            expiresIn: "1d"
        });
        this.tokens = this.tokens.concat({ token: mytoken });
        await this.save();
        return mytoken;
    }
    catch (error) {
        res.statis(422).json(error);
    }

}



const users = new mongoose.model("students", userSchema);
module.exports = users;
