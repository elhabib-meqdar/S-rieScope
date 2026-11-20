
import { suprimer } from "./services/serieService.js";





export async function suprimerSérie(id) {

    try {
        const response = await suprimer(id)
        console.log(response.data)
        console.log(response.status)
        

        séries =séries.filter(série =>série.id !=id)
        // affichage(séries)
        console.log(séries);
        
        
    } catch (error) {
        // afficherErreur(error)
    }
    return response
}