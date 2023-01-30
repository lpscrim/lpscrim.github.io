let artDiv = document.querySelector("#art")
let photoDiv = document.querySelector("#photo")
let musicDiv = document.querySelector("#music")
let artistDiv = document.querySelector("#artist")

artDiv.onmouseover = () => {
    artDiv.querySelector(".container").style.display = "flex";
}
photoDiv.onmouseover = () => {
    photoDiv.querySelector(".container").style.display = "flex";
}
musicDiv.onmouseover = () => {
    musicDiv.querySelector(".container").style.display = "flex";
}
artistDiv.onmouseover = () => {
    artistDiv.querySelector(".container").style.display = "flex";
}