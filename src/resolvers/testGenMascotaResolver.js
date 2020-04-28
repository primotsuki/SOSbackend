export default {
    Query: {
        testGenByMascota: (_, args, {models}) =>{
            return models.TestGenMascota.findAll({
                include:[{
                    model: models.TestGenetico,
                    as: 'test'
                }],
                where:{
                    mascota_id: args.mascota_id
                }
            })
        }
    },
    Mutation: {
        saveTestGenByMascota: (_,args, {models}) =>{
            return models.TestGenMascota.create(args)
        }
    }
}