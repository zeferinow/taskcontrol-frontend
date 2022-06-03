# UTILITIES LEVEL

Este é o último nível do triângulo do ITCSS. Agrupa classes utilitárias, com a capacidade de sobrescrever qualquer outra classe dos níveis anteriores ([settings](../settings/README.md), [tools](../tools/README.md), [generic](../generic/README.md) e [objects](../objects/README.md)).

### Regras:

- Só deve ser utilizado classes sem aninhamento;
- Alterar apenas um atributo (padrão [atomic/functional css](https://css-tricks.com/lets-define-exactly-atomic-css/));
- Utilizar `!important` no atributo alterado;
- Prefixar as classes com a letra `u`. E.g.: `u-rounded-border`;

Exemplos [aqui](https://github.com/inuitcss/inuitcss/tree/develop/utilities).

Código `SASS` exemplo:

```css
u-rounded-border {
  border-radius: 5px !important;
}
```

Código `HTML` exemplo:

```html
  <div class="u-rounded-border">

  </div>
```
