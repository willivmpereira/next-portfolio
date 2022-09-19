import { Form } from './Form';
import { ContactContent } from './styles';

export const Contact = () => {
  return (
    <ContactContent>
      <div className="container">
        <div className="content">
          <h2>Adoraria ouvir de você, entre em contato <span>👋</span></h2>
          <Form/>
        </div>
      </div>
    </ContactContent>
  );
};
