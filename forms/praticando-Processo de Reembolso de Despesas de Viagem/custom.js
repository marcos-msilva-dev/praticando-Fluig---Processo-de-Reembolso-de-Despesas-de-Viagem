// Evento executado após o carregamento do DOM
$(document).ready(function() {
    // Busca todos os inputs de data gerados que pertencem à tabela Pai e Filho
    $('input[name^="txtDataDespesa___"]').each(function() {
        var idCampo = '#' + $(this).attr('id');
        
        FLUIGC.calendar(idCampo, {
            language: 'pt-br',
            maxDate: new Date()
        });
    });
});

// Função chamada pelo botão "Adicionar Despesa"
function adicionarDespesa() {
    // 1. Adiciona a linha na tabela Pai e Filho e retorna o índice gerado
    var index = wdkAddChild('despesasTable');
    
    // 2. Inicializa o calendário do Style Guide especificamente para a nova linha criada
    // O Fluig renomeia os campos dinamicamente concatenando "___" + índice (ex: txtDataDespesa___1)
    FLUIGC.calendar('#txtDataDespesa___' + index, {
        language: 'pt-br', // Respeita a internacionalização do calendário
        maxDate: new Date() // Regra de negócio: impede a seleção de datas futuras
    });
}

// função de somar todas as despesas e atualizar o campo de total
function atualizarTotalDespesas() {
    var total = 0;
    $('input[name^="valorDespesa___"]').each(function() {
        var valor = $(this).val();
        if (valor) {
            total += parseFloat(valor.replace(',', '.')); // Converte para float, considerando vírgula como separador decimal
        }
    });

    // Atualiza o campo de total de despesas
    $('#valorTotal').val(total.toFixed(2).replace('.', ',')); // Formata para duas casas decimais e substitui ponto por vírgula
}
