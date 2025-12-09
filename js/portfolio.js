const projetos = [
    {
        img: "imagens/projetos/bempertoss.png",
        titulo: "BemPerto",
        desc: "O BemPerto é um sistema sofísticado de monitoramento baseado na tecnologia de totens em conjunto com uma estrutura WebApp de administração. <a href='https://github.com/bemperto' target='_blank'> Link para o GitHub! </a>"
    },
    {
        img: "imagens/projetos/ygonnablate.png",
        titulo: "You're Gonna be Late!",
        desc: "You're Gonna be Late! é um jogo de plataforma 2D desenvolvido na Unity, onde o jogador controla um personagem que deve superar obstáculos para chegar a tempo na escola.<a href='https://vinisbosa.itch.io/cesar-is-late' target='_blank'> Link para a Demo! </a>"
    },
];
let i = 0;
function atualizarProjeto() {
    const img = document.getElementById("imagemprojeto");
    const titulo = document.querySelector("#descprojeto h2");
    const texto = document.querySelector("#descprojeto p");
    img.src = projetos[i].img;
    titulo.innerText = projetos[i].titulo;
    texto.innerHTML = projetos[i].desc;
}
document.getElementById("proximo").onclick = () => {
    i = (i + 1) % projetos.length;
    atualizarProjeto();
};
document.getElementById("anterior").onclick = () => {
    i = (i - 1 + projetos.length) % projetos.length;
    atualizarProjeto();
};
window.onload = atualizarProjeto;
