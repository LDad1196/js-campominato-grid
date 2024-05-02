let grigm lia = document.getElementById("grid");

for (let i = 1; i <= 100; i++) {
	
	// Con Virtual-DOM e append
	let elemento = creaQuadrato(i);

	griglia.append(elemento);

}


function creaQuadrato(contenuto) {

	//Crea un quadrato in virtual DOM con del contenuto
	let square = document.createElement("div");
	square.classList.add("square");
	

	// Aggiungi un event-listener
	square.addEventListener("click", function() {
		console.log("cliccato", this); //in questo caso this = square
		this.classList.toggle("evidenziata");
        square.innerText = contenuto;
	});

	//restituisci il quadrato al chiamante
	return square;
}