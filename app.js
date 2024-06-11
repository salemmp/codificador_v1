const input = document.getElementById('entrada')
const salida= document.getElementById('salida')
const btn= document.getElementById('btn')



const input_decodificar = document.getElementById('entrada_decodificar')
const salida_decodificar= document.getElementById('salida_decodificar')
const btn_decodificar= document.getElementById('btn_decodificar')




let abc=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z']

btn.addEventListener('click',()=>{
    let palabra=""
    let codificado=""
    palabra=input.value
    for(i=0;i<palabra.length;i++){
        indice= abc.indexOf(palabra[i])
        indice= indice+3
        codificado+=abc[indice]
    }
    console.log(codificado)
    salida.innerText=codificado
})

btn_decodificar.addEventListener('click',()=>{
    let palabra_x=""
    let decodificado=""
    palabra_x=input_decodificar.value
    for(i=0;i<palabra_x.length;i++){
        indice= abc.indexOf(palabra_x[i])
        indice= parseInt(indice-3)
        
        decodificado+=abc[indice]
    }
    console.log(decodificado)
    salida_decodificar.innerText=decodificado
})