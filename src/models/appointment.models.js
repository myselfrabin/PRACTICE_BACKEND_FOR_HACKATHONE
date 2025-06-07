/*{
    _id string pk,
    patient_id string fk -> hospital_user._id,
    doctor_id string fk -> hospital_user._id,
    department_id string fk -> department._id,
    appointment_date Date,
    status string enum["Scheduled", "Completed", "Cancelled"],
    createdAt Date,
    updatedAt Date
  }
    */

  import mongoose, {Schema} from "mongoose";
  import mongooseAggregatePpaginate from 'mongoose-aggregate-paginate-v2';

const appointmentSchema = new Schema(
    {
 // putting our field here
 patient_id: {
    type: Schema.Types.ObjectId,
    ref : 'User'

 },
 doctor_id: {
        type: Schema.Types.ObjectId,
        ref : 'User'

 },
 department_id : {
    type: Schema.Types.ObjectId,
    ref: "Departement",
 },
 appointment_date: {
    type: Date,
    required: true
 },
 status: {
    type: String,
    enum: ["Scheduled","Completed","Cancelled"]
 }

},
{timestamps: true}
)

appointmentSchema.plugin(mongooseAggregatePpaginate);


export const Appointment = mongoose.model('Appointment', appointmentSchema); //exporting the model