import mongoose from "mongoose"

const todoSchema = mongoose.Schema({
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }, 
    completed: {
        type: Boolean,
        // default: false 
    },
    completedAt:{
        type: Number, 
        default: null
    }
}, {timestamps: true}
)

const Todo = mongoose.model('Todo', todoSchema)

export default Todo
  