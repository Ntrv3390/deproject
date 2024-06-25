import mongoose, { Schema } from "mongoose";

const recipeSchema = new Schema({
    title: {
        type: String,
        required: true
      },
      directions: {
        type: [String],
        required: true
      },
      ingredients: {
        type: [String],
        required: true
      },
      imgUrl: {
        type: String,
        required: true
      },
      language: {
        type: String,
        required: true
      },
      duration: {
        type: String,
        required: true
      },
      complexity: {
        type: String,
        required: true
      },
      affordability: {
        type: String,
        required: true
      },
      meals: {
        type: [String],
        required: true
      },
      foodType: {
        type: [String],
        required: true
      },
      id: {
        type: String,
        required: true
      }
},
{
    timestamps: true,
});

const Recipe = mongoose.models.Recipe || mongoose.model("Recipe", recipeSchema);


export default Recipe;