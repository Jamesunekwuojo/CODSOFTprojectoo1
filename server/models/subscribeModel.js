import mongoose from "mongoose";


const subscribeSchema = new mongoose.Schema({
    email: { 
        type: String,
        unique:true,
        required: true,

        match: [/\S+@\S+\.\S+/, 'Invalid email address']
    },

    subscribeAt: {
        type:Date,
        default:Date.now(),
    },
});

const subscribeModel = mongoose.model('Subscriber', subscribeSchema);

export {subscribeModel as Subscriber}