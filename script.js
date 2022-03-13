let row1 = Array.from(document.querySelectorAll(".r1"))
let row2 = Array.from(document.querySelectorAll(".r2"))
let row3 = Array.from(document.querySelectorAll(".r3"))
let row4 = Array.from(document.querySelectorAll(".r4"))

let button = document.querySelector("button")

let column1 = Array.from(document.querySelectorAll(".c1"))
let column2 = Array.from(document.querySelectorAll(".c2"))
let column3 = Array.from(document.querySelectorAll(".c3"))
let column4 = Array.from(document.querySelectorAll(".c4"))


svi_tileovi=row1.concat(row2).concat(row3).concat(row4)
let pocetni_tile = svi_tileovi[Math.floor(Math.random()*svi_tileovi.length)];
pocetni_tile.innerText="2"
svi_brojevi=[]
svi_tileovi.forEach(e=>{
    svi_brojevi.push(e.innerText)
})

function is_win(){
    if(svi_tileovi.some(e=>e.innerText==="2048")) {
        document.body.style.backgroundColor="green"
    }
}

function is_lost(){
    if(svi_tileovi.some(e=>e.innerText==="")) return false

    for(let i = 0; i<3;i++){
        if(row1[i].innerText===row1[i+1].innerText) return false
        if(row2[i].innerText===row2[i+1].innerText) return false
        if(row3[i].innerText===row3[i+1].innerText) return false
        if(row4[i].innerText===row4[i+1].innerText) return false

        if(column1[i].innerText===column1[i+1].innerText) return false
        if(column2[i].innerText===column2[i+1].innerText) return false
        if(column3[i].innerText===column3[i+1].innerText) return false
        if(column4[i].innerText===column4[i+1].innerText) return false
    }
    document.body.style.backgroundColor="red"
    console.log("dfsc")
    return true
}

function dodaj_novi_tile(){
    let polje_za_random=[]
    svi_tileovi.forEach(e=>{
        if(e.innerText==="") polje_za_random.push(e)
    })
    let random_elem = polje_za_random[Math.floor(Math.random()*polje_za_random.length)];
    random_elem.innerText="2"
    for(let i = 0; i<16;i++){
        svi_brojevi[i]=svi_tileovi[i].innerText
    }
}

function is_changed(){
    for(let i = 0; i<16;i++){
        if(svi_tileovi[i].innerText!==svi_brojevi[i]){
            return true
        }
    }
    return false
}



function list_of_elements_in_row(row){
    let lista=[]
    row.forEach(e=>{
        if (e.innerText!=="") lista.push(e)
    })
    return lista 
}

function list_of_elements_in_column(column){
    let lista=[]
    column.forEach(e=>{
        if (e.innerText!=="") lista.push(e)
    })
    return lista 
}

function desno(row1){
    lista_prvi_red=list_of_elements_in_row(row1).reverse()
        if(lista_prvi_red.length>0){
            let j = 3
            lista_prvi_red.forEach(e=>{
                row1[j].innerText=e.innerText
                j--
            })
            for(let i = 0; i<=j;i++)row1[i].innerText=""
            let brojac_suma=0;
            for(let i = 3; i>=1;i--){
                if(row1[i].innerText!=="" && row1[i].innerText===row1[i-1].innerText){
                    brojac_suma++
                    row1[i].innerText=(parseInt(row1[i].innerText)*2)
                    row1[i-1].innerText=""
                    for(let k =i-1;k>=1;k--)row1[k].innerText=row1[k-1].innerText
                }
            }
            if(brojac_suma===3) row1[1].innerText=""           
        }
}


function lijevo(row1){
    lista_prvi_red=list_of_elements_in_row(row1)
    if(lista_prvi_red.length>0){
        let j = 0
        lista_prvi_red.forEach(e=>{
            row1[j].innerText=e.innerText
            j++
        })

        for(let i = 3; i>=j;i--)row1[i].innerText=""

        let brojac_suma=0;
        for(let i = 0; i<=2;i++){
            if(row1[i].innerText!=="" && row1[i].innerText===row1[i+1].innerText){
                brojac_suma++
                row1[i].innerText=(parseInt(row1[i].innerText)*2)
                row1[i+1].innerText=""
                for(let k =i+1;k<=2;k++) row1[k].innerText=row1[k+1].innerText
            }
        }
        if(brojac_suma===3) row1[2].innerText="" 
                  
    }
}

function dolje(column1){
    lista_prvi_red=list_of_elements_in_column(column1).reverse()
        if(lista_prvi_red.length>0){
            let j = 3
            lista_prvi_red.forEach(e=>{
                column1[j].innerText=e.innerText
                j--
            })
            for(let i = 0; i<=j;i++)column1[i].innerText=""
            let brojac_suma=0;
            for(let i = 3; i>=1;i--){
                if(column1[i].innerText!=="" && column1[i].innerText===column1[i-1].innerText){
                    brojac_suma++
                column1[i].innerText=(parseInt(column1[i].innerText)*2)
                    column1[i-1].innerText=""
                    for(let k =i-1;k>=1;k--)column1[k].innerText=column1[k-1].innerText
                }
            }
            if(brojac_suma===3) column1[1].innerText="" 
                      
        }
}

function gore(column1){
    lista_prvi_red=list_of_elements_in_column(column1)
        if(lista_prvi_red.length>0){
            let j = 0
            lista_prvi_red.forEach(e=>{
                column1[j].innerText=e.innerText
                j++
            })

            for(let i = 3; i>=j;i--)column1[i].innerText=""

            let brojac_suma=0;
            for(let i = 0; i<=2;i++){
                if(column1[i].innerText!=="" && column1[i].innerText===column1[i+1].innerText){
                    brojac_suma++
                    column1[i].innerText=(parseInt(column1[i].innerText)*2)
                    column1[i+1].innerText=""
                    for(let k =i+1;k<=2;k++) column1[k].innerText=column1[k+1].innerText
                }
            }
            if(brojac_suma===3) column1[2].innerText="" 
                      
        }
}


document.body.addEventListener("keydown",(event)=>{
    if (event.key === "ArrowRight"){
        desno(row1)
        desno(row2)
        desno(row3)
        desno(row4)
        
        if(is_changed()){
            dodaj_novi_tile()
        }
        is_win()
        is_lost()

    }
})

document.body.addEventListener("keydown",(event)=>{
    if (event.key === "ArrowLeft"){
        lijevo(row1)
        lijevo(row2)
        lijevo(row3)
        lijevo(row4)

        if(is_changed()){
            dodaj_novi_tile()
        }
        is_win()
        is_lost()

    }
})

document.body.addEventListener("keydown",(event)=>{
    if (event.key === "ArrowDown"){
        dolje(column1)
        dolje(column2)
        dolje(column3)
        dolje(column4)

        if(is_changed()){
            dodaj_novi_tile()
        }
        is_win()
        is_lost()

    }
})

document.body.addEventListener("keydown",(event)=>{
    if (event.key === "ArrowUp"){
        gore(column1)
        gore(column2)
        gore(column3)
        gore(column4)

        if(is_changed()){
            dodaj_novi_tile()
        }
        is_win()
        is_lost()

    }
})

button.addEventListener("click",()=>{
    window.location.reload()
})