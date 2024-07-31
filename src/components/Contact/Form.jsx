import { useState } from 'react';
import './style.css';
const Form = () => {
   const [firstName, setFirstName] = useState();
   const [lastName, setLastName] = useState();
   const [email, setEmail] = useState();
   const [phone, setPhone] = useState();

   return (
      <form className="formContact" action="" method="POST">
         <input name="firstName" type="text" placeholder="First Name" />
         <input name="lastName" type="text" placeholder="Last Name" />
         <input name="email" type="email" placeholder=" Email" />
         <input name="phone" type="number" placeholder="Phone" />
         <textarea></textarea>
         <button type="submit">Send</button>
      </form>
   );
};

export default Form;
