// Fatores de emissão em kg CO₂ por km (valores padrão)
const fatoresEmissaoLocal = {
  'bicicleta': 0,
  'carro': 0.12,
  'carro_eletrico': 0.05,
  'onibus': 0.089,
  'caminhao': 0.92
};

// Configuração de créditos de carbono
// 1 crédito = 1.000 kg CO₂
// 1 crédito = R$ 5,10
const KG_POR_CREDITO = 1000;
const VALOR_CREDITO = 5.10;
const VALOR_POR_KG = VALOR_CREDITO / KG_POR_CREDITO; // R$ 0,0051 por kg

// Mapeamento de imagens por transporte
const imagensTransporte = {
  'bicicleta': 'images/bicicleta.gif',
  'carro_eletrico': 'images/carro_eletrico.gif', 
  'carro': 'images/carro.gif',
  'onibus': 'images/onibus.gif',
  'caminhao': 'images/caminhao.gif'
};

function appendToVisor(valor) {
  const visor = document.getElementById('visor');
  if (visor.textContent === '0') {
    visor.textContent = valor;
  } else {
    visor.textContent += valor;
  }
}

function clearVisor() {
  document.getElementById('visor').textContent = '0';
}

function verificarOrigemDestino() {
  const origem = document.getElementById('origem').value.trim();
  const destino = document.getElementById('destino').value.trim();
  const distanciaInfo = document.getElementById('distancia-info');

  if (origem && destino && origem !== destino) {
    const distancia = preencherDistanciaAutomatica(origem, destino);
    if (!distancia) {
      distanciaInfo.classList.add('show');
    } else {
      distanciaInfo.classList.remove('show');
    }
  } else {
    document.getElementById('distancia').value = '';
    document.getElementById('distancia').disabled = true;
    distanciaInfo.classList.remove('show');
  }
}

function calcularEmissao() {
  const origem = document.getElementById('origem').value.trim();
  const destino = document.getElementById('destino').value.trim();
  const distancia = parseFloat(document.getElementById('distancia').value);
  const transporte = document.querySelector('input[name="transporte"]:checked')?.value;
  const resultado = document.getElementById('resultado');
  const loadingOverlay = document.getElementById('loading-overlay');
  const loadingImage = document.getElementById('loading-image');

  // Validações
  if (!origem || !destino || isNaN(distancia) || !transporte) {
    resultado.textContent = 'Por favor, preencha todos os campos';
    return;
  }

  // Validar distância
  if (distancia < 0) {
    resultado.textContent = 'Erro: Distância não pode ser negativa';
    return;
  }

  if (distancia === 0) {
    resultado.textContent = 'Erro: Distância deve ser maior que zero';
    return;
  }

  // Mostrar loading overlay com imagem do transporte selecionado
  resultado.textContent = '';
  loadingOverlay.classList.remove('hidden');
  loadingImage.src = imagensTransporte[transporte];

  // Aguardar 3 segundos e exibir resultado
  setTimeout(() => {
    const fator = fatoresEmissaoLocal[transporte];
    const emissao = distancia * fator;
    const creditosNecessarios = emissao / KG_POR_CREDITO;
    const valorTotal = emissao * VALOR_POR_KG;

    // Ocultar loading
    loadingOverlay.classList.add('hidden');

    // Exibir resultado com emissão, créditos necessários e valor
    resultado.innerHTML = `
      <div class="resultado-card">
        <p><strong>Emissão de CO₂:</strong> ${emissao.toFixed(2)} kg</p>
        <p><strong>Créditos Necessários:</strong> ${creditosNecessarios.toFixed(4)} crédito(s) (1 crédito = 1.000 kg CO₂)</p>
        <p><strong>Valor do Carbono:</strong> R$ ${valorTotal.toFixed(2)}</p>
      </div>
    `;
  }, 3000);
}
