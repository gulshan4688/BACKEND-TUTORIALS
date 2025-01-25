import mongoose, { mongo, Schema } from "mongoose";
import { Sub_todo } from "./sub_todo.models";

const todoSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    complete: {
        type: Boolean,
        default: false,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    subTodos: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:Sub_todo
        }// ^ sub_todos array of object 
    ]
}, { timestamps: true })
export const Todo = mongoose.model("Todo", todoSchema);