var mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
  
    id: {
      type: mongoose.Schema.Types.ObjectId,
    },
    name: {
      type:String,
    },
    email : {

        type: String,
        required: true,
    },
    password : {
        type: String,
        required: true,
    },
    gender : {
   type : String,
   enum : ["Male", "Female" , "Other"]

    },
      phone: {
        type: Number,
        required : true,
        unique : true

    },
requests :{
type : Array,
default : []

   }
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);