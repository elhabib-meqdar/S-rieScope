
function affichage (séries){
    
    listSéries.replaceChildren()
    séries.forEach(série =>{
        
        lang(série.language)
        
        nombreSéries=séries.length
  
        nombreSériesAficher.textContent=(nombreSéries +" séries affichées")
        nombreSériesAficher.classList.add('text-[#BABABA]','pt-2','mb-3',)


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
        
        const sérieDescription =document.createElement("p")
        sérieDescription.innerHTML=série.summary
        sérieCarte.append(sérieDescription)
        sérieDescription.classList.add('mb-5','ml-4','text-sm','pt-3','line-clamp-2')

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
            buttonAjouter.textContent="Enregistrer"
            pourHidden.forEach(div =>{
                div.hidden=true
            })
            buttonAnnuler.hidden=false
            
            console.log(idSérieModifier);
        })
    
    })
}