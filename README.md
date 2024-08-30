# Média Aritmética

Este repositório contém uma calculadora de média aritmética simples que permite ao usuário inserir quatro números e calcular sua média. A aplicação é construída usando HTML, CSS e JavaScript.

## Descrição dos Arquivos

### 1. `index.html`

Este arquivo define a estrutura da página web. Ele contém:
- **Elementos de Formulário**: Quatro campos de entrada para os números e um botão para calcular a média.
- **Estrutura**: O HTML organiza o conteúdo com elementos como `<form>`, `<input>`, e `<button>`, e inclui o arquivo CSS para estilização e o arquivo JavaScript para a funcionalidade.

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora de Média</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Calculadora de Média Aritmética</h1>
        <form id="mediaForm">
            <!-- Campos de entrada e botão -->
        </form>
        <div id="resultado"></div>
    </div>
    <script src="script.js"></script>
</body>
</html>
2. styles.css
Este arquivo fornece a estilização da página para melhorar a aparência e a usabilidade. Ele inclui:

Estilização do Corpo: Define o estilo geral da página, incluindo a fonte, centralização e cor de fundo.
Container: Define o estilo do contêiner principal, com fundo branco, padding, e sombra.
Formulário e Botões: Ajusta a aparência dos campos de entrada e do botão, incluindo bordas, padding, e efeitos ao passar o mouse.
css
Copiar código
body {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-color: #f0f0f0;
}

.container {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
    margin-bottom: 20px;
    font-size: 24px;
}

label {
    display: block;
    margin: 10px 0 5px;
}

input {
    width: calc(100% - 22px);
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

button {
    padding: 10px 20px;
    background-color: #007bff;
    border: none;
    color: #fff;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}

#resultado {
    margin-top: 20px;
    font-size: 18px;
}
3. script.js
Este arquivo contém o código JavaScript responsável pela lógica de cálculo. Ele inclui:

Função calcularMedia: Obtém os valores dos campos de entrada, verifica se são válidos, calcula a média dos quatro números e exibe o resultado na página.
javascript
Copiar código
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
