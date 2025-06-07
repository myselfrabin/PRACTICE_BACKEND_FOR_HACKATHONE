/*
{
  _id string pk,
  patient_id string fk -> hospital_user._id,
  doctor_id string fk -> hospital_user._id,
  medicines array of {
    name string,
    dosage string,
    frequency string,
    duration string
  },
  prescribed_on Date,
  createdAt Date,
  updatedAt Date
}
 */

import mongoose, {Schema} from "mongoose";

const prescriptionSchema = new Schema(
    {
  // our field is here
  patient_id:{
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  doctor_id:{
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  medicines: [
    {
        name:{
            type: String,
            required: true,
            index: true,
        },
        dosage: {
            type: String,
            required: true,
            default: Date.now,
        },
        frequency:{
            type: String,
            required: true,
        },
        duration:{
            type: String,
            required: true,
        }
        
    }
  ],
  prescribed_on: {
    type: Date,
    default: Date.now,
  }
},
{timestamps: true}
)

export const Prescription = mongoose.model('Prescription', prescriptionSchema); // our model is here