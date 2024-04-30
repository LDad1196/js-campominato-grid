Create la vostra griglia in HTML e CSS, in maniera grossolana. Vi servirà solo per testare le classi, come visto in mattinata con la griglia 3x3.

Commentate l'HTML e iniettatelo tramite un ciclo in JS, senza pensare al click o alle funzioni.

Aggiungete la gestione dell'evento di click, che stampi il numero e cambi il colore della cella.

Spostate alcuni elementi in funzioni, ad esempio la creazione del quadrato e/o l'event listener.

In milestone #3 stampate il numero della cella al click, prendendolo dal contenuto della cella. Qualcosa del tipo cella.innerHtml.
Provate adesso a modificare il ciclo che crea le vostre celle facendo in modo che le celle siano vuote, non contengano nessun numero.
Come fate adesso a stampare qualcosa al click? Nello scope dell'event-handler ho qualche variabile visibile che mi può indicare il numero?
E se provo a controllare lo scope "padre" dell'event handler?

Provate a eseguire quanto fatto fin qui NON al caricamento della pagina, ma al click su un pulsante "Avvia gioco".

Aggiungere una select accanto al bottone di start. La select presenterà tre difficoltà di gioco tra cui scegliere (easy, medium, hard).
Quando generate la griglia userete un numero di celle che dipende dalla difficoltà.
Easy: 100 celle (10x10)
Medium: 81 celle (9x9)
Hard: 49 (7x7)
Ragionate bene su quando vi serve conoscere la selezione dell'utente: è in quel momento che dovrete recuperare il dato.

Come sempre partite sempre dai commenti. Pensate a questa mattina: problemi irrisolvibili si sono risolti appena scritti i commenti. Perchè non partire scrivendoli?
Fatevi domande: di quale dato ho bisogno qui? è visibile? come conviene farlo arrivare in scope?
Aiutatevi con console.log e breakpoint nel debugger per verificare di avere i dati giusti, al rigo giusto.