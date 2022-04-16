function Translate(word, language) {
    //this.apiKey = "trnsl.1.1.20200124T143530Z.d150dcb9f94d14a9.deaa2728ae30edad0b2677aef9863540af082686";
    this.word = word;
    this.language = language;

    // XHR Object

    this.xhr = new XMLHttpRequest();

}


Translate.prototype.translateWord = function (callback) {
    // Ajax İşlemleri
    const data = `q=${this.word}&target=${this.language}&source=tr`;

    this.xhr.open("POST", "https://google-translate1.p.rapidapi.com/language/translate/v2");
    this.xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    // this.xhr.setRequestHeader("Accept-Encoding", "application/gzip");
    this.xhr.setRequestHeader("X-RapidAPI-Host", "google-translate1.p.rapidapi.com");
    this.xhr.setRequestHeader("X-RapidAPI-Key", "e3d24426a4msh4da59b487b3262bp1a3d09jsn36cccfe17b52");
    this.xhr.onload = () => {
        if (this.xhr.status === 200) {
            const json = JSON.parse(this.xhr.responseText);
            const text = json.data.translations[0].translatedText;
            callback(null, text);
        }
        else {
            callback("Bir hata oluştu....", null);
        }
    }
    this.xhr.send(data);
}

Translate.prototype.changeParameters = function (newWord, newLanguage) {
    this.word = newWord;
    this.language = newLanguage;
}