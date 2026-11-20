// let api =axios.create({ baseURL: 'https://seriescope-api.vercel.app/api', timeout: 8000, headers: { 'X-Learner': 'e.meqdar' } })

import { api } from "./services/api.js";
// import { getAll } from "./services/serieService.js";

import { getData } from "./services/serieService.js";
import { suprimer } from "./services/serieService.js";
import { ajouter } from "./services/serieService.js";
import { filtrage } from "./services/serieService.js";
import { modifier } from "./services/serieService.js";
// import { affichage } from "./ui/cards.js";


// import { chercherSérie } from "./data/store.js";
// import { carteSérie } from "./ui/cards.js";

let séries=[]

const listSéries =document.getElementById("listSéries")
const sérieDescription =document.getElementById("sérieDescription")
const sériegenre =document.getElementById("genreSérie")
const sérieName =document.getElementById("sérieName")
const recherchParGenre=document.getElementById("recherchParGenre")
const recherchParNom =document.getElementById("recherchParNom")
const recherchParLanguage =document.getElementById("recherchParLanguage")
const nombreSériesAficher=document.getElementById("nombreSériesAficher")
const buttonRéinitialiser =document.getElementById("buttonRéinitialiser")
const buttonAjouter =document.getElementById("buttonAjouter")
const buttonAnnuler =document.getElementById("buttonAnnuler")
// const sérieDetel =document.getElementById("sérieDetel")
// const sériesEtNombre =document.getElementById("sériesEtNombre")
const message=document.getElementById("message")
const languageSérie=document.getElementById("languageSérie")





let objSérie ={
    "id":null,
    "imageSrc":"",
    "name":"",
    "language": "",
    "genres":"",
    "status": "Ended",
    "summary":"",
    "language":"",
    "premiered":"",
    "ended":""
}
let r
let nombreSéries=0
let tab=[]
let tableaulangeu=[
    "English","Mandarin Chinese",
    "Arabic","Spanish","French",
    "Hindi","Urdu","Portuguese","Turkish"
]
// let rechercheInput
// let filterGenre
let a=0
let idSérieModifier
let modification=false
// let genreSérieV=sériegenre.value.split(",")

  



async function getAll() {
  message.textContent = "Chargement...";
  tab=[]
  try {
    
    const response = await getData()
    
    message.textContent = "";
    
    séries=response.data
    affichage(séries)
    console.log(séries);
    
  } catch (error) {
    afficherErreur(error)
  }
}


async function suprimerSérie(id) {
    try {
        const response = await suprimer(id)
        console.log(response.data)
        console.log(response.status)
        

        séries =séries.filter(série =>série.id !=id)
        affichage(séries)
        console.log(séries);
        
        
    } catch (error) {
        afficherErreur(error)
    }
    
}

getAll()



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
        
        const response = await ajouter(objSérie)
        console.log(response.data);
        console.log(response.status);
        séries.unshift(response.data)
        console.log(séries);
        affichage(séries)
        
        sérieName.value=""
        sériegenre.value=""
        sérieDescription.value=""
        languageSérie.value=""
        message.textContent=("une série à étè ajouter")

        setTimeout(() => {
            message.textContent=""
        }, 5000);
       
        
    }catch (error) {
        afficherErreur(error) 
    }
}





buttonAjouter.addEventListener("click" ,() =>{
   
    
    if(modification==false){
        if(sérieName.value.trim() !=="" &&
            sérieDescription.value!=="" &&
            sériegenre.value !=""){
        
            ajouterSérie(objSérie)

        }
    }else{
        
        modifierSérie(idSérieModifier)
        // buttonSuprimer.hidden=false
        // if (sérieName!="") {
        //     modifierSérie(idSérieModifier)

        // }
        
    }
})

async function modifierSérie(id){
        
    try {
        
        const response = await modifier(id)
      
        let série=(response);
        console.log(response.data);
            console.log(sériegenre.value);
    console.log(sériegenre.value.split(","))
        
        séries.forEach(s =>{
            
            if(s.id == série.id){
                s.name=série.name
                s.summary=série.summary
                s.genres= série.genres
                s.language = série.language   
            }
      
        })
  
      console.log(séries);
       affichage(séries)

        sérieName.value=""
        sérieDescription.value=""
        sériegenre.value=""
       
        buttonAjouter.textContent=("＋ Ajouter la série")
        buttonAnnuler.hidden=true
        
    } catch (error) {
        // afficherErreur(error)
        
        
    }
}





async function chercherSérie(titre,genre,langue ) {
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
        localStorage.setItem("série",JSON.stringify(sériess))
        
    } catch (error) {
        afficherErreur(error)
    }
    
}

