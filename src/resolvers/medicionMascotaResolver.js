import { Sequelize } from 'sequelize';
export default {
    Query:{
        MedicionesByMascota: (_,args, {models}) =>{
            return models.MedicionMascota.findAll({
                include:[{
                    model: models.TipoMedicion,
                    as: 'tipo_medicion'
                },{
                    model: models.UnidadMedida,
                    as: 'unidad'
                }],
                where: Sequelize.and(
                    {mascota_id: args.mascota_id},
                    {medicion_id: args.medicion_id}
                )
            })
        }
    },
    Mutation: {
        saveMedicionMascota: (_, args, {models}) =>{
            return models.MedicionMascota.create(args)
        }
    }
}