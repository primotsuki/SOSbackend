export default {
    Query: {
        CirugiaByMascota: (_, args, {models}) =>{
            return models.Cirugia.findAll({
                where:{
                    mascota_id: args.mascota_id
                }
            })
        }
    },
    Mutation: {
        saveCirugia: (_,args, {models}) =>{
            return models.Cirugia.create(args)
        }
    }
}