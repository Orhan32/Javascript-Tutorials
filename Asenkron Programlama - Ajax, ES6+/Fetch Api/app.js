function getTextFile() { // Text Dosyası
    fetch("example.txt")
        .then(response => response.text())
        .then(data => console.log(data))
        .catch(err => console.log(err));
}

function getJsonFile() { // Local Json Dosyası
    fetch("example.json")
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));
}

// getJsonFile();

// getTextFile();

// https://api.exchangerate.host/latest

function getExtarnalApi() {
    fetch("https://api.exchangerate.host/latest")
        .then(response => response.json())
        .then(data => {
            console.log(data.rates.TRY);
        })
        .catch(err => console.log(err));
}

getExtarnalApi();