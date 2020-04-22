export default {
    Query: {
        AllMantenimiento: (_,args,{models}) =>{
            return models.Mantenimiento.findAll({
                include: [{
                    model: models.GrupoMantenimiento,
                    as: 'grupo'
                }]
            })
        },
        MantenimientoById: (_,args,{models}) =>{
            return models.Mantenimiento.findOne({
                where:{
                    id: args.id
                }
            })
        }
    }
}