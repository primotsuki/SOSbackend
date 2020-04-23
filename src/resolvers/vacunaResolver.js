export default {
    Query: {
        allVacuna: (_,args,{models}) =>{
            return models.Vacuna.findAll()
        }
    }
}