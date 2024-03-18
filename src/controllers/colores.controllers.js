import Color from "../database/model/color.js";

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
}

export const obtenerColor = async(req,res) => {
  try {
    const colorBuscado = await Color.findById(req.params.id);
    res.status(200).json(colorBuscado);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje:"No se encontró el color solicitado"
    })
  }
}

export const crearColor = async(req,res) => {
  try {
    const colorNuevo = new Color(req.body);
    await colorNuevo.save();
    res.status(201).json({
      mensaje:"El color fue creado correctamente"
    })
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje:"No se pudo procesar la solicitud de crear color"
    })
  }
}

export const editarColor = async(req,res) =>{
  try {
    const colorEncontrado = await Color.findById(req.params.id);

    if(!colorEncontrado){
      return res.status(404).json({
        mensaje:"No se encontró el color, el id es incorrecto"
      })
    }

    await Color.findByIdAndUpdate(req.params.id,req.body);
    
    res.status(200).json({
      mensaje:"El color fue modificado con éxito"
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      mensaje:"Ocurrió un error al intentar modificar el color"
    })
  }
}

export const borrarColor = async(req,res) => {
  try {
    const colorEncontrado = await Color.findById(req.params.id);

    if(!colorEncontrado){
      return res.status(404).json({
        mensaje:"No se encontró el color, el id es incorrecto"
      })
    }

    await Color.findByIdAndDelete(req.params.id);

    res.status(200).json({
      mensaje:"El color fue eliminado con éxito"
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      mensaje:"Ocurrió un error al intentar eliminar el color"
    })
  }
}