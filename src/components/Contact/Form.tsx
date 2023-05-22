import { FormEvent, useState } from 'react';
import { FormContainer } from './styles';
import { sendContactMail } from '../../services/sendMail';

export const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log(name, email, message)

    await sendContactMail(name, email, message);
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <div className="display">
        <div className="input__group">
          <label htmlFor="name">Seu Nome</label>
          <input 
            type="text" 
            name="nome"
            value={name}
            onChange={({ target }) => setName(target.value)}
            id="name" 
            placeholder="Seu nome" />
        </div>
        <div className="input__group">
          <label htmlFor="email">Seu E-mail</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            id="email"
            placeholder="Seu E-mail"
          />
        </div>
        <div className="input__group">
          <label htmlFor="which">O que você gostaria</label>
          <select name="which" id="which">
            <option value="">Select One</option>
            <option value="">Select Two</option>
            <option value="">Select Three</option>
          </select>
        </div>
        <div className="input__group">
          <label htmlFor="whichs">Name</label>
          <select name="whichs" id="whichs">
            <option value="">Select One</option>
            <option value="">Select Two</option>
            <option value="">Select Three</option>
          </select>
        </div>
        <div className="input__group">
          <label htmlFor="textarea">Message</label>
          <textarea
            name="textArea"
            id="textarea"
            value={message}
            onChange={({ target }) => setMessage(target.value)}
            cols={30}
            rows={10}
          ></textarea>
        </div>
        <button type='submit'>Vamos lá</button>
      </div>
    </FormContainer>
  );
};
