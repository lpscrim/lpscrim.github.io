let artDiv = document.querySelector("#art")
let photoDiv = document.querySelector("#photo")
let musicDiv = document.querySelector("#music")
let conta = artDiv.querySelector("#art .container")
let contp = photoDiv.querySelector("#photo .container")
let contm = document.querySelector("#music .container")


artDiv.onmouseover = () => {
    conta.style.display = "flex";
}
photoDiv.onmouseover = () => {
    contp.style.display = "flex";
}
musicDiv.onmouseover = () => {
    contm.style.display = "flex";
}
