import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
   task: String,
   done: {
      type: Boolean,
      default: false
   }

})

const TodoModel = mongoose.model('Todo', todoSchema);

export default TodoModel;