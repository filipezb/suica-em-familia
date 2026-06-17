# Briefing — Guia de viagem "Suíça em Família"

> Documento de contexto para continuar o projeto no **Claude Code**.
> Abra este arquivo junto com `suica-em-familia.html`.

---

## 1. O que é o projeto

Um **arquivo HTML único** (`suica-em-familia.html`): um guia de bolso *mobile-first* de uma viagem em família à Suíça, no inverno. Características:

- Auto-contido (CSS no `<head>`, JS pequeno no fim).
- Pensado para o celular; serve para abrir e compartilhar (WhatsApp, Google Drive).
- Funciona **offline**, com duas exceções: as **fontes** vêm do Google Fonts e os **links do Google Maps** precisam de internet.
- Linguagem simples e direta (a família viaja sozinha, sem guia).

---

## 2. Quem viaja

5 pessoas: pai (41), esposa (50), filho (4 anos — **grátis** no transporte), avô (66) e avó (62).
Obs.: as idades **não aparecem** no documento (foram removidas a pedido). Mantenha assim.

---

## 3. Voos (TAP) — confirmados

- **Ida — 25 dez:** SSA 00:25 → LIS 13:20 (TP 28) · LIS 13:20 → ZRH 17:10 (TP 932) · conf. **AYSCFR**
- **Volta — 05 jan:** ZRH 13:30 → LIS 16:50 (TP 931) · LIS 16:50 → REC 21:45 (TP 11) · conf. **CE4IJE**
- Pendência: conferir o tempo real de conexão em Lisboa (o app mostra "0 min").

> A viagem termina dia **05 jan** (não 04). Chegada em Zurique é à **noite** (17:10) no dia 25.

---

## 4. Hotéis

| Datas | Cidade | Hotel | Endereço / conf. |
|---|---|---|---|
| 25–28 dez | Zurique | Harry's Home Zürich-Wallisellen | Seidenplatz 3, 8304 Wallisellen · conf. 72071211947788 |
| 28–31 dez | Lucerna | Hotel de la Paix | Museggstrasse 2, 6004 Luzern · conf. 72071212305323 |
| 31 dez–03 jan | Interlaken | Hotel Lötschberg | perto de Interlaken West |
| 03–05 jan | Zurique | **A RESERVAR (2 noites)** | **PENDENTE** — perto da estação central |

---

## 5. Reservas e passes

- **Lindt Home of Chocolate:** 27 dez **10:00**, 4 adultos + 1 criança (grátis), CHF 68,00, pedido **1932968**, Kilchberg. Já pago.
- **Swiss Travel Pass** (2ª classe) **comprado**. Cobre trens, barcos, ônibus, bondes e ~500 museus (FIFA e Verkehrshaus inclusos) + o trem panorâmico Luzern–Interlaken.
  - **Não cobre** os topos de montanha (Titlis, teleférico Wengen→Männlichen) — só **desconto**.
  - **Reserva de assento** do trem panorâmico (31 dez) é taxa extra obrigatória na alta.

---

## 6. Roteiro dia a dia (resumo)

- **25 dez (sex) — Natal.** Chega ZRH 17:10. Transfer ao hotel em Wallisellen. Só jantar (tudo fechado).
- **26 dez (sáb) — feriado.** FIFA Museum (Enge) + centro histórico a pé. Volta de trem ao hotel.
- **27 dez (dom).** Lindt 10:00 (Kilchberg) + Zoo Zürich à tarde (Masoala Hall). Dia que mais cruza a cidade.
- **28 dez (seg).** Trem Zürich → Lucerna. Cidade Velha a pé.
- **29 dez (ter).** Lucerna: centro + Löwendenkmal de manhã; Verkehrshaus (Museu do Transporte) à tarde.
- **30 dez (qua) — neve.** Trem Lucerna → Engelberg; teleférico Engelberg→Trübsee→Titlis.
- **31 dez (qui) — Réveillon.** Manhã em Lucerna; trem panorâmico → Interlaken; Réveillon no Höhematte.
- **01 jan (sex) — feriado.** Interlaken tranquilo (Höhematte a pé). Dia-colchão para mau tempo.
- **02 jan (sáb) — feriado.** Trem Interlaken → Lauterbrunnen (Staubbach Falls) → Wengen.
- **03 jan (dom).** Trem Interlaken → Zurique. Check-in no hotel a reservar.
- **04 jan (seg).** Dia livre em Zurique → sugestão Cataratas do Reno (Rheinfall). Plano B: Zurique + malas.
- **05 jan (ter) — volta.** Trem ao aeroporto; voo 13:30.

---

## 7. Decisões e correções (memória do projeto)

