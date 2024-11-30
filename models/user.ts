import mongoose from '../server/mongodb'
const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    fullname: String,
    rolename: String,
    photoRul: String,
    idcard: String
}, {
    timestamps: true
})
const User = mongoose.model('user', UserSchema)

export default User