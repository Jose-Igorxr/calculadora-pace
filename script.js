const btnCalcular = document.getElementById('CalcBtn');

function calcular() {
    const horas = Number(document.getElementById('horas').value);
    const minutos = Number(document.getElementById('minutos').value);
    const segundos = Number(document.getElementById('segundos').value);
    const distancia = parseFloat(document.getElementById('distancia').value);

    if(!distancia, distancia <= 0) {
        alert("Por favor. insira uma distância válida.");
    }

    const segundosTotais = (horas * 3600) + (minutos * 60) + segundos;

    const paceSegundos = segundosTotais / distancia;

    const paceMinutos = Math.floor(paceSegundos / 60);
    const paceSegundosRestantes = Math.round(paceSegundos % 60);

    const segundosFormatados = String(paceSegundosRestantes).padStart(2, '0');

    const resultado = document.getElementById('resultadoPace').innerText = `Seu ritmo médio foi de ${paceMinutos}:${segundosFormatados} min/km`;

}

btnCalcular.addEventListener('click', calcular);



