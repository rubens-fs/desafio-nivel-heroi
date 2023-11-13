// Obtendo elementos do DOM
const form = document.querySelector('form');
const nomeInput = document.getElementById('nome');
const nivelInput = document.getElementById('nivel');
const resultadoDiv = document.getElementById('resultado');

// Adicionando evento de clique ao botão
form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Obtendo valores dos campos de entrada
    const nome = nomeInput.value;
    const xp = parseInt(nivelInput.value);

    // Verificando o nível com base na experiência (XP)
    let nivel;

    switch (true) {
        case xp < 0:
            alert("Coloque um nível maior ou igual a 0!");
        case xp > 0 && xp <= 1000:
            nivel = 'Ferro';
            break;
        case xp > 1000 && xp <= 2000:
            nivel = 'Bronze';
            break;
        case xp > 2000 && xp <= 5000:
            nivel = 'Prata';
            break;
        case xp > 5000 && xp <= 6000:
            nivel = 'Ouro';
            break;
        case xp > 6000 && xp <= 7000:
            nivel = 'Platina';
            break;
        case xp > 7000 && xp <= 8000:
            nivel = 'Diamante';
            break;
        case xp > 8000 && xp <= 9000:
            nivel = 'Ascendente';
            break;
        case xp > 9000 && xp <= 10000:
            nivel = 'Imortal';
            break;
        case xp > 10000:
            nivel = 'Radiante';
            break;
        default:
            alert("Coloque um nível válido!");
    }

    // Exibindo a mensagem na div de resultado
    resultadoDiv.innerText = `O Herói de nome ${nome} está no nível ${nivel}`;
});
