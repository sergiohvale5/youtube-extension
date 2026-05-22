# OAuth

## objetivo
Permitir login Google dentro da extensão.

---

## fluxo

Usuário clica login
→ Google abre popup
→ usuário autoriza
→ Google retorna token
→ extensão usa token
→ chama YouTube API

---

## tecnologias

- OAuth 2.0
- chrome.identity API
- Google OAuth Consent Screen

---

## scope utilizado

https://www.googleapis.com/auth/youtube.force-ssl

---

## retorno esperado

access_token OAuth

---

## uso do token

Authorization: Bearer TOKEN

---

## observação

chrome.identity só funciona dentro de extensão Manifest V3.