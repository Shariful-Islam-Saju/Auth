import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  },
  role: {
    type: String,
    default: "user",
  },
  authProviderId: {
    type: String,
  },

});

const User = mongoose.models?.User || mongoose.model("User", userSchema);

export default User;
