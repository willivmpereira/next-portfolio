import { FormContainer } from './styles';

export const Form = () => {
  return (
    <FormContainer>
      <div className="display">
        <div className="input__group">
          <label htmlFor="name">Seu Nome</label>
          <input type="text" name="name" id="name" placeholder="Seu nome" />
        </div>
        <div className="input__group">
          <label htmlFor="email">Seu E-mail</label>
          <input type="email" name="email" id="email" placeholder="Seu E-mail" />
        </div>
        <div className="input__group">
          <label htmlFor="which">What would you like</label>
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
          <textarea name="textArea" id="textarea" cols={30} rows={10}></textarea>
        </div>
        <button>Vamos lá</button>
      </div>
    </FormContainer>
  );
};
