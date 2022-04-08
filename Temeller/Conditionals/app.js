// Karşılaştırma Operatörleri

// ==
// ===
// !=
// !==
// <
// >
// <=
// >=


// console.log(2 == 2); // 2 = 2 mi ? true döndürür.
// console.log("js" == "java"); // js = javascript mi ? false döndürür.

// console.log(2 == "2"); //  2 = "2" mi ? true döndürür.

// console.log(2 === "2"); // Veri tipinide kontrol eder int == string mi ? false döndürür.
// console.log(2 === "2"); // Veri tipinide kontrol eder int == string mi ? false döndürür.

// console.log(2 < 4); // 2, 4 ' den küçükmü ? true döndürür.
// console.log(2 > 4); // 2, 4 ' den büyükmü ? false döndürür.

// console.log(2 != 4); // 2, 4'e eşit değil midir ? true döndürür.
// console.log(4 != 4); // 4, 4'e eşit değil midir ? false döndürür.
// console.log(2 !== "4"); // 2, "4"'e eşit değil midir ? true döndürür.

// console.log(4 <= 5); // 4, 5 e eşit veya küçükse true döndürür.
// console.log(5 <= 5); // 5, 5 e eşit veya küçükse true döndürür.

// console.log(6 >= 5); // 5, 5 e eşit veya büyük değilse true döndürür.
// console.log(5 >= 5); // 5, 5 e eşit veya büyük değilse true döndürür.



// Mantıksal Bağlaçlar

// Not Operatörü

// console.log(!2 == 2); // 2 = 2 ise true önüne ! gelirse falseye çevirir.

// // And Operatörü

// console.log((2 == 2) && (4 == 4)); // 2 = 2 ise ve 4 = 4 ise true döndürür. içlerinden biri yanlışsa false olarak döner.

// // Or Operatörü

// console.log((2 == 2) || (4 == 8)); // içlerinden herhangi biri eşitse true döndürür eğer ikiside eşit dğeilse false döndürür.


// const error = true;

// if (error) {
//     console.error("Sistemde Hata Var");
// }
// else if (error == true) {
//     console.log("Sistemed Hata Yok");
// }
// else {
//     console.warn("Bilinmeyen Bir Hata Meydana Geldi.");
// }

// Ternary Operator

// const sayi = 100;

// // console.log(sayi === 100 ? "Sayı 100" : "Sayı 100 Değil"); // 100 ise "?" den sonraki yer çalışıy değilse ":" dan sonrası çalılır.

// if (sayi === 1000)
//     console.log("Sayı 100");
// else
//     console.log("Sayı 100 değil");

const process = 3;

switch (process) {
    case 1:
        console.log("İşlem 1")
        break;
    case 2:
        console.log("İşlem 2")
        break;
    case 3:
        console.log("İşlem 3")
        break;

    default:
        console.log("İşlem Sürdürülüyor")
        break;
}