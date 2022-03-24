const apiUrl = 'https://api.themoviedb.org/3';
const apiKey = '183cf5b72ba77341defb0e8b3fd80475';
const urlPoster = 'https://image.tmdb.org/t/p/original';

const mostrarResultados = document.getElementById('resultados');
const buscarInput = document.querySelector('input');

const buscar = (e) => {
    limpiar();

    e.preventDefault();

    const terminoBusqueda = buscarInput.value;
    // https://api.themoviedb.org/3/search/movie?api_key=498471c1265532fcf424d77fb7084399&language=es-MX&query=algo

    const url = `${apiUrl}/search/movie?api_key=${apiKey}&language=es-MX&query=${terminoBusqueda}`;

    fetch(url)
        .then((respuesta) => respuesta.json())
        .then((body) => {

            const resultadosBusqueda = body.results;
            resultadosBusqueda.forEach(resultado => {
                const card = `
                    <div class="card col-3">
                        <img src="${urlPoster}${resultado.poster_path}" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">${resultado.original_title}</h5>
                            <p class="card-text">${resultado.overview}</p>
                        </div>
                    </div>`;
                mostrarResultados.insertAdjacentHTML('beforeend', card);
            });
        })

};

const limpiar = () => {
    document.getElementById('resultados').innerHTML = '';
};