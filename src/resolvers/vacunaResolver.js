export default {
    Query: {
        allVacuna: (_,args,{models}) =>{
            models.Vacuna.findAll()
        }
    }
}