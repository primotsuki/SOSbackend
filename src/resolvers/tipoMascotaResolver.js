export default {
    Query: {
        allMascota: (_, args, {models}) =>{
            return models.TipoMascota.findAll()
        },
        MascotaByUser: (_, args, {models}) => {
            return models.Mascota.findOne({
                where: {
                    user_id: args.user_id
                },
                include: [{
                    model: models.TipoMascota,
                    as: 'tipo'
                }]
            })
        }
    }
}