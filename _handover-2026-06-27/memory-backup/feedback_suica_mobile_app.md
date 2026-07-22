---
name: feedback-suica-mobile-app
description: "Guia \"Suíça em Família\" deve ser 100% mobile e funcionar como app instalável, com atualizações que todos da família consigam acompanhar automaticamente."
metadata: 
  node_type: memory
  type: feedback
  originSessionId: e0ec8dae-cd21-460e-ae70-40e8df8521e6
---

O arquivo `suica-em-familia.html` é para **uso exclusivo em celular**. Nunca otimizar para desktop, nunca priorizar layout largo, nunca adicionar feature que só faça sentido em telão.

Além disso, precisa funcionar como **app** — instalável na tela inicial do celular (PWA), abrir em tela cheia, ter ícone próprio — e ser **compartilhável por link**: quando o Filipe atualizar o guia, todos os 5 viajantes da família (esposa, filho, pai, mãe) devem ver a versão nova automaticamente ao abrir o app.

**Why:** A viagem é em família (5 pessoas) e o guia é o instrumento que todos vão consultar no dia a dia, no celular, durante a viagem (25 dez 2026 → 05 jan 2027). Mudanças de última hora (reserva atualizada, horário corrigido, hotel novo) precisam chegar a todos sem ele ter que reenviar arquivo no WhatsApp toda vez.

**How to apply:**
- Toda mudança no HTML: validar mentalmente "isso funciona bem num celular?" antes de "isso fica bonito no navegador?".
- Manter o arquivo HTML único (auto-contido) que o briefing descreve, mas adicionar o necessário para virar PWA (manifest, service worker, ícone, meta tags de instalação).
- A distribuição é por **URL hospedada** (não envio de arquivo). Atualização = git push → todos veem na próxima abertura.
- Service worker deve usar estratégia "network-first com fallback offline" para que atualizações cheguem mas o guia funcione sem sinal (Suíça tem dados, mas teleférico/montanha às vezes não).
