import { api } from "./api.js"





export async function getData() {
    const response = await api.get('/series');
    return response
}





export async function suprimer(id) {
    const response = await api.delete(`/series/${id}`);
    return response  
}


export async function ajouter(série) {
    const response = await api.post('/series',série);
    return response
}


export async function filtrage(titre,genre,langue ) {
    const response = await api.get('/series',{
        params:{
            name:titre,
            genre:genre,
            language:langue 

        }
    })
    return response
}


export async function modifier(id){
   
    
    const response = await api.patch(`/series/${id}`,{
        name:sérieName.value,
        // genres:sériegenre.value.split(",").map(g=>g.trim()),
        summary:sérieDescription.value,
        language:languageSérie.value

    });
    return response.data
}
