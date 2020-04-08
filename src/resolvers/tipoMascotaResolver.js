export default {
    Query: {
        allMascota: (_, args, {models}) =>{
            return models.TipoMascota.findAll()
        }
    }
}