export default {
    Query:{
        allMascota: (_,args, {models}) => {
            return models.Mascota.findAll({
                include: [{
                    model: models.TipoMascota,
                    as: 'tipo'
                }]
            })
        }
    },
    Mutation: {
        saveMascota: (_,args, {models}) =>{
            return models.Mascota.create(args,{
                include:[{
                    model: models.TipoMascota,
                    as: 'tipo'
                }]
            })
        }
    }
}