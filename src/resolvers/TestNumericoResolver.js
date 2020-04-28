export default {
    Query: {
        allTestNumerico: (_,args,{models}) =>{
            return models.TestNumerico.findAll()
        }
    }
}