export default {
    Query:{
        allMascota: (_,args, {models}) => {
            return models.Mascota.findAll({
                include: [{
                    model: models.TipoMascota,
                    as: 'tipo'
                }]
            })
        },
        MascotaByUser: (_, args, {models}) => {
            return models.Mascota.findAll({
                include: [{
                    model: models.TipoMascota,
                    as: 'tipo'
                }],
                where: {
                    user_id: args.user_id
                }
            })
        }
    },
    Mutation: {
        saveMascota: (_,args, {models}) =>{
            return models.Mascota.create(args)
        }
    }
}