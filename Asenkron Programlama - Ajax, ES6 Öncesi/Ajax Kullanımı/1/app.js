// Http Status
//  200 : OK
//  403 : Forbidden
//  404 : Not Found
//  505 : Internal Server Error

// readyState Holds the status of the XMLHttpRequest.
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready


document.querySelector("#btn").addEventListener("click", function () {

    // XMLHttpRequest

    const xhr = new XMLHttpRequest();

    xhr.onprogress = function () {
        console.log("Process İşleniyor...", this.readyState);
    }
    xhr.onload = function () {
        if (this.status === 200) {
            document.querySelector("#ajax").textContent = this.responseText;
        }
    }

    // xhr.onreadystatechange = function () {
    //     if (this.status == 200 && this.readyState == 4) {
    //         // Response Hazır.
    //         console.log(this.responseText);
    //     }
    //     // console.log(this.readyState);
    //     // console.log(this.status);
    // }

    xhr.open("GET", "example.txt", true);
    xhr.send();


});