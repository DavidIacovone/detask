import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    isCompleted: {
        type: Boolean,
        required: true
    },
    ownerId: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

export default mongoose.model("Task", taskSchema);