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

// 2. Creazione stringa innerhtml da dover trasferire poi nel mio html ----> richiamo variabile globale container per scrivere successivamente al suo interno
//  se clicco sul pulsante mi piace, incrementerò il numero dei likes ----> condizione click

// var globale
const containerPost = document.getElementById("container");


// Array di oggetti 
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
        // "immagine" : "",
        "likes" : 355090
    }
]


// function miaFunzione(){
    for ( let i = 0 ; i < post.length; i++){
        let OggettoPost = post[i]
        let {nome,fotoProfilo,data,testoPost,immagine,likes} = OggettoPost;
        let innerPostHtml = `
        <div class="post">
                <div class="post__header">
                    <div class="post-meta">                    
                        <div class="post-meta__icon">
                            <img class="profile-pic" src="${fotoProfilo}" alt="${nome}">                    
                        </div>
                        <div class="post-meta__data">
                            <div class="post-meta__author">${nome}</div>
                            <div class="post-meta__time">${data}</div>
                        </div>                    
                    </div>
                </div>
                <div class="post__text">${testoPost} </div>
                <div class="post__image">
                    <img src="${immagine}" alt="">
                </div>
                <div class="post__footer">
                    <div class="likes js-likes">
                        <div class="likes__cta">
                            <a class="like-button  js-like-button" href="#" data-postid="1">
                                <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                                <span class="like-button__label">Mi Piace</span>
                            </a>
                        </div>
                        <div class="likes__counter">
                            Piace a <b id="like-counter-1" class="js-likes-counter">${likes}</b> persone
                        </div>
                    </div> 
                </div>            
            </div>
        `
    

        // for ( let key in OggettoPost) {
        //     if ( key = undefined){
        //         innerPostHtml =`
        //         <div class="post">
        //         <div class="post__header">
        //             <div class="post-meta">                    
        //                 <div class="post-meta__icon">
        //                     <img class="profile-pic" src="${fotoProfilo}" alt="${nome}">                    
        //                 </div>
        //                 <div class="post-meta__data">
        //                     <div class="post-meta__author">${nome}</div>
        //                     <div class="post-meta__time">${data}</div>
        //                 </div>                    
        //             </div>
        //         </div>
        //         <div class="post__text">${testoPost} </div>
        //         <div class="post__image">
        //             <img src="${immagine}" alt="">
        //         </div>
        //         <div class="post__footer">
        //             <div class="likes js-likes">
        //                 <div class="likes__cta">
        //                     <a class="like-button  js-like-button" href="#" data-postid="1">
        //                         <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
        //                         <span class="like-button__label">Mi Piace</span>
        //                     </a>
        //                 </div>
        //                 <div class="likes__counter">
        //                     Piace a <b id="like-counter-1" class="js-likes-counter">${likes}</b> persone
        //                 </div>
        //             </div> 
        //         </div>            
        //     </div>
        //         `
        //     }
        // }
        
        
        containerPost.innerHTML += innerPostHtml;
        const miPiace = document.querySelector(".likes__cta")
        miPiace.addEventListener("click",function(){
            console.log("iterazione n:",i, miPiace);
        })


}
