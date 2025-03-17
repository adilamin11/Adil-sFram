import {model, Schema} from 'mongoose';

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required:true
    },
    phone: {
        type: String,
       
        unique: true,
        required: true,
    },
    address: {
        type: String,
    },
    role: {
        type: String,
        default: 'User',
    },
    password: {
        type: String,
        required: true,
    }  
}, {
    timestamps: true,
});

const User = model('User', userSchema);

export default User;