// async function test(data) {
//     // Return New Promise
//     // return data;
//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Bu bir değerdir.");
//         }, 5000);
//     });

//     let response = await promise; // 5 Saniye Bekler
//     return response;
// }

// test("Merhaba").then(response => console.log(response))

// async function testData(data) {
//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (typeof data === "string") {
//                 resolve(data);
//             }
//             else {
//                 reject(new Error("Lütfen string değer gir..."));
//             }
//         }, 5000);
//     });

//     const response = await promise;
//     return response;
// }

// testData(55)
//     .then(data => console.log(data))
//     .catch(err => console.error(err))

async function getCurrency(url) {
    const response = await fetch(url); // Response Object
    const data = await response.json(); // Json Object
    return data;
}

getCurrency("https://api.exchangerate.host/latest")
    .then(data => console.log(data.rates.TRY))