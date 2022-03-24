var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
  });

const apiUrl = 'https://api.themoviedb.org/3';
const apiKey = '183cf5b72ba77341defb0e8b3fd80475';
const urlPoster = 'https://image.tmdb.org/t/p/original' ;

const container = document.getElementById('pelis'); 
const actoresDiv = document.getElementById('actores');

const queryParams = new URLSearchParams(window.location.search);
const id = queryParams.get('id');
const name = queryParams.get('name');
//URL Pelicula
const url=`${apiUrl}/movie/${id}?api_key=${apiKey}&language=es-MX&region=MX&page=1`;
console.log(url);
//URL Creditos
const urlCreditos=`${apiUrl}/movie/${id}/credits?api_key=${apiKey}&language=es-MX`;

//Api de pelicula en el card
fetch(url)
.then((respuesta) => respuesta.json())
.then((body) => {

        const card = `
        <div class="card" col-3 >
            <img src="${urlPoster}${body.backdrop_path}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${body.original_title}</h5>
                <p class="card-text">${body.overview}</p>
                <p class="card-text">${body.release_date}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>`;
        container.insertAdjacentHTML('afterbegin',card);
})

//API actores 
fetch(urlCreditos)
.then((respuesta) => respuesta.json())
.then((body) => {
    let actores = body.cast.slice(0,5);
    actores.forEach(actor => {

        console.log(actor);
        const actorCard = `
                            <div class="card col-3 " >
                                
                                <div class="card-body">
                                <img src="${urlPoster}${actor.profile_path}" class="card-img-top" >
                                    <h5 class="card-title">${actor.character}</h5>
                                    <p class="card-text">${actor.original_name}</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
        `;

        actoresDiv.insertAdjacentHTML('beforeend',actorCard);
    });

})
