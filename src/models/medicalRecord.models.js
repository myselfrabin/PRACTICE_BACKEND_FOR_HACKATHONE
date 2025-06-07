/* 
{
  _id string pk,
  patient_id string fk -> hospital_user._id,
  doctor_id string fk -> hospital_user._id,
  diagnosis string,
  treatment string,
  notes string,
  record_date Date,
  createdAt Date,
  updatedAt Date
}
*/

import mongoose, {Schema} from "mongoose";

const medicalRecordSchema = new (
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
    diagnosis: {
        type: String,
        index: true,

    },
    treatment: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        index: true
    },
    notes: {
        type: String,
        required: true,
        index: true,
    },
    record_date: {
        type: Date,
        default: Date.now,
        required: true
    }
},
{timestamps: true}
)



export const MedicalRecord = mongoose.model("MedicalRecord",medicalRecordSchema); 