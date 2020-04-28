export default {
    Query: {
        allTestDiagnostico: (_,args,{models}) =>{
            return models.TestDiagnostico.findAll()
        }
    }
}