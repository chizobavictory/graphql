import mongoose, { Schema } from "mongoose";

interface ListingType {
  _id: string;
  title: string;
  image: string;
  address: string;
  price: number;
  numOfBed: number;
  numOfBaths: number;
  rating: number;
}

const listingSchema = new Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  address: { type: String },
  price: { type: Number },
  numOfBed: { type: Number },
  numOfBaths: { type: Number },
  rating: { type: Number },
},
{timestamps: true}
);

export const Listing = mongoose.model<ListingType>("Listing", listingSchema);
