// src/componentes/contato.tsx
import React, { useState } from 'react';
import Button from './button'; 

export default function Contato() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState(''); 
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError('Por favor, insira um e-mail válido.');
      return;
    }

    if (!name) { 
      setError('Por favor, insira uma mensagem.');
      return;
    }

    setError('');
    setLoading(true);
    setSuccessMessage('');

    try {
      const cloudFunctionUrl = '(https://claudrunfuction-496327773725.southamerica-east1.run.app)'; 

      const response = await fetch(cloudFunctionUrl, {
        method: 'POST',
        headers: {
          'Authorization': "Bearer token", 
          'Content-Type': 'application/json', // Uso de 'Content-Type' padronizado
        },
        body: JSON.stringify({ toMail: email, content: name }),
      });

      if (response.ok) {
        setSuccessMessage('E-mail enviado com sucesso! Verifique também sua caixa de Spam!');
        setEmail('');
        setName('');
        // O console.log do .then() original, para ver a resposta da Cloud Function se quiser
        const data = await response.json().catch(() => ({}));
        console.log('Resposta da Cloud Function:', data);
      } else {
        // Tenta parsear o erro como JSON, caso o backend retorne um JSON de erro
        const errorData = await response.json().catch(() => ({}));
        setError(`Erro ao enviar e-mail: ${errorData.message || response.statusText}`);
        console.error('Erro detalhado da Cloud Function:', errorData);
      }
    } catch (err) {
      console.error('Erro de rede ou na requisição:', err);
      setError('Erro ao enviar e-mail. Tente novamente mais tarde.');
    } finally {
      setLoading(false);
    }
  };

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      <input
        type="email"
        className="contact-input"
        placeholder="Seu melhor Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <textarea
        className="contact-textarea"
        placeholder="Motivo do contato. Ex: Gostei muito do produto X, poderia me enviar um orçamento?"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <Button
        type="submit"
        text={loading ? 'Enviando...' : 'Enviar'}
        disabled={loading}
      />
    </form>
  );
}
