import mongoose, { Schema } from "mongoose";

const colorSchema = new Schema({
  codigo:{
    type: String,
    unique: true,
    required: true,
    minLength: 4, 
    maxLength: 4
  },
  nombreColor:{
    type: String,
    required: true,
    unique: true,
    minLength: 3, 
    maxLength: 15
  },
  codigoHexadecimal:{
    type: String,
    validate: {
      validator: function(v) {
        return /^#[0-9A-F]{6}$/i.test(v);
      },
      message: props => `${props.value} no es un código de color hexadecimal válido.`
    }
  }
})

const Color = mongoose.model("color", colorSchema);

export default Color;