

let textoContador = document.getElementById("contadorVisitas")

const button = document.getElementById("btnReestablecer")





	var visitas = localStorage.getItem("visitas");
	var contador;

	if(!visitas){
		contador = 0;
		localStorage.setItem("visitas", contador);
	} else {
		contador = localStorage.getItem("visitas");
		contador++;
		localStorage.setItem("visitas", contador);
	}
	textoContador.innerHTML = contador

    button.addEventListener("click",()=>{
        localStorage.getItem("visitas")//me vi obligado a ponerlo, por que sino no funcionaba el remove
        localStorage.removeItem("visitas")
    })


	




























//localStorage.setItem("numVisitas",``)
//let{numVisitas} = localStorage
//console.log(numVisitas)
// Object.values(numVisitas)
// const inicio = 1
//
//document.addEventListener("mouseover",()=>{
//    
//    numVisitas = (inicio + numVisitas++)
//    console.log(numVisitas)
//    localStorage.setItem("numVisitas",`${numVisitas}`)
//    
//})


//let {visita}= localStorage
//
//Number.parseFloat(visita)
//console.log(visita)
//console.log(localStorage)
//
//document.addEventListener("mouseover",()=>{
//    let numeroVisita = Object.values(visita)
//    Number.parseFloat(numeroVisita)
//    numeroVisita ++
//    
//   
//    console.log(localStorage)
//    
//
//    
//})
//
//let {visita}= localStorage
//
//Number.parseFloat(visita)
//console.log(visita)
//console.log(localStorage)
//
//document.addEventListener("mouseover",()=>{
//    let numeroVisita = Object.values(visita)
//    Number.parseFloat(numeroVisita)
//    numeroVisita ++
//    
//   
//    console.log(localStorage)
//    
//
//    
//})
//


//let visita = null
//document.addEventListener("visibilitychange", function() {
//    if (document.visibilityState === "visible") {
//      visita++
//      localStorage.setItem("NumOfVisit","visita")
//      
//
//    }
//  });
//
//console.log(visita)
 
 
 
 
 
 //  fetch( ".vscode/settings.json")
//.then((res) => {
 //     if(!res.ok) {
 //       throw new Error('La solicitud no fue exitosa')
 //     } return res.json()
 //   })
 //   .then((data) => {
// // console.log(data)})


//localStorage.setItem("visita","")
//let visita = 0;

//let contador = 0;
//
//document.addEventListener("load", function() {
//  // Mostramos un cuadro de diálogo
//  let dialog = new dialog();
//  dialog.setTitle("Bienvenido");
//  dialog.setContent("Haz clic en aceptar para registrar tu visita.");
//  dialog.addButton("Aceptar", function() {
//    contador++;
//  });
//  dialog.show();
//})
//
//localStorage.setItem("contador","")
//console.log(localStorage)
//
//button.addEventListener("click",()=>{
//localStorage.removeItem(contador)
//})




