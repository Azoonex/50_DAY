var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var API_URL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";
var IMG_PATH = "https://image.tmdb.org/t/p/w1280";
var SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';
var main = document.getElementById("main");
var form = document.getElementById("form");
var search = document.getElementById("search");
getMovies(API_URL);
function getMovies(url) {
    return __awaiter(this, void 0, void 0, function () {
        var res, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(url)];
                case 1:
                    res = _a.sent();
                    return [4 /*yield*/, res.json()];
                case 2:
                    data = _a.sent();
                    showMovies(data.result);
                    return [2 /*return*/];
            }
        });
    });
}
function showMovies(movies) {
    main.innerHTML = "";
    movies.forEach(function (movie) {
        var title = movie.title, poster_path = movie.poster_path, vote_average = movie.vote_average, overview = movie.overview;
        var movieEl = document.createElement("div");
        movieEl.classList.add("item1");
        movieEl.innerHTML = "\n         <div class=\"item1\">\n                <div class=\"img\">\n                    <img src=\"".concat(IMG_PATH + poster_path, "\" alt=\"").concat(title, "\">\n                </div>\n                <div class=\"content_name\">\n                    <h3>").concat(title, "</h3>\n                    <button type=\"button\">").concat(vote_average, "</button>\n                </div>\n                <div class=\"label_hover\">\n                    <h3>overview</h4>\n                    <p>\n                    ").concat(overview, "\n                    </p>\n                </div>\n            </div>\n        ");
        main.appendChild(movieEl);
    });
}
function getClassByRate(vote) {
    if (vote >= 8) {
        return "green";
    }
    else if (vote >= 5) {
        return "orange";
    }
    else {
        return "red";
    }
}
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var searchTerm = search.value;
    if (searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm);
        search.value = '';
    }
    else {
        window.location.reload();
    }
});