buttonAnnuler.addEventListener("click",() =>{
    sérieName.value=""
    sérieDescription.value=""
    sériegenre.value=""
    languageSérie.value=""
    
    buttonAjouter.textContent=("＋ Ajouter la série")
    buttonAnnuler.hidden=true
    buttonSuprimer.hidden=false
    message.textContent=""
})




recherchParNom.addEventListener("input",(e) =>{
    let langue = recherchParLanguage.value
    let genre = recherchParGenre.value
    let titre = recherchParNom.value.toLowerCase().trim()
    e.preventDefault()

    
    chercherSérie(titre,genre,langue)
   
   
    
})

recherchParGenre.addEventListener("change", (e) =>{
    e.preventDefault()
    let langue = recherchParLanguage.value
    let titre = recherchParNom.value.toLowerCase().trim()
    let genre = recherchParGenre.value
   
    
    chercherSérie(titre,genre,langue)

    
})


recherchParLanguage.addEventListener("change", (e) =>{
    e.preventDefault()
    let langue = recherchParLanguage.value
    let titre = recherchParNom.value.toLowerCase().trim()
    let genre = recherchParGenre.value
   
    
    chercherSérie(titre,genre,langue)

    
})

buttonRéinitialiser.addEventListener("click", (e) =>{
    e.preventDefault()
    recherchParNom.value=""
    recherchParGenre.value=""
    recherchParLanguage.value=""
    message.textContent=""
    affichage(séries)
})


    



   
function affichage (séries){
    
    listSéries.replaceChildren()

    nombreSéries=séries.length
  
    nombreSériesAficher.textContent=(nombreSéries +" séries affichées")

   
  
    
    
    nombreSériesAficher.classList.add('text-[#BABABA]','pt-2','mb-3',)

    séries.forEach(série =>{
       
        carteSérie(série)
        function carteSérie(série){
        lang(série.language)
        
        


        const sérieCarte =document.createElement("article")
        listSéries.append(sérieCarte)
        sérieCarte.classList.add('border','border-[#393939]','rounded-lg','mb-5',)
        // sérieCarte.addEventListener("click", (e) =>{
        //     e.preventDefault()
        //     affichageDet(série)
        //     sérieDetel.hidden=false
        // })

        const image =document.createElement("img")
        
        if(série.image ==null){
           image.src= "images/1000021577.png"
        }else{
            image.src=(série.image.medium)
        }
  
        
        sérieCarte.append(image)
        image.classList.add('rounded-t-lg','h-[300px]','w-full')


        const sérieTitre =document.createElement("h3")
        sérieTitre.textContent=(série.name)
        sérieCarte.append(sérieTitre)
        sérieTitre.classList.add('font-bold','text-lg','m-4')

        const divGenres =document.createElement("div")
        sérieCarte.append(divGenres)
        divGenres.classList.add('flex')

        série.genres.forEach(genre =>{
            if(!tab.includes(genre)){
               
            
                tab.push(genre)
        
                const genr =document.createElement("option")
                recherchParGenre.append(genr)
                genr.classList.add('text-black')
                genr.textContent=genre
                genr.value=genre
            }
            const genreDeSérie = document.createElement("p")
            divGenres.append(genreDeSérie)
            genreDeSérie.textContent=genre
            genreDeSérie.classList.add('bg-[#292929]','rounded-xl','px-1','ml-4',)
        })
        
        const sérieDescrip =document.createElement("p")
        sérieDescrip.innerHTML=série.summary
        sérieCarte.append(sérieDescrip)
        sérieDescrip.classList.add('mb-5','ml-4','text-sm','pt-3','line-clamp-2')

        const buttonSuprimer =document.createElement("button")
        sérieCarte.append(buttonSuprimer)
        buttonSuprimer.textContent=("suprimer")
        buttonSuprimer.classList.add('bg-red-500','text-black','font-semibold','rounded-md','h-12','w-full','mb-5')
        
        buttonSuprimer.addEventListener("click",() =>{
            let id =série.id
            suprimerSérie(id)
            console.log(id);
            
        })

        const buttonModifier = document.createElement("button")
        sérieCarte.append(buttonModifier)
        buttonModifier.textContent=("Modifier")
        buttonModifier.classList.add('bg-white','text-black','font-semibold','rounded-md','h-12','w-full','mb-5')
        
        buttonModifier.addEventListener("click",() =>{
            idSérieModifier =série.id
            modification=true

            sérieName.value = série.name
            sérieDescription.value = série.summary
            sériegenre.value = série.genres.join()
            languageSérie.value = série.language
           
            
            buttonAjouter.textContent="Enregistrer"
          
            buttonAnnuler.hidden=false
            buttonSuprimer.hidden=true
            
            console.log(idSérieModifier);
        })
        }
    
    })
}



