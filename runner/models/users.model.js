import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }
})

const user = mongoose.model('Users', userSchema)

export default {
    user
}