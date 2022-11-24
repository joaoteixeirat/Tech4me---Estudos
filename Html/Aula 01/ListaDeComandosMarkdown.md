# Guia básico de Markdown
***

Markdown é uma linguagem simples de marcação frequentemente usada para formatar arquivos README, para escrever mensagens em fóruns de discussão online e para criar rich text usando um editor de texto simples.

## Lista de Comandos

- ### Titulação
    
    `# Título 1`
    `## Título 2`
    `### Título 3`
    `#### Título 4`
    `##### Título 5`
    `###### Título 6`
    
    **Exemplos:**

    # Título 1
    ## Título 2
    ### Título 3
    #### Título 4
    ##### Título 5
    ###### Título 6

***
- ### Ênfase

    Para adicionar ênfase ao conteúdo que será escrito, usa-se o asterisco * ou traço-baixo (underline) _:

    - **Negrito**: adicione dois asteriscos `**texto**` ou dois traços-baixos `__texto__` no início e no fim do conteúdo.
    - **Itálico**: adicione apenas um asterisco `*texto*` ou um traço-baixo `_texto_` no início e no fim do conteúdo.
    
    **Exemplos:**
    
    >Essa frase possui uma palavra em **negrito** e em *itálico*.
    
***
- ### Links

    Você pode usar duas maneiras de inserir links em Markdown, usando um link direto ou um texto-âncora:
    
    - **Link direto**: Envolva o endereço da web em chaves <>. O endereço ficará visível e será clicável pelo usuário. O endereço em forma de link direto tem o formato `<https://exemplo.com/>`
    
    - **Texto âncora**: Utilize os caracteres `[]()` adicionando entre chaves o texto que você quer que apareça, e entre os parênteses, o endereço de destino, no formato `[exemplo](https://exemplo.com/)`.

    **Exemplos:**
    
    >Esse é um [texto âncora](exemplo.com) e esse é um link direto <https://exemplo.com/>
    
***
- ### Lista de itens

    Para listas **não ordenadas**, utilize um asterisco * na frente to item da lista:
    
    `* Item 1`
    `* Item 2`
    `* Item 3`
    
    **Resultado:**
    
    * Item 1
    * Item 2
    * Item 3
    
    Para listas **ordenadas**, utilize o número do item seguido de ponto . :
    
    `1. Item 1`
    `2. Item 2`
    `3. Item 3`
    
    **Resultado:**
    
    1. Item 1
    2. Item 2
    3. Item 3
    
***

- ### Imagens

    Para inserir uma imagem no conteúdo é semelhante ao código de inserir links-âncora, adicionando um ponto de exclamação ! no início do código, exemplo:
    
    ~~~
    ![Alt ou título da imagem](URL da imagem)
    ~~~
    
    >Esta é uma linha com uma imagem personalizada ![Eddie Feliz](https://pipz.com/static/images/blog/eddie.png).
    >Imagens grandes podem estar em linhas individuais, para serem exibidas em maior tamanho.
    
***

- ### Citação (Quote)
 
    Para transformar um texto em uma citação ou comentário, utilize o sinal > no início da linha que será formatada:
    
    ~~~
    >Este é um *bloco de citação*. O sinal usado abre e fecha este código no HTML. 
    >Basta teclar Enter para adicionar mais uma linha à citação
    >Isso gerará um novo parágrafo dentro do *bloco de citação*.
    >Formatações de **negrito**, _itálico_ e <https://links.com> também funcionam aqui.
    ~~~
    
    **Resultado:**

    >Este é um **bloco de citação**. O sinal usado abre e fecha este código no HTML. 
    >Basta teclar Enter para adicionar mais uma linha à citação
    >Isso gerará um novo parágrafo dentro do *bloco de citação*.
    >Formatações de **negrito**, _itálico_ e <https://links.com> também funcionam aqui.
    
***
    
- ### Código (Code Highlight)

    Há dois modos de adicionar trechos de código ao Markdown:
    
    - **Código em linha** (_inline_): adicione um acento grave ˋ no início e no final do código.
    - **Múltiplas linhas de código**: envolva as linhas de código com três acentos graves ˋˋˋ ou três tils ~~~. 
    
    **Exemplos:**

    Esta é uma linha que contém um `código`.

    ~~~
    Esta é uma linha de código
    ~~~
    
    Para especificar que tipo de linguagem está sendo apresentada no bloco de códigos adicionando o nome da linguagem de programação após o ˋˋˋ ou ~~~, por exemplo ~~~javascript ou ~~~ruby. Veja nos exemplos abaixo:
    
    `~~~javascript`
    console.log("Hello, World!")
    `~~~`
    
    `~~~html`
    <code class="lang-markdown"></code>
    `~~~`
    
    `~~~json`
    {
      "nome": "Robert",
      "sobrenome": "Salles",
      "idade": 25
    }
    `~~~`
    
    **Resultado:**
    
    ~~~javascript
    console.log("Hello, World!")
    ~~~
    
    ~~~html
    <code class="lang-markdown"></code>
    ~~~
    
    ~~~json
    {
      "nome": "Robert",
      "sobrenome": "Salles",
      "idade": 25
    }
    ~~~

***

- ### Tabelas

    Escolha os títulos das colunas e use `|` para delimitar as colunas. Depois, utilize hífen `-` na segunda linha para indicar que acima estão os títulos das colunas, usando novamente o `|` para delimitar colunas. Veja um exemplo abaixo:
    
    Exemplo   `|` Valor do exemplo
    `--------- | ------`
    Exemplo 1 `|` R$ 10
    Exemplo 2 `|` R$ 8
    Exemplo 3 `|` R$ 7
    Exemplo 4 `|` R$ 8

    **Resultado:**
    
    Exemplo   | Valor do exemplo
    --------- | ------
    Exemplo 1 | R$ 10
    Exemplo 2 | R$ 8
    Exemplo 3 | R$ 7
    Exemplo 4 | R$ 8

    Para especificar o tipo de alinhamento que deseja ter nas tabelas, utilize `:` ao lado do campo horizontal de hífens `---`, na segunda linha da sua tabela. Veja abaixo:

    **Alinhado a esquerda:** usar `:` no lado esquerdo (_alinhamento padrão_);
    **Alinhado a direita:** usar `:` no lado direito;
    **Centralizado:** usar `:` dos dois lados.

    **Exemplo:**
    
    Alinhado a esquerda `|` Centralizado `|` Alinhado a direita
    `:--------- | :------: | -------:`
    Valor `|` Valor `|` Valor

    **Resultado:**
    
    Alinhado a esquerda | Centralizado | Alinhado a direita
    :--------- | :------: | -------:
    Valor | Valor | Valor

***

#### Fonte

[Pipz Platform | Actionable Customer Data Platform](https://docs.pipz.com/central-de-ajuda/learning-center/guia-basico-de-markdown#open)