function lang (language){
  
    
    if(!tableaulangeu.includes(language)){
        
        tableaulangeu.push(language)
            tableaulangeu.forEach(lang =>{
            const languag =document.createElement("option")
            recherchParLanguage.append(languag)
            languag.classList.add('text-black')
            languag.textContent=lang
            languag.value=lang
        })
    }
        
}

function afficherErreur(error) {

    if (error.response) {

        let status = error.response.status;

        if (status === 400) {
            message.textContent = "Données invalides";
        }else if (status === 404) {
            message.textContent = "Série introuvable";
        }else if (status === 409) {
            message.textContent = "Cette série existe déjà";
        }else if (status === 500) {
            message.textContent = "Erreur du serveur";
        }else {
            message.textContent = "Une erreur est survenue";
        }
    }
//     }
//     else if (error.code === "ECONNABORTED") {
//         message.textContent = "Le délai de connexion est dépassé";
//     }
//     else {
//         message.textContent = "Impossible de contacter le serveur";
//     }
}

// function rechercherSeries() {

//     let nom = recherchParNom.value.toLowerCase().trim()
//     let genre = recherchParGenre.value

//     let resultat = séries.filter(série => {

//         let nomCorrespond = série.name.toLowerCase().includes(nom)

//         let genreCorrespond = genre === "" || série.genres.includes(genre)

//         return nomCorrespond && genreCorrespond

//     })
    
    

//     affichage(resultat)
//       nombreSériesAficher.textContent=(nombreSéries +" séries affichées")
// }


  
// function affichageDet(s){
//     sérieDetel.replaceChildren()

//     sérieDetel.classList.add('grid','rounded-lg','md:grid-cols-2','border','border-[#393939]','mb-5','gap-3')
//     sériesEtNombre.hidden=true

//     const image =document.createElement("img")
//     image.src=(s.image)
//     sérieDetel.append(image)
//     image.classList.add('w-[100%]','h-[auto]','rounded-t-lg','md:rounded-l-lg')

//     const divInfo =document.createElement("div")
//     sérieDetel.append(divInfo)
//     divInfo.classList.add('mx-5')

//         const divTitre =document.createElement("div")
//         divInfo.append(divTitre)
//         divTitre.classList.add('flex','justify-between','items-center')

//             const sérieTitre =document.createElement("h3")
//             sérieTitre.textContent=(s.name)
//             divTitre.append(sérieTitre)
//             sérieTitre.classList.add('font-bold','text-3xl','my-4')

//             const sérieStatus =document.createElement("p")
//             sérieStatus.textContent=(s.status)
//             divTitre.append(sérieStatus)
//             sérieStatus.classList.add('bg-[#292929]','rounded-xl','px-1')

//         const sérieDescription =document.createElement("p")
//         sérieDescription.innerHTML=s.summary
//         divInfo.append(sérieDescription)
//         sérieDescription.classList.add('mb-5','text-md','pt-3')

//         const divgenre =document.createElement("div")
//         divInfo.append(divgenre)
//         divgenre.classList.add('flex','mb-5')

//         s.genres.forEach(genre =>{
//         const genreDeSérie = document.createElement("p")
//         divgenre.append(genreDeSérie)
//         genreDeSérie.textContent=genre
//         genreDeSérie.classList.add('bg-[#292929]','rounded-xl','px-1','ml-4')
//         })


//         const sérieLanguage =document.createElement("p")
//         sérieLanguage.textContent=("language : "+(s.language))
//         divInfo.append(sérieLanguage)

//         const sériePremiered =document.createElement("p")
//         sériePremiered.textContent=("started : "+(s.premiered))
//         divInfo.append(sériePremiered)

//         if(s.status =="Ended"){
//             const sériEnded =document.createElement("p")
//             sériEnded.textContent=("ended : "+(s.ended))
//             divInfo.append(sériEnded)
//         }
//     const buttonReturn =document.createElement("button")
//     sérieDetel.append(buttonReturn)
//     buttonReturn.textContent=("return")
//     buttonReturn.classList.add('bg-white','text-black','m-5','rounded-md','h-12','w-auto')
//     buttonReturn.addEventListener("click", () =>{

//         sériesEtNombre.hidden=false
//         sérieDetel.hidden=true
//     })
// }











