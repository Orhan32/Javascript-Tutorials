const filmList = document.querySelector("#films")

function UI() {

}

UI.prototype.addFilmToUi = function (newFilm) {
    filmList.innerHTML += `
            <tr>
                <td><img src="${newFilm.url}" class="img-fluid img-thumbnail" style="width:500px;"></td>
                <td>${newFilm.title}</td>
                <td>${newFilm.director}</td>
                <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
            </tr>
    `;

}

UI.prototype.clearInputs = function (element1, element2, element3) {
    element1.value = "";
    element2.value = "";
    element3.value = "";
}

UI.prototype.showAlert = function (alert, message) {
    const cardBody = document.querySelector(".card-body");

    const div = document.createElement("div");
    div.className = "alert alert-" + alert;
    div.textContent = message;
    cardBody.appendChild(div);

    setTimeout(function () {
        div.remove();
    }, 1000)

}

UI.prototype.loadAllFilms = function (films) {
    films.forEach(element => {
        this.addFilmToUi(element);
    });
}

UI.prototype.deleteFilmUi = function (element) {
    element.parentElement.parentElement.remove();
}

UI.prototype.clearAllFilmsFromUi = function () {
    // filmList.innerHTML = "";
    while (filmList.firstElementChild !== null) {
        filmList.firstElementChild.remove();
    }
}