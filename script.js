document.getElementById('calcular').addEventListener('click', function() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operacion = document.getElementById('operacion').value;
    const resultDiv = document.getElementById('resultado');
  
    if (isNaN(num1) || isNaN(num2)) {
      resultDiv.innerText = "Por favor ingrese números válidos.";
      resultDiv.style.color = "red";
      return;
    }
  
    let resultado;
    switch (operacion) {
      case '+':
        resultado = num1 + num2;
        break;
      case '-':
        resultado = num1 - num2;
        break;
      case '*':
        resultado = num1 * num2;
        break;
      case '/':
        if (num2 === 0) {
          resultDiv.innerText = "No se puede dividir por cero.";
          resultDiv.style.color = "red";
          return;
        }
        resultado = num1 / num2;
        break;
      default:
        resultDiv.innerText = "Operación no válida.";
        resultDiv.style.color = "red";
        return;
    }
      if (resultado > 0) {
      resultDiv.innerText = "Resultado: " + resultado;
      resultDiv.style.color = "green";
    } else if (resultado < 0) {
      resultDiv.innerText = "Resultado: " + resultado;
      resultDiv.style.color = "red";
    } else {
      resultDiv.innerText = "Resultado: 0";
      resultDiv.style.color = "black";
    }
  });
  