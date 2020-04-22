import {Sequelize} from 'sequelize'

export default {
    Query: {
        MantenMascota: (_, args, {models}) =>{
            return models.MantenimientoMascota.findAll({
                include:[{
                    model: models.Mantenimiento,
                    as: 'mantenimiento'
                }],
                where: Sequelize.and(
                    {mascota_id: args.mascota_id},
                    {mantenimiento_id: args.manten_id}
                )
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