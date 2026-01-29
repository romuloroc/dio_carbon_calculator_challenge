# DIO Desafio Calculadora de Carbono - Instruções para Agentes IA

## Visão Geral do Projeto
Este é o **DIO Desafio Calculadora de Carbono** - um projeto educacional da Digital Innovation One para construir uma aplicação de cálculo de pegada de carbono. O desafio foca em implementar um sistema para calcular e rastrear emissões de carbono de várias fontes.

## Arquitetura & Conceitos Principais

### Estrutura de Aplicação Esperada
A calculadora de carbono deve seguir este padrão:
- **Modelos de Dados**: Classes/modelos representando fontes de emissão (transporte, energia, consumo)
- **Motor de Cálculo**: Lógica central para computar pegada de carbono baseada em entradas do usuário
- **Interface de Usuário**: Interface CLI ou web para entrada de dados e exibição de resultados
- **Persistência de Dados**: Mecanismo de armazenamento para histórico de cálculos e dados de usuário

### Componentes-Chave (Implementar Conforme Necessário)
1. **Categorias de Emissão**
   - Transporte (distância × fator de emissão)
   - Consumo de energia (eletricidade, gás, aquecimento)
   - Consumo de bens & serviços
   - Geração de resíduos

2. **Fluxo de Cálculo**
   - Aceitar entrada do usuário para dados de atividade/consumo
   - Aplicar fatores de emissão (kg CO₂ equivalentes)
   - Agregar e categorizar resultados
   - Exibir total e discriminação por categoria

3. **Fluxo de Dados**
   - Entrada → Validação → Cálculo → Armazenamento → Saída

## Convenções de Desenvolvimento

### Organização de Código
- Agrupar lógica de cálculo relacionada por categoria de emissão
- Usar constantes/configs para fatores de emissão (estes podem mudar com padrões)
- Separar lógica de apresentação da lógica de cálculo
- Usar nomes de variáveis significativos refletindo as quantidades físicas (ex: `distancia_km`, `fator_emissao_kg_co2`)

### Abordagem de Testes
- Testar cálculos de fatores de emissão com valores conhecidos
- Validar intervalos de entrada (ex: sem distâncias negativas)
- Verificar totais contra cálculos manuais
- Incluir casos extremos (consumo zero, valores muito grandes)

## Padrões Comuns do Desafio DIO

Este desafio tipicamente requer:
- **Linguagem**: JavaScript/Python são comuns (verificar scaffolding do projeto)
- **Escopo**: MVP com 3-5 categorias de emissão
- **Validação**: Validação de entrada é essencial (dados inválidos não devem calcular)
- **Formato de Saída**: Resumo claro mostrando total e discriminação por fonte
- **Recursos Bônus**: Rastreamento de tendências, comparação com médias, funcionalidade de exportação

## Primeiros Passos
1. Definir seus modelos de dados de emissão
2. Criar constantes de fatores de emissão
3. Implementar métodos de cálculo com validação adequada
4. Construir interface de entrada
5. Adicionar exibição de resultados com discriminação
6. (Opcional) Implementar persistência e análise

## Referência de Estrutura de Arquivos
Uma vez implementado, organize como:
```
.
├── src/
│   ├── models/           # Estruturas de dados para emissões
│   ├── calculators/      # Lógica de cálculo
│   ├── constants/        # Fatores de emissão
│   └── ui/              # Camada de interface
├── tests/               # Suites de testes
├── README.md           # Descrição do projeto
└── package.json        # Dependências (se Node.js)
```
