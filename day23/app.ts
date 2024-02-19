const API_URL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';

const main = document.getElementById('main')!;
const form  = document.getElementById('form')!;
const search = document.getElementById('search')!;


async function getMovies(url:string) {
    const res = await fetch(url)
    const data = await res.json()

    showMovies(data.result);
}

function showMovies (movies: string[]){
    main.innerHTML = ''

    movies.forEach((movie)=>{
        const { title, poster_path, vote_average, overview } = movie;

        const movieEl = document.createElement('div')
        movieEl.classList.add("item1");

        movieEl.innerHTML = `
         <div class="item1">
                <div class="img">
                    <img src="${IMG_PATH + poster_path}" alt="${title}">
                </div>
                <div class="content_name">
                    <h3>${title}</h3>
                    <button type="button">8.600</button>
                </div>
                <div class="label_hover">
                    <h3>leday thes is car</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, nostrum quas voluptate deleniti doloribus similique rerum. Voluptates, vel iusto cumque quasi repellat natus voluptate itaque praesentium id voluptas sint ab?</p>
                </div>
            </div>
        `;
    })
}