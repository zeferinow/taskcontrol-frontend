# Root Variables

Este diretório agrupa todas as variáveis css ([Css Custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)) do projeto e **NÃO FAZ PARTE DO PADRÃO ITCSS**, sendo uma particularidade deste projeto.

## Colors

Agrupa todas as cores dinâmicas do projeto. Cores dinâmicas são todas aquelas que podem ser alteradas em runtime. Para cores estáticas deve ser utilizado o fonte `src/app/styles/settings/_colors.scss`;

### Padrão de nomeação de cores

Todas as cores devem seguir o padrão de `color-${nome_da_cor}` para a cor base e `color-${nome_da_cor}-${luminosidade}` para suas variações. Exemplos: `color-info`, `color-info-light-1`, `color-info-light-2`, `color-info-dark-1`, `color-info-dark-2`, etc.

A luminosidade (terceiro componente do nome da variável), do sistema de cores [HSL](https://en.wikipedia.org/wiki/HSL_and_HSV), segue o padrão de `light_${num}` para luminosidades maiores e `dark_${num}` para luminosidades menores. Cada numero representa 10% no sistema `HSL`. Por exemplo, considerando a cor `hsl(0, 1%, 60%)` (`#9a9898` em HEX) como base, sua variação `dark-1` seria `hsl(0, 1%, 50%)`, e sua variação `light-1` seria `hsl(0, 1%, 70%)`. O único caso que foje desta regra é a primeira variação, que utiliza o numero 0 (dark-0, light-0), onde a diferença é de 5% ao invés de 10%.

## Measures

Agrupa todas as variáveis de medida do projeto.

## Stacking

Agrupa todas as variáveis de [Stacking Context (z-index)](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context) do projeto.
