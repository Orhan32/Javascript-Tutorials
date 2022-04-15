// function getData(data) { // Promise Objesi Döndüren Fonksiyon
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             if (typeof data === "string") {
//                 resolve(data);
//             }
//             else {
//                 reject(new Error("Lütfen String Bir Değer Giriniz"));
//             }

//         }, 5000)
//     });
// }

// getData(5)
//     .then(response => console.log("Gelen Değer", response))
//     .catch(err => console.error(err));

function addTwo(number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof number === "number") {
                resolve(number + 2);
            }
            else {
                reject(new Error("Lütfen bir sayı girin..."));
            }
        }, 3000);
    })
}

addTwo(10)
    .then(response => {
        console.log(response);
        return response + 2;
    })
    .then(response2 => console.log(response2))
    .catch(err => { console.error(err); })
    // 1 tane catch 1 'den fazla then kullanılabilir.