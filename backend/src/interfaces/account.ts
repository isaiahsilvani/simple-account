// Create an interface that describes a document in MongoDB and then attach is to a model!
import { Document } from 'mongoose'

export default interface IAccount extends Document {
  account: string,
  amount: number;
}