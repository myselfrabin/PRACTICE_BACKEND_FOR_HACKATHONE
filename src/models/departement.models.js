/* 
{
  _id string pk,
  name string,
  description string,
  head_doctor_id string fk -> hospital_user._id,
  createdAt Date,
  updatedAt Date
}
*/

import mongoose,{Schema} from "mongoose"; 

const departementSchema = new Schema(
    {
    // our field here
    name: {
        type: String, 
        require : true,
        lowercase: true,
        trim : true,
        index: true,
        unique: true

    },
    description: {
        type: String,
        lowercase: true,
        trim : true,
        require: true
    },
    head_doctor_id: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }

},
 {timestamps : true}
)



export const departement = mongoose.model("Departement",departementSchema)