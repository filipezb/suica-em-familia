# 06 — Histórico do que já foi feito

Sumário do que a colaboração produziu desde o começo. Ordem cronológica reversa (mais recente primeiro). Para o log completo, veja `git-log.txt`.

## Junho 2026 (últimas 2 semanas)

### Setup PWA (transformar HTML em app instalável)
- Adicionado `manifest.webmanifest`, `service-worker.js`, ícones PNG (192, 512, 512-maskable, apple-touch, favicon)
- HTML ganhou meta tags iOS/Android, registro do SW, banner de atualização
- Estratégia: network-first + fallback offline
- Publicado em https://filipezb.github.io/suica-em-familia/

### Navegação em 5 abas + bottom nav
- Refactor grande: HTML organizado em 5 seções colapsáveis
- Voo · Hotel · Dia · Mapas · Info (Mala foi removida)
- Bottom nav fixa estilo iOS/Android
- URL hash guarda aba atual

### Dias do roteiro colapsáveis (+/−)
- Todos os 12 dias começam fechados
- Toque no cabeçalho expande/recolhe

### Enriquecimento massivo dos cards de trecho (.leg)
- Cada trecho agora tem: linha específica (S2/IR70/BOB/etc.), sentido, nº de paradas até descer, frequência, dica prática
- Botão azul "🔍 Ver horário ao vivo (SBB)" gerado dinamicamente via JS

### Enriquecimento de locomoção em todos os dias
- Cada dia ganhou: tempo total porta-a-porta, "onde achar a estação", "qual saída usar", bagagem em dias de transfer
- Cronograma detalhado

### Reservas concretizadas neste ciclo
- **Hotel Zurique 03-05 jan** reservado (Harry's Home Wallisellen · conf 72076039098951 · via Hoteis.com em R$ parcelado)
- **Café Schuh** solicitação enviada (aguardando confirmação)

### Correções importantes descobertas
- **Verkehrshaus:** só 50% off (não é grátis com Swiss Pass como dizia o briefing)
- **Titlis:** Rotair estará aberto (manutenção termina 11/12/2026, antes da viagem)
- **Rheinfall:** barco fechado em janeiro (só abr-out)
- **Zoo Zürich:** não está no Swiss Pass, pago integral

### Voos TAP — horários corrigidos
- Antes: horários errados no app do Filipe (mostrava 0 min de conexão)
- Depois: confirmados no app My TAP em 27/06/2026
- Descoberto que **conexão volta é de apenas 1h15** — Filipe decidiu aceitar o risco

### Lembretes de Calendar criados
- Diário 28/06-05/07: conferir email do Schuh
- 19/07/2026: comprar Titlis online (CHF 192)
- 30/09/2026: reservar assento trem panorâmico (CHF 48)

### Descoberta paralela: Netlify Pro pagando à toa
- Time "Promoções" no Netlify estava no Pro US$ 20/mês
- Downgrade agendado pra 25/07/2026
- Ticket #1060345 aberto pedindo reembolso

## Commits recentes (últimos 30)

Veja `git-log.txt` na mesma pasta. Amostra:

```
7827efd FIFA Museum: Swiss Pass não permite reserva online (corrige aviso)
04f4c94 Conexão TAP: tom calmo + plano caso perda (Filipe topou risco)
e28cd29 TAP horários confirmados no app oficial - conexão volta = 1h15 (limite!)
a302c34 Schuh: solicitação enviada, aguardando confirmação final
87d9d12 Hotel 03-05 jan RESERVADO: Harry's Home Wallisellen
```

## Versões do Service Worker (evolução)

- **v1** → PWA inicial
- **v2** → correções reserva
- **v3** → rename index.html
- **v4** → info aba
- **v5-v6** → enriquecimento cards
- **v7** → conexão TAP
- **v8** → dia 25 piloto de locomoção
- **v9** → locomoção em todos os dias
- **v10** → restaurantes Réveillon
- **v11** → dias colapsáveis
- **v12** → limpeza dia 26
- **v13** → link Maps FIFA
- **v14** → aviso reserva FIFA (depois corrigido)
- **v15** → preços das atrações
- **v16** → dia 30 detalhado (Titlis + Snow Park)
- **v17** → hotel Zurique 03-05 reservado
- **v18** → Schuh solicitação
- **v19** → horários reais TAP
- **v20** → tom conexão TAP calmo
- **v21** → correção FIFA (sem reserva online)

**Próximo bump:** v22
