import { Form } from './Form';
import { ContactContent } from './styles';

export const Contact = () => {
  return (
    <ContactContent>
      <div className="container">
        <div className="display">
          <div className="line">
            <div className="liner"></div>
          </div>
          <div className="content">
            <h2>Adoraria ouvir de você! Entre em contato <span>👋</span></h2>
            <Form/>
          </div>
        </div>
      </div>
    </ContactContent>
  );
};
