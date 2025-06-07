/* 
hospital_user [icon: 🏥] {
    _id string pk
    full_name string
    email string
    phone_num int
    gender string
    dob Date
    address string
    user_role string // e.g., patient, doctor, nurse, admin
    createdAt Date
    updatedAt Date
}
*/

import mongoose, {Schema} from "mongoose"

const userSchema = new Schema (
    {
    // our dtabase here
    full_name: {
        type: String,
        required: true,
        lowercase: true,
        trim : true,
        index: true

    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    phone_num: {
        type: String,
        required: true,
        unique: true,
    },
    gender: {
        type: String,
        enum : ["Male","Female"]
    },
    dob: {
        type: Date, 
        require: true
    }, 
    address: {
        type: String,
        required: true,

    },
    user_role: {
        type: String,
        enum: ["patient","doctor","nurse","admin"]
    },
},
{timestamps: true}
)

export const User = mongoose.model("User", userSchema);