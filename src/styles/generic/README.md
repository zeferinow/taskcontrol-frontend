# GENERIC LEVEL

[Resets e normalizers](https://css-tricks.com/reboot-resets-reasoning/). Este é o primeiro nível que geral CSS, os dois nívies anteriores ([settings](../settings/README.md) e [tools](../tools/README.md)) geram apenas artefatos SASS como variáveis, mixins e funções.

Exemplos [aqui](https://github.com/inuitcss/inuitcss/tree/develop/generic).

O que são resets?
Em resumo: Remove o styling default do browser. Um exemplo é o [normalizer](https://necolas.github.io/normalize.css/), que altera os stylings padrões de cada elemento, para que apresente uma aparência normalizada entre os browsers. Qualquer outro estilo que sirva como base, como frameworks CSS em geral, também são resets. O Metronic, que é um framework CSS e serve como uma base de estilos, para que o app implemente estilos tendo-os como base, é um reset.

Como frameworks grandes como o metronic podem conter fontes que geram css, variaveis, funcoes e etc, o conceito de ITCSS acaba sendo impactado. No ITCSS, artefatos não CSS do Sass são implementados APENAS nos níveis [settings](../settings/README.md) e [tools](../tools/README.md), porém o uso de frameworks grandes faz com que o nivel generic também gere artefatos não CSS Sass.

[Próximo nível](../elements/README.md).
