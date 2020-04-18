export default {
    Query: {
        AllTipo: (_, args, {models}) =>{
            return models.TipoMascota.findAll()
        }
    }
}