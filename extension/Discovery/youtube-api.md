# YouTube API

## endpoints

### videos.list
Usado para buscar informações do vídeo.

Funções:
- validar vídeo
- pegar título
- pegar status
- confirmar videoId

---

### captions.insert
Usado para subir legenda.

Funções:
- upload de arquivo .srt
- publicar legenda no vídeo

---

### captions.update
Usado para atualizar legenda existente.

Funções:
- trocar arquivo
- corrigir legenda
- atualizar idioma
- atualizar nome da caption

---

## formato captions

### SRT

Exemplo:

```srt
1
00:00:00,000 --> 00:00:03,000
Olá pessoal

2
00:00:03,000 --> 00:00:05,000
Bem vindos
```

Estrutura:
- índice
- tempo inicial
- -->
- tempo final
- texto
- linha vazia

Formato de tempo:
HH:MM:SS,mmm

Ex:
00:01:32,450

---

## limites

(depois)