# 05 — Decisões e preferências do Filipe

Regras aprendidas ao longo da colaboração. Respeitar todas.

## Sobre o guia

### 1. Mobile-only, sempre
Nunca otimizar pra desktop. Filipe usa exclusivamente no celular. Todo componente novo tem que ser pensado pra tela de 375px de largura primeiro.

### 2. App instalável (PWA)
Manifest, service worker, ícones — tudo obrigatório. Manter `CACHE_VERSION` bumpando a cada mudança do HTML.

### 3. Compartilhado por link único
O link `filipezb.github.io/suica-em-familia` é o produto. Toda mudança tem que fluir por `git push` (o service worker cuida do resto).

### 4. Sem localStorage pra estado
- Checklist da mala zerava a cada sessão (foi decisão do briefing).
- Dias colapsados começam sempre fechados.
- URL hash guarda a aba atual (ex: `#dia`), mas nada além disso.

### 5. Idades fora do guia
Foi solicitado remover as idades. Nunca colocar de volta.

### 6. Bottom nav com 5 abas
- Voo · Hotel · Dia · Mapas · Info (nessa ordem)
- Filipe testou e aprovou visualmente
- Dia é a aba inicial (mais consultada)

## Sobre reservas e planejamento

### 7. Pagar em real quando possível
Filipe prefere Hoteis.com / Decolar / Booking em R$ (parcelado 10x sem juros) em vez de sites diretos em CHF (evita IOF de 5,38%). Exceção: quando o site oficial é o único canal (Schuh, Titlis, etc.).

### 8. Cartão dele vence dia 16
Compras grandes: agendar pra depois do dia 16 (dá fôlego). Ex: Titlis foi agendado pra 19/07.

### 9. Conexão de 1h15 na TAP — decisão de aceitar risco
Filipe decidiu aceitar o risco da conexão apertada em Lisboa (volta 05/01). Se perder por atraso da TAP, eles são obrigados a remanejar grátis (UE 261). Não sugerir de novo pedir reacomodação por conta própria — foi decidido.

### 10. Restaurante Réveillon: Schuh sobre outras opções
Foi escolhido por estar colado ao Höhematte (onde tem os fogos). Prioriza conforto pra família (avós + criança).

### 11. Fondue Villa como plano B, não plano A
O site estava fora do ar quando o Filipe tentou. Se Schuh negar, plano é Fondue Villa (Seestrasse 44), depois Bären e Stadthaus.

## Sobre estilo de resposta do agente

### 12. Ser direto, sem enrolação
Filipe não gosta de respostas longas ou repetitivas. Ir direto ao ponto.

### 13. Trazer opções, mas com recomendação
Ao apresentar escolhas, sempre marcar a recomendada. Filipe geralmente segue a recomendação.

### 14. Perguntas curtas via AskUserQuestion
Máximo 4 opções por pergunta. Recomendada é a primeira e marcada como "(Recomendado)".

### 15. Sempre incluir opção honesta de "não fazer / esperar"
Ex: quando o site do Titlis caiu, oferecer "esperar site voltar" como opção válida.

### 16. Autonomia sobre commits e push
Filipe autoriza commit + push a cada mudança (não precisa pedir permissão a cada vez pra decisões triviais). Mas commit deve sempre ter mensagem explicativa.

### 17. Bumpar service worker a cada mudança
Filipe conta com o banner "Nova versão" pra saber que atualizou. Nunca esquecer.

### 18. Nada de emojis em código
Só usar emoji quando o Filipe pediu ou quando é UI pra ele (bottom nav, ícones).

## Sobre a família

### 19. Criança de 4 anos é prioridade nas decisões
- Nos restaurantes, sempre pedir "high chair"
- Nas atrações, priorizar coisas interativas (Masoala Hall, Snow Park, Rotair, Cliff Walk)
- Nos trajetos, evitar longas caminhadas com criança cansada

### 20. Avós (66 e 62) precisam de conforto
- Preferir trens diretos (evitar múltiplas trocas)
- Sempre mencionar elevador vs escada rolante
- Plano B pra Titlis: avós podem ficar em Trübsee (2ª parada) sem subir aos 3.020m
- Cidade Velha de Lucerna: hotel de la Paix é colado ao Löwendenkmal (~30m de caminhada pro passeio começar)

### 21. Bagagem só nos dias de transfer
Dias com bagagem: 25 (chegada), 28 (Lucerna), 31 (Interlaken), 03 (Zurique volta), 05 (voo).
Nos outros, a família anda leve.

## Sobre gastos externos ao guia

### 22. Netlify Pro pagando à toa — descoberto e resolvido
O time "Promoções" no Netlify estava no Pro US$ 20/mês pra hospedar um único site estático (`promocoes-mensais.netlify.app` — dashboard interno da Nordil). Foi feito downgrade pra Free (efetiva 25 jul 2026) e ticket #1060345 aberto pedindo reembolso.
