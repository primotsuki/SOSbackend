export default {
    Query: {
        allMedicamento: (_,args,{models}) =>{
            return models.Medicamento.findAll()
        }
    }
}