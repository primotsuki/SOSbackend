export default {
    Query: {
        AllMantenimientoMascota: (_, args, {models}) =>{
            return models.MantenimientoMascota.findAll({
                include:[{
                    model: models.Mantenimiento,
                    as: 'mantenimiento'
                }]
            })
        }
    },
    Mutation: {
        saveMantenMascota: (_, args, {models}) =>{
            return models.MantenimientoMascota.create(args,{
                include:[{
                    model: models.Mantenimiento,
                    as: 'mantenimiento'
                }]
            })
        }
    }
}