// Ajax, Callback, HTTP Request

class Request {
    constructor() {
        this.xhr = new XMLHttpRequest();
    }

    // GET Request

    get(url, callback) {
        this.xhr.open("GET", url); // Bağlantı Açık
        this.xhr.onload = () => {
            if (this.xhr.status === 200) {
                callback(null, this.xhr.responseText); // İsteğimiz Bitti
            }
            else {
                callback("GET Request: Bir hata oluştu", null);
            }
        }
        this.xhr.send();
    }

    post(url, data, callback) {
        this.xhr.open("POST", url);
        this.xhr.setRequestHeader("Content-type", "application/json"); // JSON Verisi
        this.xhr.onload = () => {
            if (this.xhr.status === 201) {
                callback(null, this.xhr.responseText);
            }
            else {
                callback("POST Request: Bir hata oluştu", null);
            }
        }
        this.xhr.send(JSON.stringify(data));
    }

    put(url, data, callback) {
        this.xhr.open("PUT", url);
        this.xhr.setRequestHeader("Content-type", "application/json"); // JSON Verisi
        this.xhr.onload = () => {
            if (this.xhr.status === 200) {
                callback(null, this.xhr.responseText);
            }
            else {
                callback("PUT Request: Bir hata oluştu", null);
            }
        }
        this.xhr.send(JSON.stringify(data));
    }

    delete(url, callback) {
        this.xhr.open("DELETE", url); // Bağlantı Açık
        this.xhr.onload = () => {
            if (this.xhr.status === 200) {
                callback(null, "Veri silme işlemi başarılı"); // İsteğimiz Bitti
            }
            else {
                callback("DELETE Request: Bir hata oluştu", null);
            }
        }
        this.xhr.send();
    }


}

const request = new Request();

request.delete("https://dummyjson.com/products/101", function (err, response) {
    if (err === null) {
        console.log(response);
    }
    else {
        console.log(err);
    }
});

// request.put("https://jsonplaceholder.typicode.com/albums/1", { userId: 31, title: "YARRAAAALARI" }, function (err, response) {
//     if (err === null) {
//         console.log(response);
//     }
//     else {
//         console.log(err);
//     }
// });

// request.post("https://jsonplaceholder.typicode.com/albums", { userId: 31, title: "YARRAAAALARI" }, function (err, response) {
//     if (err === null) {
//         console.log(response);
//     }
//     else {
//         console.log(err);
//     }
// });

// request.get("https://jsonplaceholder.typicode.com/albums/51", function (err, response) {
//     if (err === null) {
//         console.log(response);
//     }
//     else {
//         console.log(err);
//     }
// });