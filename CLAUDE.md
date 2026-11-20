# Guia "Suíça em Família"

Guia de bolso da viagem em família à Suíça (25 dez 2026 → 05 jan 2027), publicado como app (PWA) para os 5 viajantes.

- **No ar:** https://filipezb.github.io/suica-em-familia/ (GitHub Pages, branch `main`)
- **Publicar = merge/push na `main`.** Em ~1 min o Pages atualiza e a família vê o banner "Nova versão" ao abrir o app.
- **`index.html` é a fonte da verdade** do roteiro, hotéis, trens e reservas. Não existe outro documento atualizado.

## Repositório público

Tudo aqui fica visível na internet. **Nunca commitar:** idades, telefone, e-mails, localizadores de voo, dados de passaporte, documentos (PDF/DOCX). Se precisar de um dado pessoal, peça ao Filipe na conversa.

## Regras do guia

1. **Só celular.** Pensar primeiro em tela de 375 px. Nunca otimizar para desktop.
2. **Toda mudança visível em `index.html` exige subir `CACHE_VERSION` em `service-worker.js`** (`suica-vNN` → `suica-vNN+1`). É o que faz o celular da família baixar a versão nova.
3. **Idades nunca aparecem no guia.**
4. Sem `localStorage` para estado. O hash da URL guarda só a aba atual.
5. Arquivo único e auto-contido (CSS e JS dentro do `index.html`). Manter o padrão visual e os componentes já existentes (`.day`, `.leg`, `.walk`, `.tip`, `.key`, `.reminders`).
6. Linguagem simples e direta: a família viaja sozinha, sem guia.

## A família

5 viajantes: casal, um filho pequeno (grátis no transporte) e os avós. Nas escolhas: trens diretos, pouca caminhada, avisar elevador/escada, atrações boas para criança. Bagagem só nos dias de troca de cidade (25, 28, 31 dez, 03 e 05 jan).

## Como trabalhar com o Filipe

- Respostas curtas e diretas, em português.
- Ao dar opções: marcar a recomendada e incluir a opção honesta de "esperar / não fazer".
- Pode commitar e publicar mudanças simples sem pedir, com mensagem no padrão do histórico: `Tópico: o que mudou`.
- Compras: preferir pagar em R$ quando possível (evita IOF); site oficial em CHF só quando é o único canal.

## Panorâmico 31 dez: assentos reservados

Luzern–Interlaken Express, PE 82 das 10:06 (plataforma 13). Reservado em 20/11/2026: 2ª classe, vagão 3, lugares 112 e 115–118, CHF 60 (5 × 12). Pendência encerrada.
