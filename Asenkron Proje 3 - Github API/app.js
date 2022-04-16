// Elementleri Seçme

const githubForm = document.getElementById("github-form");
const nameInput = document.getElementById("githubname");
const clearButton = document.getElementById("clear-last-users");
const lastUsers = document.getElementById("last-users");
const lastSearch = document.getElementById("lastSearch");

const github = new Github();
const ui = new UI();

eventListeners();

function eventListeners() {
    githubForm.addEventListener("submit", getData, true);
    clearButton.addEventListener("click", clearAllSearched);
    document.addEventListener("DOMContentLoaded", loadAllSearched);
    lastSearch.addEventListener("mouseup", getUserData);
}

function getUserData(e) {
    if (e.target.className === "btn btn-dark ml-auto p-2") {
        getGithubData(e.target.parentElement.textContent.split(" ")[0].trim());
    }
}

function getGithubData(username) {
    github.getGithubData(username)
        .then(response => {
            if (response.user.message === "Not Found") {
                // Hata
                ui.showAlert("danger", "Kullanıcı Bulunamadı");
            }
            else {
                ui.addSearchedUserToUi(username);
                Storage.addSearchedUserToStorage(username);
                ui.showUserInfo(response.user);
                ui.showReposInfo(response.repo);
            }
        })
        .catch(err => ui.showAlert(err));
}

function getData(e) {
    let username = nameInput.value.trim();

    if (username === "") {
        ui.showAlert("danger", "Bir kullanıcı adı girin.")
    }
    else {
        getGithubData(username);
    }
    ui.clearInput();

    e.preventDefault();
}

function clearAllSearched() {
    // Tüm Arananları Temizle
    if (confirm("Emin misiniz?")) {
        // Silme İşlemi
        Storage.clearAllSearchedUserFromStorage();
        ui.clearAllSearchedFromUi();
    }
}

function loadAllSearched() {
    // Arananları storage'den al ve ui'ye ekle
    let users = Storage.getSearchedUsersFromStorage();
    let result = "";

    users.forEach(user => {
        result += `
        <li class="d-flex list-group-item">${user}
            <a href="#" class="btn btn-dark ml-auto p-2">Git</a>
        </li>

        `;
    });

    lastUsers.innerHTML = result;
}

