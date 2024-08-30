function calcularMedia() {
    // Obter os valores dos inputs
    let numero1 = parseFloat(document.getElementById('numero1').value);
    let numero2 = parseFloat(document.getElementById('numero2').value);
    let numero3 = parseFloat(document.getElementById('numero3').value);
    let numero4 = parseFloat(document.getElementById('numero4').value);
    
    // Verificar se todos os inputs são válidos
    if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3) || isNaN(numero4)) {
        document.getElementById('resultado').innerText = 'Por favor, insira todos os números corretamente.';
        return;
    }
    
    // Calcular a média
    let media = (numero1 + numero2 + numero3 + numero4) / 4;
    
    // Exibir o resultado
    document.getElementById('resultado').innerText = `A média aritmética é: ${media.toFixed(2)}`;
}

