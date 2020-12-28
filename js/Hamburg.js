// document.getElementById("btn").onclick = function () {
//     var showMenu = document.getElementById("showMenu");
//     var btn = document.getElementById("btn");
//     if (showMenu.style.display == "none") {
//         showMenu.style.display = "block";
//         btn.value = "隱藏按鈕鍵";
//     } else {
//         showMenu.style.display = "none";
//     }
// }

var showMenu = document.getElementById("showMenu");
var HamburgBtn = document.getElementById("HamburgBtn");
HamburgBtn.onclick = function () {
    if (showMenu.style.display == "none") {
        showMenu.style.display = "block";
        btn.value = "隱藏按鈕鍵";
    } else {
        showMenu.style.display = "none";
    }
}