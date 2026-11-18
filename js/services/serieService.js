

export async function getData() {
  message.textContent = "Chargement...";
  tab=[]
  try {
    const response = await api.get('/series');
  
    const sériess = response.data;
    message.textContent = "";
    
    séries=response.data
    affichage(séries)
    console.log(séries);
    
 
  } catch (error) {

  }
}


async function suprimerSérie(id) {
    try {
        const response = await api.delete(`/series/${id}`);
        console.log(response.data)
        console.log(response.status)
       
        await getData()
    } catch (error) {
        
    }
    
}


async function ajouterSérie() {
    objSérie ={
    
        "image":"",
        "name":sérieName.value,
        "language": languageSérie.value,
        "genres":sériegenre.value.split(",").map(g=>g.trim()),
        "status": "Ended",
        "summary":sérieDescription.value
    }
    
    try {
        
        const response = await api.post('/series',objSérie);
        console.log(response.data);
        console.log(response.status);
        séries.push(response.data)
        console.log(séries);
        affichage(séries)
        
        sérieName.value=""
        sériegenre.value=""
        sérieDescription.value=""
        languageSérie.value=""
       
        
    }catch (error) {
            
    }
}


async function chercherSérie(titre,genre,langue ) {
    console.log(genre);
    
    try {
        const response = await api.get('/series',{
            params:{
                name:titre,
                genres:[genre],
                language:langue 

            }
        })
        console.log(response.data);
        let séries=response.data
        console.log(séries);
        
        affichage(séries)
   
        
    } catch (error) {
        
    }
    
}


async function modifierSérie(id){
    try {
        const response = await api.patch(`/series/${id}`,{
            name:sérieName.value
        });
        let série=(response.data);
        séries.forEach(s =>{
        if(s.id == série.id){
            s.name=série.name
        }
      
       })
  
      console.log(séries);
       affichage(séries)

        sérieName.value=""
        pourHidden.forEach(div =>{
            div.hidden=false
        })
        buttonAjouter.textContent=("＋ Ajouter la série")
        buttonAnnuler.hidden=true
        
    } catch (error) {
        
    }
}
