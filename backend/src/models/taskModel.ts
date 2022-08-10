import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
    title: String,
    description: String,
    isCompleted: Boolean,
    createdAt: Date,
    updatedAt: Date,
    ownerId: String
});

export default mongoose.model("Task", taskSchema);