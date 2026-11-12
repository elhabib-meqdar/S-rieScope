
let séries=[]
let tableauBackUp =[...séries]
const listSéries =document.getElementById("listSéries")
const buttonAjouter =document.getElementById("buttonAjouter")
const sérieDescription =document.getElementById("sérieDescription")
const sériegenre =document.getElementById("genreSérie")
const sérieName =document.getElementById("sérieName")
const recherchParGenre=document.getElementById("recherchParGenre")
const recherchParNom =document.getElementById("recherchParNom")
const nombreSériesAficher=document.getElementById("nombreSériesAficher")
const buttonRéinitialiser =document.getElementById("buttonRéinitialiser")

let objSérie ={
    "id":null,
    "image":"",
    "name":"",
    "genres":"",
    "status": "Ended",
    "summary":""
}
let r
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
        console.log(resultat);
        
        objSérie={
        "image":série.image.medium,
        "id":série.id,
        "name":série.name,
        "genres":(série.genres),
        "status": "Ended",
        "summary":série.summary+"..."
        }
        if(a<=20){
            séries.push(objSérie)
        }
    })
    tableauBackUp =[...séries]

 
   
    affichage(séries)
  
  } catch (erreur) {
    
  }
}
getData()



let genreSérieV=sériegenre.value.split(",")



buttonAjouter.addEventListener("click" ,() =>{
    if(sérieName.value !="" &&
        sérieDescription !="" &&
        sériegenre !=""){

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



function affichage (t=séries){
    listSéries.replaceChildren()
    t.forEach(série =>{

        let nombreSéries=t.length

        nombreSériesAficher.textContent=(nombreSéries +" séries affichées")
        nombreSériesAficher.classList.add('text-[#BABABA]','pt-2')

        const sérieCarte =document.createElement("article")
        listSéries.append(sérieCarte)
        sérieCarte.classList.add('border','border-[#393939]','rounded-lg','mb-5')

        const image =document.createElement("img")
        if (série.image ==""){
            image.src="images/1000021577.png"
        }else{
               image.src=(série.image)
        }
        sérieCarte.append(image)
        image.classList.add('rounded-t-lg','h-[250px]','w-full')


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
    console.log(t);
    
}


recherchParNom.addEventListener("input",(e) =>{
    e.preventDefault()
    rechercherSeries()
})

recherchParGenre.addEventListener("change", (e) =>{
    e.preventDefault()
    rechercherSeries()
})

buttonRéinitialiser.addEventListener("click", (e) =>{
    e.preventDefault()
    recherchParNom.value=""
    recherchParGenre.value=""
    affichage(séries)})


function rechercherSeries() {

    let nom = recherchParNom.value.toLowerCase().trim()
    let genre = recherchParGenre.value

    let resultat = séries.filter(série => {

        let nomCorrespond = série.name.toLowerCase().includes(nom)

        let genreCorrespond = genre === "" || série.genres.includes(genre)

        return nomCorrespond && genreCorrespond

    })

    affichage(resultat)
}















