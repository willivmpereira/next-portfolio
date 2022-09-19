import { FormContainer } from './styles';

export const Form = () => {
  return (
    <FormContainer>
      <div className="display">
        <div className="input__group">
          <label htmlFor="">Your Name</label>
          <input type="text" name="name" id="" placeholder="Your name" />
        </div>
        <div className="input__group">
          <label htmlFor="">Your email</label>
          <input type="email" name="email" id="" placeholder="Your email" />
        </div>
        <div className="input__group">
          <label htmlFor="">What would you like</label>
          <select name="#" id="#">
            <option value="">Select One</option>
            <option value="">Select Two</option>
            <option value="">Select Three</option>
          </select>
        </div>
        <div className="input__group">
          <label htmlFor="">Name</label>
          <select name="#" id="#">
            <option value="">Select One</option>
            <option value="">Select Two</option>
            <option value="">Select Three</option>
          </select>
        </div>
        <div className="input__group">
          <label htmlFor="">Message</label>
          <textarea name="textArea" id="" cols={30} rows={10}></textarea>
        </div>
        <button>Just Send</button>
      </div>
    </FormContainer>
  );
};
