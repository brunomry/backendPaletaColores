import Color from "../database/model/color.js"

export const listarColores = async(req,res) =>{
  try {
    const colores = await Color.find();
    res.status(200).json({colores})
  } catch (error) {
    console.log(error);
    res.status("400").json({
      mensaje:"No se encontró la lista de colores"
    })
  }
  res.send("Enviar lista de colores");
}

export const crearColor = async(req,res) => {
  try {
    const colorNuevo = new Color(req.body);
    await colorNuevo.save();
    res.status(201).json({colorNuevo})
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje:"No se pudo procesar la solicitud de crer color"
    })
  }
}