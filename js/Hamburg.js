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

// 漢堡按鈕
var HamburgBtn = document.getElementById("HamburgBtn");
var showMenu = document.getElementById("showMenu");
HamburgBtn.onclick = function () {
    showMenu.style.display = "block";
}

// 漢堡按鈕關閉
showMenu.onclick = function () {
    showMenu.style.display = "none";
}
var H_close = document.getElementById("H_close");
H_close.onclick = function(){
    showMenu.style.display = "none";
}

