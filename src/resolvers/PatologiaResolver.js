export default {
    Query: {
        PatologiaByMascota: (_, args, {models}) =>{
            return models.Patologia.findAll({
                where:{
                    mascota_id: args.mascota_id
                }
            })
        }
    },
    Mutation: {
        savePatologia: (_,args, {models}) =>{
            return models.Patologia.create(args)
        }
    }
}