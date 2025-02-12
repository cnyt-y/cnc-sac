// renk = document.querySelector("#renkInput").value
function changeBackgroundColor() {
    let mesaj = document.getElementById("sayi").value;

    console.log(mesaj)

    switch (mesaj) {
        case 1:
            document.getElementById("card1").style.backgroundColor = "red";
            break;

        case 2:
            document.getElementById("card1").style.backgroundColor = "blue";
            break;
        case 3:
            document.getElementById("card1").style.backgroundColor = "yellow";
            break;
        default:
            break;
    }

}
