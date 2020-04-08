export default {
    Query: {
        AllVacunaMascota: (_, args, {models})=>{
            models.VacunaMascota.findAll({
                include:[{
                    model: models.Vacuna,
                    as: 'vacuna'
                }]
            })
        }
    },
    Mutation: {
        saveVacunaMascota: (_,args, {models}) =>{
            models.VacunaMascota.findAll(args,{
                include:[{
                    model: models.vacuna,
                    as: 'vacuna'
                }]
            })
        }
    }
}