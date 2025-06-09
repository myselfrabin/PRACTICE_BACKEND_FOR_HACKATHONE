/* 
hospital_user [icon: 🏥] {
    _id string pk
    full_name string
    email string
    password string
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
import bcrypt from "bcrypt"

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
    password: {
        type: String,
        required: true,
        trim: true,
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


userSchema.pre("save", async function name(next) {
    if(!this.modified("password")) return next()

    this.password = bcrypt.hash(this.password,10);

    next()
})
userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password) ;
    
    

}




export const User = mongoose.model("User", userSchema);