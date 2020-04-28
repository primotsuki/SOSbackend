export default {
    Query: {
        testDiagByMascota: (_, args, {models}) =>{
            return models.TestDiagMascota.findAll({
                include:[{
                    model: models.TestDiagnostico,
                    as: 'test'
                }],
                where:{
                    mascota_id: args.mascota_id
                }
            })
        }
    },
    Mutation: {
        saveTestDiagByMascota: (_,args, {models}) =>{
            return models.TestDiagMascota.create(args)
        }
    }
}