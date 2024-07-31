import { useState } from 'react';
import './style.css';
const Form = () => {
   const [firstName, setFirstName] = useState('');
   const [lastName, setLastName] = useState('');
   const [email, setEmail] = useState('');
   const [phone, setPhone] = useState('');
  
   return (
      <form className="formContact" action="" method="POST">
         <input name="firstName" type="text" placeholder="First Name" onChange={(e) => {setFirstName(e.target.value)}} value={firstName} />
         <input name="lastName" type="text" placeholder="Last Name" onChange={(e) => {setLastName(e.target.value)}} value={lastName}/>
         <input name="email" type="email" placeholder=" Email" onChange={(e) => {setEmail(e.target.value)}} value={email}/>
         <input name="phone" type="number" placeholder="Phone" onChange={(e) => {setPhone(e.target.value)}} value={phone} />
         <textarea placeholder="Message" style={{height: 171}}></textarea>
         <button className="submit-btn" type="submit">
            Send
         </button>
      </form>
   );
};

export default Form;
