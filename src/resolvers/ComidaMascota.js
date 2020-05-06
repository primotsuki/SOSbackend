export default {
    Query: {
        ComidaByMascota: (_, args, {models}) =>{
            return models.ComidaMascota.findAll({
                include:[{
                    model: models.Suministro,
                    as: 'suministro'
                }],
                where:{
                    mascota_id: args.mascota_id
                }
            })
        }
    },
    Mutation: {
        saveComidaMascota: (_,args, {models}) =>{
            return models.ComidaMascota.create(args)
        },
        EditComidaMascota: (_, args, {models}) =>{
            return models.ComidaMascota.update(args,{
                where:{
                    id: args.id
                }
            });
        }
    }
}