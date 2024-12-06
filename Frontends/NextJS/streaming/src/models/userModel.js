import mongoose from 'mongoose';

//create schema for mongoose 

const userSchema = new mongoose.Schema({
    avatar: {
        type: String,
        default: false
    },
    username: {
        type: String,
        required: [true, "Please enter a username"],
        unique: true
    },
    email: {
        type: String,
        required: [true, "Please enter an email"],
        unique: true
    },
    watchlist: [
        {
          id: Number,
          title: String,
          overview: String, 
          type: { type: String, enum: ['movie', 'TV'] },
          src: String,
          genre: Number,
          year: String,
          isAdult: Boolean,
          isBooked: Boolean,
          addedAt: { type: Date, default: Date.now }
        }
      ],
    password: {
        type: String,
        required: [true, "Please enter a password"],
        minlength: 6
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    hasAccount : {
        type: Boolean,
        default: false
    },
    forgetPasswordToken: String, 
    forgetPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date 

})

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;