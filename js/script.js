
let séries=[]

const listSéries =document.getElementById("listSéries")
const buttonAjouter =document.getElementById("buttonAjouter")
const sérieDescription =document.getElementById("sérieDescription")
const sériegenre =document.getElementById("genreSérie")
const sérieName =document.getElementById("sérieName")
const recherchParGenre=document.getElementById("recherchParGenre")
const recherchParNom =document.getElementById("recherchParNom")
const nombreSériesAficher=document.getElementById("nombreSériesAficher")
const buttonRéinitialiser =document.getElementById("buttonRéinitialiser")
const sérieDetel =document.getElementById("sérieDetel")
const sériesEtNombre =document.getElementById("sériesEtNombre")

let objSérie ={
    "id":null,
    "image":"",
    "name":"",
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
let rechercheInput
let filterGenre
let a=0
async function getData() {
  const url = "https://api.tvmaze.com/shows?page=0";
  try {
    const reponse = await fetch(url);
    if (!reponse.ok) {
      throw new Error(`Statut de réponse : ${reponse.status}`);
    }

    const resultat = await reponse.json();
  
    resultat.forEach(série =>{

        a++
        
        
        objSérie={
        "image":série.image.medium,
        "id":série.id,
        "name":série.name,
        "genres":(série.genres),
        "status": (série.status),
        "summary":série.summary,
        "language":(série.language),
        "premiered":(série.premiered),
        "ended":(série.ended)
        }

        if(a<=20){
            séries.push(objSérie)
        }
    })
   

 
   
    affichage(séries)
  
  } catch (erreur) {
    
  }
  
  
}
getData()



let genreSérieV=sériegenre.value.split(",")



buttonAjouter.addEventListener("click" ,() =>{
    if(sérieName.value !="" &&
        sérieDescription !="" &&
        sériegenre.value !=""){

        objSérie ={
        "id":null,
        "image":"",
        "name":sérieName.value,
        "genres":sériegenre.value.split(",").map(g=>g.trim()),
        "status": "Ended",
        "summary":sérieDescription.value
        }
        séries.push(objSérie)
    
        sérieName.value=""
        sériegenre.value=""
        sérieDescription.value=""
        
        affichage(séries)
    }
})






recherchParNom.addEventListener("input",(e) =>{
    e.preventDefault()
    rechercherSeries()
    console.log(nombreSéries);
    
})

recherchParGenre.addEventListener("change", (e) =>{
    e.preventDefault()
    rechercherSeries()
    console.log(nombreSéries);
    
})

buttonRéinitialiser.addEventListener("click", (e) =>{
    e.preventDefault()
    recherchParNom.value=""
    recherchParGenre.value=""
    affichage(séries)})
   console.log(nombreSéries);
   
function affichage (t=séries){
    listSéries.replaceChildren()
    t.forEach(série =>{

        nombreSéries=t.length
  
        nombreSériesAficher.textContent=(nombreSéries +" séries affichées")
        nombreSériesAficher.classList.add('text-[#BABABA]','pt-2','mb-3')

        const sérieCarte =document.createElement("article")
        listSéries.append(sérieCarte)
        sérieCarte.classList.add('border','border-[#393939]','rounded-lg','mb-5')
        sérieCarte.addEventListener("click", (e) =>{
            e.preventDefault()
            affichageDet(série)
            sérieDetel.hidden=false
        })

        const image =document.createElement("img")
        if (série.image ==""){
            image.src="images/1000021577.png"
        }else{
               image.src=(série.image)
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
        

        const sérieDescription =document.createElement("p")
        sérieDescription.innerHTML=série.summary
        sérieCarte.append(sérieDescription)
        sérieDescription.classList.add('mb-2','ml-4','text-sm','pt-3','line-clamp-2')
    
    })
    
}



function rechercherSeries() {

    let nom = recherchParNom.value.toLowerCase().trim()
    let genre = recherchParGenre.value

    let resultat = séries.filter(série => {

        let nomCorrespond = série.name.toLowerCase().includes(nom)

        let genreCorrespond = genre === "" || série.genres.includes(genre)

        return nomCorrespond && genreCorrespond

    })
    
    

    affichage(resultat)
      nombreSériesAficher.textContent=(nombreSéries +" séries affichées")
}



  
function affichageDet(s){
    sérieDetel.replaceChildren()

    sérieDetel.classList.add('grid','rounded-lg','md:grid-cols-2','border','border-[#393939]','mb-5','gap-3')
    sériesEtNombre.hidden=true

    const image =document.createElement("img")
    image.src=(s.image)
    sérieDetel.append(image)
    image.classList.add('w-[100%]','h-[auto]','rounded-t-lg','md:rounded-l-lg')

    const divInfo =document.createElement("div")
    sérieDetel.append(divInfo)
    divInfo.classList.add('mx-5')

        const divTitre =document.createElement("div")
        divInfo.append(divTitre)
        divTitre.classList.add('flex','justify-between','items-center')

            const sérieTitre =document.createElement("h3")
            sérieTitre.textContent=(s.name)
            divTitre.append(sérieTitre)
            sérieTitre.classList.add('font-bold','text-3xl','my-4')

            const sérieStatus =document.createElement("p")
            sérieStatus.textContent=(s.status)
            divTitre.append(sérieStatus)
            sérieStatus.classList.add('bg-[#292929]','rounded-xl','px-1')

        const sérieDescription =document.createElement("p")
        sérieDescription.innerHTML=s.summary
        divInfo.append(sérieDescription)
        sérieDescription.classList.add('mb-5','text-md','pt-3')

        const divgenre =document.createElement("div")
        divInfo.append(divgenre)
        divgenre.classList.add('flex','mb-5')

        s.genres.forEach(genre =>{
        const genreDeSérie = document.createElement("p")
        divgenre.append(genreDeSérie)
        genreDeSérie.textContent=genre
        genreDeSérie.classList.add('bg-[#292929]','rounded-xl','px-1','ml-4')
        })


        const sérieLanguage =document.createElement("p")
        sérieLanguage.textContent=("language : "+(s.language))
        divInfo.append(sérieLanguage)

        const sériePremiered =document.createElement("p")
        sériePremiered.textContent=("started : "+(s.premiered))
        divInfo.append(sériePremiered)

        if(s.status =="Ended"){
            const sériEnded =document.createElement("p")
            sériEnded.textContent=("ended : "+(s.ended))
            divInfo.append(sériEnded)
        }
    const buttonReturn =document.createElement("button")
    sérieDetel.append(buttonReturn)
    buttonReturn.textContent=("return")
    buttonReturn.classList.add('bg-white','text-black','m-5','rounded-md','h-12','w-auto')
    buttonReturn.addEventListener("click", () =>{

        sériesEtNombre.hidden=false
        sérieDetel.hidden=true
    })
}











