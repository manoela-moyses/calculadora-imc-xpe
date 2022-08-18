function start() {
  var buttonCalculateImc = document.querySelector('#button-calculate-imc');
  buttonCalculateImc.addEventListener('click', handleButtonClick);

  handleButtonClick();
}

function calculateImc(weight, height) {
  return weight / (height * height);
}

function handleButtonClick() {
  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');
  var imcResult = document.querySelector('#imc-result');

  var weight = Number(inputWeight.value);
  var height = Number(inputHeight.value);

  var imc = calculateImc(weight, height);
  var formattedImc = imc.toFixed(2).replace('.', ',');

  imcResult.textContent = formattedImc;

  let rating = '';
  let degree = '';

  if (imc >= 0 && imc <= 15.99) {
    rating = 'Valor inválido';
  }
  if (imc >= 16.0 && imc <= 16.99) {
    rating = 'Este valor considera que você está na faixa';
    degree = 'muito abaixo do peso';
  }
  if (imc >= 17.0 && imc <= 18.49) {
    rating = 'Este valor considera que você está na faixa';
    degree = 'abaixo do peso';
  }
  if (imc >= 18.5 && imc <= 25.0) {
    rating = 'Este valor considera que você está na faixa';
    degree = 'peso normal';
  }
  if (imc >= 25.01 && imc <= 29.99) {
    rating = 'Este valor considera que você está na faixa';
    degree = 'acima do peso';
  }
  if (imc >= 30.0 && imc <= 34.99) {
    rating = 'Este valor considera que você está na faixa';
    degree = 'obesidade grau I';
  }
  if (imc >= 35.0 && imc <= 40.0) {
    rating = 'Este valor considera que você está na faixa';
    degree = 'obesidade grau II (severa)';
  }
  if (imc >= 40.01) {
    rating = 'Este valor considera que você está na faixa';
    degree = 'obesidade grau III (mórbida)';
  }

  advice.textContent = `${rating}`;
  level.textContent = `${degree}`;
}

start();
