export default {
    Query: {
        AlergiaByMascota: (_, args, {models}) =>{
            return models.Alergia.findAll({
                where:{
                    mascota_id: args.mascota_id
                }
            })
        }
    },
    Mutation: {
        saveAlergia: (_,args, {models}) =>{
            return models.Alergia.create(args)
        }
    }
}