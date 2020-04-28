export default {
    Query: {
        allSuministro: (_,args,{models}) =>{
            return models.Suministro.findAll()
        }
    }
}