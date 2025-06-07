/* 
{
  _id string pk,
  patient_id string fk -> hospital_user._id,
  appointment_id string fk -> appointment._id,
  amount float,
  status string enum["Paid", "Unpaid", "Pending"],
  payment_method string,
  paid_on Date,
  createdAt Date,
  updatedAt Date
}
*/


import mongoose, {Schema} from "mongoose";


const paymentSchema = new Schema(
    {
// our field is here
patient_id:{
    type: Schema.Types.ObjectId,
    ref: 'User'
},
appointment_id:{
    type: Schema.Types.ObjectId,
    ref: 'Appointment',
},
amount:{
    type: Number,
    required: true,
    default: Date.now,
},
status:{
    type: String,
    enum: ["Paid","Unpaid","Pending"],
    required: true,
    default: "Unpaid"
},
payment_method:{
    type: String,
    required: true
},
paid_on:{
    type: Date,
    default: Date.now,
    required: true
}
},
{timestamps: true}
)

export default mongoose.model('Payment', paymentSchema); // model name is Payment