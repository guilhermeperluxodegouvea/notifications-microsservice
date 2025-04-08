# Notificações API (E-mail & WhatsApp)

Este projeto é uma API desenvolvida em **TypeScript com Node.js e Express** que realiza o envio de notificações por e-mail e WhatsApp.

## Envio de E-mails

A rota /notifications/email permite o envio de e-mails utilizando um provedor SMTP configurado via variáveis de ambiente.
O corpo da requisição deve conter:

```
{
  "to": "destinatario@exemplo.com",
  "subject": "Assunto",
  "html": "<p>Corpo do e-mail em HTML</p>"
}
```

Essa funcionalidade utiliza a biblioteca **nodemailer** e envia o e-mail real de acordo com as credenciais SMTP fornecidas.

## Envio de WhatsApp (Simulado)
A rota /notifications/whatsapp simula o envio de mensagens pelo WhatsApp.

Por padrão, o código não realiza chamadas reais para a API da Meta. Ele apenas imprime no console a simulação:

```
[SIMULADO] WhatsApp enviado para +5521999999999: Sua mensagem aqui
```
Para uso real, basta descomentar o bloco indicado no arquivo config/whatsapp.ts e definir as variáveis WHATSAPP_API_URL e WHATSAPP_ACCESS_TOKEN no .env. Isso permitirá chamadas reais à API oficial do WhatsApp Business da Meta.

## Teste rápido via HTML
O projeto possui um arquivo index.html que serve apenas para demonstração local.
Ele permite testar o envio de e-mails e simulações de WhatsApp por meio de um formulário simples. Não faz parte da API em uso real.

## Tecnologias utilizadas
- Node.js
- TypeScript
- Express
- Nodemailer
- Axios
- dotenv
