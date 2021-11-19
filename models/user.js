const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: [true, 'must provide a username'],
        minlength: [5, 'name must be 5-20 characters long!'],
        maxlength: [20, 'name must be 5-20 characters long!'],
    },

    password: {
        type: String, 
        required: [true, 'must provide a password'],
        minlength: [8, 'password must be longer than 8 characters!']
    },

    // might have to scrap this...
    // not entirely sure how to do this
    //
    //update: it burns
    favorites: {
        type: Array
    },

    bio: {
        type: String,
        maxlength: [240, `bio can't exceed 240 characters!`]
    }

})

.pre('save', async function (next) {
    this.password = await bcrypt.hash(this.password, await bcrypt.genSalt(10))
    next()
})
userSchema.methods.comparePassword = async function (submittedPassword) {
    const isMatch = await bcrypt.compare(submittedPassword, this.password)
    return isMatch
}
userSchema.methods.createJWT = function () {
    return jwt.sign(
        {userID: this._id, name: this.name},
        process.env.JWT_SECRET,
        {
            expiresIn: "90d"
        }
    )
}

module.exports = mongoose.model('User', userSchema);