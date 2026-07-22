# 07 — Como continuar em outro PC

Passo a passo pra retomar o projeto em qualquer máquina.

## 🎯 Cenário 1: Filipe (usuário humano) mudou de PC

### Setup do novo PC

1. **Instalar Git for Windows**
   Download: https://git-scm.com/download/win
   Durante instalação: aceitar padrões, com Git Credential Manager ativado.

2. **Configurar credenciais Git**
   Abrir Git Bash e rodar:
   ```bash
   git config --global user.name "Filipe Bastos"
   git config --global user.email "filipezb@hotmail.com"
   ```

3. **Clonar o repositório**
   ```bash
   cd "c:/Users/Filipe/OneDrive/Documentos/Claude/Pessoal"
   git clone https://github.com/filipezb/suica-em-familia.git "Suiça"
   ```
   (Ou baixar ZIP direto de github.com/filipezb/suica-em-familia)

4. **Instalar Python 3** (se for gerar links de calendar novos)
   Download: https://www.python.org/downloads/

5. **Instalar Claude Code** (se quiser continuar com IA)
   - Baixar de https://claude.com/code
   - Login com a conta Claude
   - Abrir o diretório do projeto

### Retomar do zero

- **Ler primeiro:** o arquivo `README.md` desta pasta (`_handover-2026-06-27/README.md`)
- **Depois:** `02-reservas-status.md` e `03-pendencias.md` pra saber o que já foi feito e o que falta
- **Não perder:** memória do Claude (fica em `C:\Users\Filipe\.claude\projects\...`) — se conseguir copiar isso do PC antigo, mantém o histórico das preferências dele

### Backup da memória do Claude

No PC antigo:
```
C:\Users\Filipe\.claude\projects\c--Users-Filipe-OneDrive-Documentos-Claude-Pessoal-Sui-a\memory\
```

Copiar pasta inteira pra pen drive/nuvem e restaurar no PC novo. Contém `MEMORY.md` + arquivos individuais.

## 🎯 Cenário 2: Outro agente Claude/IA vai continuar

### O agente deve fazer

1. **Ler esta pasta inteira** na ordem dos arquivos (README → 00 → 01 → 02 → ... → 07)
2. Especial atenção a:
   - `05-decisoes-e-preferencias.md` — o que respeitar
   - `03-pendencias.md` — o que atacar
   - `04-links-importantes.md` — contatos e sites

3. **Verificar estado atual do código:**
   ```bash
   cd "c:/Users/Filipe/OneDrive/Documentos/Claude/Pessoal/Suiça"
   git status
   git log --oneline -5
   ```

4. **Perguntar ao Filipe** antes de agir sobre pendências novas ou críticas. Nunca fazer commits automáticos de decisões grandes sem confirmação.

## 🔧 Comandos essenciais do dia a dia

### Editar o guia e publicar
```bash
cd "c:/Users/Filipe/OneDrive/Documentos/Claude/Pessoal/Suiça"

# Editar index.html (ou outros arquivos)
# ...

# Bumpar cache do service worker (obrigatório após qualquer mudança visível)
# Editar service-worker.js: CACHE_VERSION = 'suica-vXX' (incrementar)

# Commit e push
git add -A
git commit -m "descrição da mudança"
git push
```

Em ~1 min, GitHub Pages atualiza. Família vê banner "Nova versão" ao abrir.

### Verificar site no ar
```bash
curl -sfI https://filipezb.github.io/suica-em-familia/ | head -1
```
Deve retornar `HTTP/2 200`.

## 🔑 Credenciais e acessos

**Não estão neste arquivo por segurança.** Ficam com o Filipe.
Quando precisar de acesso a algo pago (Hoteis.com, TAP, banco, Netlify), pedir ao Filipe pra fazer no dispositivo dele e mandar print/dados.

## 🚨 Coisas que NUNCA fazer

1. Nunca acessar contas do Filipe (email, banco, GitHub logado, Netlify) — só o Filipe faz
2. Nunca pedir senhas, tokens ou códigos 2FA
3. Nunca fazer push sem bumpar o CACHE_VERSION (se mudou HTML)
4. Nunca colocar as idades dos viajantes no guia
5. Nunca sugerir reacomodar voo TAP por conta própria (decisão já feita)
6. Nunca otimizar pra desktop (mobile-only sempre)

## 📞 Se precisar de ajuda

- **Perguntas técnicas do repo:** olhar `06-historico-mudancas.md` e `git log`
- **Contexto da viagem:** olhar `01-viajantes-e-datas.md`
- **Contatos externos:** olhar `04-links-importantes.md`
- **Como o Filipe gosta de trabalhar:** olhar `05-decisoes-e-preferencias.md`

## 📅 Data crítica próxima

**19/07/2026** — Filipe vai comprar o Titlis online. Se conseguir estar com o Claude aberto nesse dia, pode ajudar a fazer a compra. Depois disso o próximo marco é **30/09/2026** (assento trem panorâmico).

## 📦 Extras neste arquivo

O agente também deve ler, se disponíveis:

- `../BRIEFING-suica.md` — documento original do projeto (essencial)
- `../index.html` — o guia em si (estado atual)
- `../service-worker.js` — cache atual (versão v21)
- `../manifest.webmanifest` — metadados PWA
- Pasta `memory/` do Claude — preferências salvas do Filipe
