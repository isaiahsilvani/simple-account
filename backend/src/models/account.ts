import mongoose, { Schema } from 'mongoose'
import IAccount from '../interfaces/account'


const AccountSchema: Schema = new Schema(
  {
      account: { type: String, required: true },
      amount: { type: Number, required: true },
  },
  {
      timestamps: true
  }
);

// EXTRA FUNCTIONALITY OF TYPESCRIPT ALERT - post/pre function
// Choose one of the actions you want to bind the post operation to


export default mongoose.model<IAccount>('Account', AccountSchema);