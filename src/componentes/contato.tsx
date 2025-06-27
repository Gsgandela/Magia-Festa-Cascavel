const { app } = require('@azure/functions');
// 1. Importar o cliente de e-mail do Azure Communication Services
const { EmailClient } = require("@azure/communication-email");

// 2. Criar o cliente usando a Connection String das suas configurações
const connectionString = process.env.ACS_CONNECTION_STRING;
const emailClient = new EmailClient(connectionString);

app.http('SendEmailACS', {
  methods: ['POST'],
  authLevel: 'function',
  handler: async (req, context) => {
    try {
      context.log('Requisição recebida para envio via ACS');

      // O remetente precisa ser um endereço verificado no seu recurso ACS
      const senderAddress = process.env.ACS_SENDER_ADDRESS;
      let recipientAddress = 'gustavo.sganderla@gmail.com';
      let emailContent = 'Cliente entrou em contato';

      const data = await req.json();
      if (data?.toMail) recipientAddress = data.toMail;
      if (data?.content) emailContent = data.content;
      
      // 3. Montar a mensagem no formato do ACS
      const message = {
        senderAddress: senderAddress,
        content: {
          subject: "Contato cliente via site Magia Festa",
          plainText: emailContent,
        },
        recipients: {
          to: [
            {
              address: recipientAddress,
              displayName: "Visitante do Site",
            },
          ],
        },
      };

      // 4. Enviar o e-mail usando o SDK do ACS
      const poller = await emailClient.beginSend(message);
      const response = await poller.pollUntilDone();

      context.log('Email enviado com sucesso via ACS. Message ID:', response.id);

      return {
        status: 200,
        body: 'Email enviado com sucesso via Azure Communication Services',
      };

    } catch (err) {
      context.log.error('Erro ao enviar e-mail via ACS:', err);
      return {
        status: 500,
        body: 'Erro ao enviar e-mail via ACS',
      };
    }
  }
});