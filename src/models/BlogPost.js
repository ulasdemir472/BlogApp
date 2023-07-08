import mongoose from "mongoose";

const { Schema } = mongoose;

const blogPostSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.models.blogPost ||
  mongoose.model("blogPost", blogPostSchema);
