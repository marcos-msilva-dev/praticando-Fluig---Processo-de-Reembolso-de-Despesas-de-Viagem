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
