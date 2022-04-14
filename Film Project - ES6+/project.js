const form = document.querySelector("#film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardBody = document.querySelectorAll(".card-body")[1];
const clear = document.querySelector("#clear-films");


// Tüm Eventleri Yükleme

eventListeners();

function eventListeners() {
    form.addEventListener("submit", addFilm);
    document.addEventListener("DOMContentLoaded", function () {
        let films = Storage.getFilmsStorage();
        UI.loadAllFilms(films);
    });
    cardBody.addEventListener("click", deleteFilm);
    clear.addEventListener("click", clearAllFilms);
}

function addFilm(e) {
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if (title === "" || director === "" || url === "") {
        // HATA
        UI.showAlert("danger", "Tüm Alanları Doldurun!");
    }
    else {
        // Yebi Film
        const newFilm = new Film(title, director, url);
        UI.addFilmToUi(newFilm); // Arayüze Film Ekleme
        Storage.addFilmToStorage(newFilm); // Storage Film Ekleme

        UI.showAlert("success", "Film Başarıyla Eklendi...");
    }

    UI.clearInputs(titleElement, directorElement, urlElement);
    e.preventDefault();
}

function deleteFilm(e) {
    if (e.target.id == "delete-film") {
        UI.deleteFilmUi(e.target);
        Storage.deleteFilmToStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        UI.showAlert("success", "Silme İşlemi Başarılı.");
    }
}

function clearAllFilms() {
    if (confirm("Emin misiniz?")) {
        UI.clearAllFilmsFromUi();
        Storage.clearAllFilmsFromStorage();
    }
}