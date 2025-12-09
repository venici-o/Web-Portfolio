const fotos = [
    "imagens/fotos/eu1.png",
    "imagens/fotos/eu2.png",
    "imagens/fotos/eu3.png",
    "imagens/fotos/eu4.png",
    "imagens/fotos/eu5.png"];
let i = 1;
const foto = document.getElementById("fotos");
function passar() {
    foto.style.opacity = 0;
    foto.style.transform = "translateY(20px)";

    setTimeout(() => {
        foto.src = fotos[i];
        foto.style.opacity = 1;
        foto.style.transform = "translateY(0)";
        i = (i + 1) % fotos.length;
    }, 800);
}
passar();
setInterval(passar, 5000);
