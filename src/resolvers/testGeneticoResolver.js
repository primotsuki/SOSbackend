export default {
    Query: {
        allTestGenetico: (_,args,{models}) =>{
            return models.TestGenetico.findAll()
        }
    }
}