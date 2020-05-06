export default {
    Query: {
        AllVacunaMascota: (_, args, {models})=>{
            models.VacunasMascota.findAll({
                include:[{
                    model: models.Vacuna,
                    as: 'vacuna'
                }]
            })
        },
        vacunaByMascota: (_, args, {models}) =>{
            return models.VacunasMascota.findAll({
                include:[{
                    model: models.Vacuna,
                    as: 'vacuna'
                }],
                where:{
                    mascota_id: args.mascota_id
                }
            })
        }
    },
    Mutation: {
        saveVacunaMascota: (_,args, {models}) =>{
            return models.VacunasMascota.create(args)
        },
        EditVacunaMascota: (_, args, {models}) => {
            return models.VacunasMascota.update(args,{
                where:{
                    id: args.id
                }
            })
        }
    }
}