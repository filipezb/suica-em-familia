# 00 — Contexto do projeto

## O que é

**Guia de bolso da viagem em família à Suíça no inverno**, publicado como PWA (Progressive Web App) instalável no celular. A família viaja 25 dez 2026 → 05 jan 2027.

- **URL pública:** https://filipezb.github.io/suica-em-familia/
- **Repositório GitHub:** https://github.com/filipezb/suica-em-familia
- **Hospedagem:** GitHub Pages (100% grátis, repositório público)
- **Diretório local:** `c:\Users\Filipe\OneDrive\Documentos\Claude\Pessoal\Suiça`

## Regras fundamentais (memória do Filipe)

1. **MOBILE-ONLY** — nunca otimizar pra desktop, sempre pensar em celular
2. **App instalável** — PWA de verdade (manifest, service worker, ícones)
3. **Compartilhado por link único** — atualização vai pra família automática via banner "Nova versão"
4. **Sem localStorage** pra estado — checklist zera a cada sessão (era pedido do briefing original)

## Arquitetura do arquivo `index.html`

Arquivo **único e auto-contido**: CSS no `<head>`, JS no fim (só toggle de checklist + tabs + SW register).
Fontes vêm do Google Fonts (Archivo, Inter, JetBrains Mono).

### Navegação em 5 abas (bottom nav estilo iOS/Android)

```
[ ✈️ Voo ]  [ 🏨 Hotel ]  [ 📅 Dia ]  [ 🗺️ Mapas ]  [ ℹ️ Info ]
```

- **Voo** — voos TAP + card Swiss Pass
- **Hotel** — 4 hotéis (todos reservados) + jantar Réveillon (Schuh)
- **Dia** — 12 cards de dia colapsáveis (+/−), só o roteiro dia-a-dia
- **Mapas** — links Google Maps consolidados
- **Info** — Lindt (atalho de reserva paga) + Como ler trajetos + Entendendo transporte + Lembretes

### Cards de dia (colapsáveis)

Todos os 12 dias começam **fechados**. Clique no cabeçalho expande (+ vira −). Zero localStorage — cada sessão volta colapsado.

## PWA — arquivos obrigatórios

| Arquivo | Função |
|---|---|
| `index.html` | Guia (arquivo principal) |
| `manifest.webmanifest` | Metadados do app (nome, ícones, cor) |
| `service-worker.js` | Cache network-first + fallback offline · versão `suica-v21` |
| `icon-192.png` / `icon-512.png` / `icon-512-maskable.png` | Ícones Android |
| `apple-touch-icon.png` | Ícone iOS |
| `favicon-32.png` | Favicon navegador |
| `.nojekyll` | Diz pro GitHub Pages não processar como Jekyll |
| `BRIEFING-suica.md` | Briefing original do projeto (importante ler) |

## Fluxo de atualização

1. Editar `index.html` (ou outros)
2. **Bumpar** `CACHE_VERSION` em `service-worker.js` (v21 → v22, etc.) — obriga refresh nos celulares
3. `git add -A && git commit -m "..." && git push`
4. GitHub Pages atualiza em ~1 min
5. Ao abrir o app, família vê banner **"📲 Nova versão do guia disponível — Atualizar"**

## Design/Estilo

- **Cores:** azul-noite (#0E2233, #1E3C56), vermelho suíço (#D8232A), branco/gelo
- **Fonte títulos:** Archivo
- **Fonte corpo:** Inter
- **Fonte mono/dados:** JetBrains Mono
- **Ícones:** emoji (📍 🚉 🧳 🚡 🎫 etc.)
