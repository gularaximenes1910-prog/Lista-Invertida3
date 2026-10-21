
// Lista inicial de estudantes
const listaDeEstudantes = [
    "Beatriz Oliveira",
    "Carlos Eduardo",
    "Daniela Santos",
    "Gabriel Ferreira",
    "Helena Rodrigues",
    "Lucas Vinicius"
];

// Referências dos elementos HTML
const elementoLista = document.getElementById("listaEstudantes");
const elementoContador = document.getElementById("contadorNomes");
const campoNome = document.getElementById("campoNovoNome");

// Adicionar um novo estudante
function adicionarNovoNome() {
    const nome = campoNome.value.trim();

    // Verificar se o campo está vazio
    if (nome === "") {
        elementoContador.innerText = "Digite um nome antes de cadastrar.";
        elementoContador.style.color = "#dc2626";
        campoNome.focus();
        return;
    }

    // Verificar se o nome já existe
    for (let i = 0; i < listaDeEstudantes.length; i++) {
        if (
            listaDeEstudantes[i].toLowerCase() ===
            nome.toLowerCase()
        ) {
            elementoContador.innerText =
                "Erro: este estudante já está cadastrado.";

            elementoContador.style.color = "#dc2626";
            campoNome.select();
            return;
        }
    }

    // Adicionar o nome ao final do Array
    listaDeEstudantes.push(nome);

    // Atualizar a lista na tela
    exibirListaAutomaticamente();

    // Informar o sucesso do cadastro
    elementoContador.innerText =
        `Estudante "${nome}" cadastrado com sucesso!`;

    elementoContador.style.color = "#16a34a";

    // Limpar e selecionar o campo para a próxima digitação
    campoNome.value = "";
    campoNome.select();
    campoNome.focus();
}

// Exibir estudantes em ordem inversa usando while
function exibirOrdemInvertida() {
    let contador = listaDeEstudantes.length - 1;

    // Limpar a lista atual
    elementoLista.innerHTML = "";

    // Percorrer do último índice até o índice zero
    while (contador >= 0) {
        const itemLi = document.createElement("li");
        itemLi.className = "item-nome";

        itemLi.innerHTML = `
            <span>${listaDeEstudantes[contador]}</span>
            <span class="posicao-tag">#${contador + 1}</span>
        `;

        elementoLista.appendChild(itemLi);

        // Decrementar o contador
        contador--;
    }

    // Atualizar a barra de status
    elementoContador.innerText =
        "Estudantes exibidos em ordem inversa.";

    elementoContador.style.color = "#2563eb";
}

// Exibir estudantes na ordem original
function exibirListaAutomaticamente() {
    elementoLista.innerHTML = "";

    for (let i = 0; i < listaDeEstudantes.length; i++) {
        const itemLi = document.createElement("li");
        itemLi.className = "item-nome";

        itemLi.innerHTML = `
            <span>${listaDeEstudantes[i]}</span>
            <span class="posicao-tag">#${i + 1}</span>
        `;

        elementoLista.appendChild(itemLi);
    }

    elementoContador.innerText =
        `Total exibido: ${listaDeEstudantes.length} estudantes cadastrados.`;

    elementoContador.style.color = "#16a34a";
}

// Limpar somente a exibição da lista
function limparLista() {
    elementoLista.innerHTML = "";

    elementoContador.innerText =
        "Lista limpa na tela. Os nomes continuam armazenados.";

    elementoContador.style.color = "#475569";
}

// Mostrar a lista ao carregar a página
exibirListaAutomaticamente();
