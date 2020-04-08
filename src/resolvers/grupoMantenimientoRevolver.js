export default {
    Query:{
        AllGrupoMantenimiento: (_,args, {models}) => {
            return models.GrupoMantenimiento.findAll({
                include:[{
                    model: models.Mantenimiento,
                    as: 'mantenimientos'
                }]
            })
        }
    }
}