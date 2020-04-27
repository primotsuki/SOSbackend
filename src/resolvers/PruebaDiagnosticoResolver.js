export default {
    Query: {
        PruebaByMascota: (_, args, {models}) =>{
            return models.PruebaDiagnostico.findAll({
                where:{
                    mascota_id: args.mascota_id
                }
            })
        }
    },
    Mutation: {
        savePrueba: (_,args, {models}) =>{
            return models.PruebaDiagnostico.create(args)
        }
    }
}