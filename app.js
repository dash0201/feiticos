function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

     // Obtém o termo de pesquisa digitado pelo usuário e converte para minúsculas
    let termoPesquisa = document.getElementById("busca").value.toLowerCase();

    // Inicializa variáveis para armazenar os resultados e dados temporários
    let resultados = "";
    let titulo ="";
    let descricao="";
    let tags="";

    // Exibe a seção de resultados (caso esteja oculta)
    section.style.display = "block";

      // Verifica se o termo de pesquisa está vazio ou contém apenas espaços em branco
    if ((!termoPesquisa) || termoPesquisa.trim()=="" ){
        // Se estiver vazio, exibe uma mensagem de erro e encerra a função
        section.innerHTML="<p id='aviso'>Nada foi encontrado. Digite o seu feitiço</p>";
        return;
    }

    // Itera sobre cada item nos dados
    for(let dado of dados) {
        // Converte o título, descrição e tags para minúsculas para facilitar a comparação
        titulo=dado.titulo.toLowerCase();
        descricao=dado.descricao.toLowerCase();
        tags=dado.tags.toLowerCase();

        // Verifica se o termo de pesquisa está presente em alguma das propriedades
        if (titulo.includes(termoPesquisa) || descricao.includes(termoPesquisa) || tags.includes(termoPesquisa)) {
            resultados += `
            <div class="itemresultado">
                <div class="imagem-titulo">
                    <img src="${dado.imagem}" alt="">
                    <h2>${dado.titulo}</h2>
                </div>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank">Saiba mais...</a>
            </div>
            `

            // Configura a seção de resultados para ter uma barra de rolagem
            section.style.overflowY = 'auto';
            section.style.maxHeight = '300px';
        }
    }
    // Se nenhum resultado foi encontrado, exibe uma mensagem
    if (!resultados) {
        resultados = "<p id='aviso'>nada foi encontrado</p>"
    }
    // Atualiza o conteúdo da seção com os resultados
    section.innerHTML = resultados;
}

