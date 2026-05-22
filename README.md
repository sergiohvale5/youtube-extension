# 🎬 CaptionFlow — Documentação do Projeto

## 📌 Visão Geral

O **CaptionFlow** é uma extensão para YouTube desenvolvida para automatizar a geração de legendas utilizando IA.

A proposta do projeto é permitir que o usuário:

- faça login com Google
- conecte sua conta do YouTube
- acesse informações do canal
- futuramente gere legendas automáticas diretamente na plataforma

O projeto está em fase inicial de desenvolvimento (*Discovery / Prova de conceito*), focado na autenticação OAuth2 e comunicação com a API do YouTube.

---

# 🧠 Objetivo do Projeto

Criar uma extensão capaz de:

1. autenticar usuários via OAuth Google
2. acessar dados do canal do YouTube
3. obter vídeos publicados
4. processar áudio utilizando IA
5. gerar legendas automáticas
6. publicar legendas diretamente no YouTube

---

# ⚙️ Tecnologias Utilizadas

## Frontend / Extensão

- TypeScript
- HTML
- CSS
- JavaScript
- Manifest V3
- Chrome Extension APIs

---

## APIs e Integrações

- Google OAuth2
- YouTube Data API v3

---

## Futuras tecnologias planejadas

- Node.js
- Express
- SQLite
- FFmpeg
- OpenAI Whisper
- React

---

# 🔐 Fluxo Atual de Autenticação

## Processo implementado

### 1. Usuário clica em:

```text
Login Google
```

---

### 2. Extensão inicia OAuth Google

Utilizando:

```ts
chrome.identity.launchWebAuthFlow()
```

---

### 3. Usuário autentica conta Google

O Google retorna:

```text
access_token
```

---

### 4. Token é utilizado na API do YouTube

Endpoint utilizado:

```text
https://www.googleapis.com/youtube/v3/channels
```

---

### 5. Sistema verifica se usuário possui canal

Resposta esperada:

```text
Canal encontrado
```

ou

```text
Nenhum canal encontrado
```

---

# 🧪 Funcionalidades Implementadas

## ✅ OAuth Google funcionando

- autenticação OAuth2
- captura de access_token
- integração com Chrome Identity API

---

## ✅ Comunicação com API do YouTube

- requisição autenticada
- obtenção de dados do canal
- validação de conta com canal

---

## ✅ Tratamento básico de erros

- token vazio
- falha na autenticação
- status HTTP 403
- erros de servidor

---

# 📄 Arquivos Principais

## `envConfig.ts`

Responsável pelas configurações OAuth:

```ts
export const env = {
    client_id: "...",
    scopes: "https://www.googleapis.com/auth/youtube.force-ssl"
}
```

---

## `oauthTest.ts`

Responsável por:

- iniciar OAuth
- obter token Google
- validar autenticação

Principais APIs utilizadas:

- `chrome.identity.getRedirectURL()`
- `chrome.identity.launchWebAuthFlow()`

---

## `listVideos.ts`

Responsável por:

- buscar informações do canal
- consumir API do YouTube
- validar retorno da API

---

# 🧠 Conceitos Estudados no Projeto

## OAuth2

Fluxo de autenticação Google utilizando access_token.

---

## Chrome Extension APIs

Uso da API:

```text
chrome.identity
```

---

## YouTube Data API

Consumo de endpoints autenticados.

---

## Programação assíncrona

Uso de:

- async/await
- fetch API
- tratamento de promises

---

# 🚀 Próximas Etapas do Projeto

## FASE 1 — Discovery (atual)

### Objetivo

Provar viabilidade da integração.

### Status

✅ Em andamento

### Implementado

- OAuth Google
- conexão YouTube API
- validação de canal

---

# 🔜 Próximas implementações

## 📺 Listagem de vídeos do canal

### Objetivo

- buscar vídeos publicados
- renderizar informações do canal

---

## 🎥 Processamento de mídia

### Objetivo

- obter áudio do vídeo
- preparar mídia para transcrição

### Tecnologia

- FFmpeg

---

## 🤖 Integração com IA

### Objetivo

- transformar áudio em texto
- gerar legendas automáticas

### Tecnologia

- OpenAI Whisper

---

## 📝 Geração de arquivos `.srt`

### Objetivo

- criar legendas compatíveis com o YouTube

---

## ☁️ Publicação automática de legenda

### Objetivo

- enviar legendas diretamente para o vídeo no YouTube

---

# 🧱 Arquitetura Planejada

## Backend

```text
Node.js + Express + TypeScript
```

---

## Banco de dados

```text
SQLite
```

---

# 🎯 Objetivo Final

Permitir que criadores de conteúdo:

- gerem legendas automaticamente
- publiquem legendas diretamente no YouTube
- automatizem tarefas manuais
- utilizem IA integrada ao fluxo da plataforma

---

# 📌 Status do Projeto

```text
STATUS: EM DESENVOLVIMENTO
FASE: DISCOVERY / PROVA DE CONCEITO
```
