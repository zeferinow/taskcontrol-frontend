# OBJECTS LEVEL

Objetos, do conceito de [media objects](https://github.com/stubbornella/oocss/wiki/Content#template) do [OOCSS](https://github.com/stubbornella/oocss/wiki), utilizando o padrão [BEM](http://getbem.com/introduction/).
Geralmente objetos são trechos estilo utilizados por multiplos componentes. Desta forma, se faz mais abstrato que um componente. Objetos devem ser reutilizáveis pelo projeto, sem presumir estrutura `html`. Objetos comumente também servem como base para componentes.

### Regras:

- Deve ser implementado apenas utilizando classes, sem aninhamento;
- Todas as classes devem ser prefixadas com `o-`;
- Representar composição (elementos BEM) com `__`: `.card__header`;
- Representar variação (modificadores BEM) com `--`: `.card--small`;
- Todo Bloco BEM deve ser reutilizável independente do contexto;
- Elementos BEM podem conter modificadores: `.card__header--small`;
- Casos especificos, como theming de blocos, podem conter seletores aninhados: dada o bloco `.card` e a variação `.card--christmas`, é permitido, apenas neste contexto, utilizar seletores aninhados como `.card--christmas .card__header {}`;

Exemplos [aqui](https://github.com/inuitcss/inuitcss/tree/develop/objects).

Por que usar a prática BEM (resumo):

- Manter a simplicidade no [calculo](https://specificity.keegan.st/) de [especificidade](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) CSS;
- Possibilita o conceito de componentes reutilizaveis pelo projeto.
  - Um bloco (`B` do `BEM`) `panel` pode ser reutilizado pelo projeto todo;
  - Fácil composição através dos elements (`E` do `BEM`), como `panel__header`, por exemplo;
  - Variação de aparência através dos modifiers (`M` do `BEM`), como `panel--dark`;
- Proporciona um idioma comum nos fontes de estilos;

### Código exemplo

`card.sass`:

```css
  .card {         // <-- BLOCO - ->B<-EM
    display: flex;
    width: 300px;
    height: 400px;
    border: 1px #121212 solid;
    border-radius: 3px;
  }

  .card__header { // <-- ELEMENTO - B->E<-M
    width: 100%;
    height: 100px;
  }

  .card--small {  // <-- MODIFICADOR - BE->M<-
    width: 100px;
    height 125px;
  }

  .card__header--small { // <-- MODIFICADOR DO ELEMENTO - B->E<-M
    height: 15px;
  }
```

`card.html`:

```html
<!-- bloco -->
<div class="card">
  <!-- elemento -->
  <div class="card__header">
    I`m a card header
  </div>
  im a card
</div>

<!-- modificador -->
<div class="card card--small">
  <!-- elemento -->
  <div class="card__header card__header--small">
    I`m a card header
  </div>
  I`m a small card :O
</div>
```

[Próximo nível](../components/README.md).
