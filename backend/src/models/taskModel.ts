import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
    title: String,
    description: String,
    isCompleted: Boolean,
    createdAt: Date,
    updatedAt: Date,
    ownerId: mongoose.SchemaTypes.ObjectId
});

export default mongoose.model("Task", taskSchema);