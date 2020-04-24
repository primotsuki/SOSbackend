export default {
    Query: {
        tipoMediciones: (_, args, {models}) =>{
            return models.TipoMedicion.findAll({
                include:[{
                    model: models.UnidadMedida,
                    as: 'unidades'
                }],
                where: {
                    id: args.id
                }
            })
        }
    }
}