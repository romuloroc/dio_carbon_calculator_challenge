// Configurações de rotas entre capitais brasileiras (distância em km)
const rotasCapitais = {
  'São Paulo': {
    'Rio de Janeiro': 430,
    'Brasília': 1150,
    'Salvador': 1950,
    'Fortaleza': 2650,
    'Belo Horizonte': 580,
    'Manaus': 3200,
    'Recife': 2400,
    'Porto Alegre': 1100,
    'Curitiba': 405
  },
  'Rio de Janeiro': {
    'São Paulo': 430,
    'Brasília': 1200,
    'Salvador': 1560,
    'Fortaleza': 2300,
    'Belo Horizonte': 450,
    'Manaus': 3600,
    'Recife': 2000,
    'Porto Alegre': 1530,
    'Curitiba': 830
  },
  'Brasília': {
    'São Paulo': 1150,
    'Rio de Janeiro': 1200,
    'Salvador': 1800,
    'Fortaleza': 2450,
    'Belo Horizonte': 740,
    'Manaus': 3800,
    'Recife': 2200,
    'Porto Alegre': 1900,
    'Curitiba': 1300
  },
  'Salvador': {
    'São Paulo': 1950,
    'Rio de Janeiro': 1560,
    'Brasília': 1800,
    'Fortaleza': 1100,
    'Belo Horizonte': 1400,
    'Manaus': 4200,
    'Recife': 870,
    'Porto Alegre': 2700,
    'Curitiba': 2450
  },
  'Fortaleza': {
    'São Paulo': 2650,
    'Rio de Janeiro': 2300,
    'Brasília': 2450,
    'Salvador': 1100,
    'Belo Horizonte': 2050,
    'Manaus': 3200,
    'Recife': 600,
    'Porto Alegre': 3400,
    'Curitiba': 3000
  },
  'Belo Horizonte': {
    'São Paulo': 580,
    'Rio de Janeiro': 450,
    'Brasília': 740,
    'Salvador': 1400,
    'Fortaleza': 2050,
    'Manaus': 3500,
    'Recife': 1650,
    'Porto Alegre': 1100,
    'Curitiba': 900
  },
  'Manaus': {
    'São Paulo': 3200,
    'Rio de Janeiro': 3600,
    'Brasília': 3800,
    'Salvador': 4200,
    'Fortaleza': 3200,
    'Belo Horizonte': 3500,
    'Recife': 3400,
    'Porto Alegre': 4500,
    'Curitiba': 3800
  },
  'Recife': {
    'São Paulo': 2400,
    'Rio de Janeiro': 2000,
    'Brasília': 2200,
    'Salvador': 870,
    'Fortaleza': 600,
    'Belo Horizonte': 1650,
    'Manaus': 3400,
    'Porto Alegre': 3100,
    'Curitiba': 2700
  },
  'Porto Alegre': {
    'São Paulo': 1100,
    'Rio de Janeiro': 1530,
    'Brasília': 1900,
    'Salvador': 2700,
    'Fortaleza': 3400,
    'Belo Horizonte': 1100,
    'Manaus': 4500,
    'Recife': 3100,
    'Curitiba': 710
  },
  'Curitiba': {
    'São Paulo': 405,
    'Rio de Janeiro': 830,
    'Brasília': 1300,
    'Salvador': 2450,
    'Fortaleza': 3000,
    'Belo Horizonte': 900,
    'Manaus': 3800,
    'Recife': 2700,
    'Porto Alegre': 710
  }
};

// Lista de capitais disponíveis
const capitaisBrasil = [
  'São Paulo',
  'Rio de Janeiro',
  'Brasília',
  'Salvador',
  'Fortaleza',
  'Belo Horizonte',
  'Manaus',
  'Recife',
  'Porto Alegre',
  'Curitiba'
];

// Função para verificar se existe rota entre duas cidades
function verificarRota(origem, destino) {
  if (rotasCapitais[origem] && rotasCapitais[origem][destino]) {
    return rotasCapitais[origem][destino];
  }
  return null;
}

// Função para preenchimento automático de distância
function preencherDistanciaAutomatica(origem, destino) {
  const distancia = verificarRota(origem, destino);
  if (distancia) {
    document.getElementById('distancia').value = distancia;
    document.getElementById('distancia').disabled = false;
    return true;
  } else {
    document.getElementById('distancia').value = '';
    document.getElementById('distancia').disabled = true;
    return false;
  }
}
