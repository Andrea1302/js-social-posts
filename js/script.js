/* Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro javascript in cui:
- Creiamo il nostro array di oggetti che rappresentano ciascun post.
Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
nome autore,
foto profilo,
data,
testo del post,
immagine (non tutti i post devono avere una immagine) [quindi gestisco il caso],
numero di likes.
- Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.
- Rendiamo il tasto “Mi Piace” cliccabile con incremento del counter dei likes. */



// 1. Creo il mio array di oggetti 
// 1.1 Ogni oggetto dovrà contenere Il nome autore, l immagine del profilo, la data , il testo del post, l immagine se presente, il numero di likes.

//  se clicco sul pulsante mi piace, incrementerò il numero dei likes ----> condizione click

const post = [

    {
        "nome" : "Andrea Scarpa",
        "fotoProfilo" : "img/Andrea scarpa.jpg",
        "data" : "30 min fa",
        "testoPost" : "Alghero al tramonto , sempre bellissima !",
        "immagine" : "img/alghero.webp",
        "likes" : 127
    },

    {
        "nome" : "Diletta Leotta",
        "fotoProfilo" : "img/diletta.jpg",
        "data" : "38 min fa",
        "testoPost" : "Che partita e che emozioni, Juve batte inter 4 a 0 grazie ad un poker di @Paulo_Dybala #JuveInter #Dazn #DilettaNazionale",
        "immagine" : "img/dilettafoto.jpg",
        "likes" : 327000
    },
    {
        "nome" : "Alessandro Del Piero",
        "fotoProfilo" : "img/delpiero.jpg",
        "data" : "47 min fa",
        "testoPost" : "In diretta dal Club di sky per commentare questo splendido #JuveInter, ci vediamo tra poco !",
        "immagine" : "img/alex.jpg",
        "likes" : 327000
    }
]