export default {
    Query: {
        TestNumByMascota: (_, args, {models}) =>{
            return models.TestNumMascota.findAll({
                include:[{
                    model: models.TestNumerico,
                    as: 'test'
                },{
                    model: models.UnidadMedida,
                    as: 'unidad'
                }],
                where:{
                    mascota_id: args.mascota_id
                }
            })
        }
    },
    Mutation: {
        saveTestNumMascota: (_,args, {models}) =>{
            console.log(args);
            return models.TestNumMascota.create(args)
        }
    }
}