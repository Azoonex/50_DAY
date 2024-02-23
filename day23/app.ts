const API_URL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API =
    'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';

const main = document.getElementById("main")!;
const form = document.getElementById("form")!;
const search = document.getElementById("search") as HTMLInputElement;

getMovies(API_URL);

async function getMovies(url:any) {
    const res = await fetch(url);
    const data = await res.json();

    showMovies(data.result);
}

function showMovies(movies: string[]) {
    main.innerHTML = "";

    movies.forEach((movie: any) => {
        const { title, poster_path, vote_average, overview } = movie;

        const movieEl = document.createElement("div");
        movieEl.classList.add("item1");

        movieEl.innerHTML = `
         <div class="item1">
                <div class="img">
                    <img src="${IMG_PATH + poster_path}" alt="${title}">
                </div>
                <div class="content_name">
                    <h3>${title}</h3>
                    <button type="button">${vote_average}</button>
                </div>
                <div class="label_hover">
                    <h3>overview</h4>
                    <p>
                    ${overview}
                    </p>
                </div>
            </div>
        `;
        main.appendChild(movieEl);
    });
}

function getClassByRate(vote: any) {
    if (vote >= 8) {
        return "green";
    } else if (vote >= 5) {
        return "orange";
    } else {
        return "red";
    }
}

form.addEventListener('submit',(e)=>{
    e.preventDefault()

    const searchTerm = search.value

    if(searchTerm && searchTerm !== ''){
        getMovies(SEARCH_API + searchTerm)

        search.value = ''
    } else {
        window.location.reload()
    }
})