- **Feriados** 25, 26 dez e 01 jan: comércio fechado, transporte reduzido — sempre conferir horários.
- **Dia 26 enxugado:** o app tinha 11 paradas; reduzido ao essencial (FIFA + centro).
- **Lindt fixa 27 @ 10:00**; o Zoo ficou na mesma tarde (cruza a cidade — aceito).
- **Trübsee Adventure** é atração de **verão (fechada no inverno)**; no inverno o forte é a neve. Engelberg↔Trübsee↔Titlis é **teleférico, não carro** (o app marcava carro).
- **Wengen é sem carros** — só de trem (o app marcava carro).
- **Trem BOB se divide em Zweilütschinen** — entrar na parte "Lauterbrunnen".
- **Harder Kulm fechado no inverno.**
- **Volta corrigida para 05 jan** (era 04); dia 04 ficou livre.
- **Dias curtos:** sol ~08:15–16:45; começar cedo nos dias de montanha.
- **Plataforma (Gleis) e minuto exato** dos trens: nunca fixados no guia — sempre confirmar no app **SBB Mobile** na véspera (mudam, ainda mais em feriado).

---

## 8. Estrutura técnica do HTML (para editar)

Arquivo único. CSS em `<style>` no `<head>`; JS no fim só faz o *toggle* da checklist (clique → classe `.done`). **Sem** `localStorage` (não persiste; é por sessão).

Fontes (Google): **Archivo** (títulos), **Inter** (corpo), **JetBrains Mono** (horários/dados). Cores em variáveis CSS (`:root`).

### Componentes / classes

- `.hero` — cabeçalho (título + datas + rota).
- `.section-label` — divisória de seção.
- `.key` — card de informação. Modificadores de etiqueta: `.tag.booked` (dourado), `.tag.pass` (azul claro), `.tag.warn` (vermelho), `.tag.howto` (verde), `.tag.flight` (azul). `.urgent` deixa o card com borda vermelha.
- `.day` › `.day-head` (`.date-num`, `.dow`, `.flag`, `.day-title`) › `.day-body`.
  - `.flag.holiday` (feriado), `.flag.party` (neve/réveillon), `.flag.air` (voo).
- `.row` = item da agenda: `.time` + `.what` (com `.note` para o detalhe).
- `.leg` = trecho de transporte: `.lbadge` (selo da linha) + `.od` (origem→destino, com `<small>` de detalhe) + `.dur` (duração).
  - Cores do selo: `.s` azul (S-Bahn/trem urbano), `.t` verde (bonde/ônibus), `.r` vermelho (trem entre cidades / regional), `.w` roxo (trem de montanha).
  - Convenção de texto: começar o `.od` com o **modo por extenso** e emoji — 🚆 Trem, 🚋 Bonde, 🚌 Ônibus.
- `.walk` = sub-passo a pé (borda pontilhada). Para "troca de trem" usa o mesmo bloco com o ícone 🚉.
- `.tip` (azul) e `.tip.alert` (vermelho) = avisos.
- `.maproute` = botão azul de **rota a pé** (link do Google Maps).
- `.maps-group` + `.maplink` = seção consolidada de **Mapas** (links de hotéis, rotas e atrações).
- `.check` = lista de mala (clicável; alterna `.done`).
- `.reminders` = rodapé escuro com lembretes numerados.

### Padrões de link do Google Maps

- **Rota a pé (vários pontos):**
  `https://www.google.com/maps/dir/?api=1&origin=<A>&destination=<B>&waypoints=<X>%7C<Y>%7C<Z>&travelmode=walking`
- **Ponto único:**
  `https://www.google.com/maps/search/?api=1&query=<lugar>`
- **Codificação:** espaço = `+` · `ü` = `%C3%BC` · `|` (separador de waypoints) = `%7C` · `'` = `%27`.

---

## 9. Pendências / próximos passos

1. **Reservar hotel em Zurique (03–05 jan)** e adicionar em 3 lugares: card "Suas bases", seção "Mapas" e a caminhada estação→hotel (dia 03).
2. Confirmar a **conexão em Lisboa** (ida e volta).
3. Reservar o **assento do trem panorâmico** (31 dez).
4. (Opcional) Mais rotas a pé, restaurantes por cidade, e botões "como chegar" da estação a cada hotel.

---

## 10. Exemplo de prompt para o Claude Code

> "Abra `suica-em-familia.html` e o `BRIEFING-suica.md`. Reservei o hotel de Zurique para 03–05 jan: **[NOME, ENDEREÇO]**. Atualize o card 'Suas bases', adicione o hotel na seção 'Mapas' e acrescente no dia 03 a caminhada da Zürich HB até o hotel. Mantenha o padrão visual e a linguagem simples já usados no arquivo."
