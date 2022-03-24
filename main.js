//Cuando se pone un punto, es porque realiza la busqueda por el nombre de la clese
const container = document.querySelector('.row'); 

const apiUrl = 'https://api.themoviedb.org/3';
const apiKey = '183cf5b72ba77341defb0e8b3fd80475';
const urlPoster = 'https://image.tmdb.org/t/p/original' ;

const recuperarPopulares = () => {
    const url = `${apiUrl}/movie/popular?api_key=${apiKey}&language=es-MX&region=MX&page=1`;

    fetch(url)
    .then((respuesta) => respuesta.json()) // La "respuesta" es la promesa, la cual la convertimos en JSON 
    .then((body) => {

            const peliculas = body.results;
            console.log(typeof(peliculas));
            const pelicula = peliculas[0];

            peliculas.forEach(pelicula => {
                const card = `
                    <div class="card col-3 m-3" ondblclick="irPelicula(${pelicula.id},'${pelicula.original_title}')" >
                        <img src="${urlPoster}${pelicula.backdrop_path}" class="card-img-top" >
                        <div class="card-body">
                            <h5 class="card-title">${pelicula.original_title}</h5>
                            <p class="card-text">${pelicula.overview}</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>`;
                    container.insertAdjacentHTML('beforeend',card);
            });
           })
    };

recuperarPopulares();

const irPelicula=(idPelicula,name)=>{
        window.location.assign(`/pelicula.html?id=${idPelicula}&name=${name}`)
    }









