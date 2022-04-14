const form = document.querySelector("#film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardBody = document.querySelectorAll(".card-body")[1];
const clear = document.querySelector("#clear-films");

// UI Objesi Başlatma

const ui = new UI();

// Storage Objesi Başlatma

const storage = new Storage();


// Tüm Eventleri Yükleme

eventListeners();

function eventListeners() {
    form.addEventListener("submit", addFilm);
    document.addEventListener("DOMContentLoaded", function () {
        let films = storage.getFilmsStorage();
        ui.loadAllFilms(films);
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
        ui.showAlert("danger", "Tüm Alanları Doldurun!");
    }
    else {
        // Yebi Film
        const newFilm = new Film(title, director, url);
        ui.addFilmToUi(newFilm); // Arayüze Film Ekleme
        storage.addFilmToStorage(newFilm); // Storage Film Ekleme

        ui.showAlert("success", "Film Başarıyla Eklendi...");
    }

    ui.clearInputs(titleElement, directorElement, urlElement);
    e.preventDefault();
}

function deleteFilm(e) {
    if (e.target.id == "delete-film") {
        ui.deleteFilmUi(e.target);
        storage.deleteFilmToStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        ui.showAlert("success", "Silme İşlemi Başarılı.");
    }
}

function clearAllFilms() {
    if (confirm("Emin misiniz?")) {
        ui.clearAllFilmsFromUi();
        storage.clearAllFilmsFromStorage();
    }
}