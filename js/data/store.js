
export  function localStorage(tab){
    localStorage.setItem("série",JSON.stringify(tab))
    
}


export async function chercherSérie(titre,genre,langue ) {
    message.textContent="recherch en cours"
    
    try {
        
        const response = await filtrage(titre,genre,langue)
           
        
  
        let sériess=response.data
        console.log(sériess.length);
        
         if (sériess.length === 0){
            message.textContent=("Aucune série trouvée")
        }else{
            message.textContent=""
        }
        affichage(sériess)
        // localStorage(sériess)
        localStorage.setItem("série",JSON.stringify(sériess))
        
    } catch (error) {
        afficherErreur(error)
    }
    
}