export default {
    Query: {
        AllMedicamentoMascota: (_, args, {models})=>{
            models.MedicamentoMascota.findAll({
                include:[{
                    model: models.Medicamento,
                    as: 'medicamento'
                }]
            })
        },
        medicamentoByMascota: (_, args, {models}) =>{
            return models.MedicamentoMascota.findAll({
                include:[{
                    model: models.Medicamento,
                    as: 'medicamento'
                }],
                where:{
                    mascota_id: args.mascota_id
                }
            })
        }
    },
    Mutation: {
        saveMedicamentoMascota: (_,args, {models}) =>{
            return models.MedicamentoMascota.create(args)
        }
    }
}