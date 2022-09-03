import { useState } from 'react';
import contactsData from '../contacts.json';

function ContactsList() {
  const [contacts, setContacts] = useState(contactsData.slice(0, 5));

  const handleAddRandomContact = () => {
    alert("añadir contacto")
  };

  return (
  <div>
          <button onClick={handleAddRandomContact} className='btn btn-sm btn-primary'>Add random contact</button>
    <table className='table' >
        <thead>
            <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
                <th>Won Oscar</th>
            </tr>
        </thead>
        <tbody>
          {contacts.map((contact)=> (
                 <tr>
                 <td>
                   <img width="100px" src={contact.pictureUrl} alt="pictureUrl" />
                 </td>
                 <td>{contact.name}</td>
                 <td>{contact.popularity.toFixed(2)}</td>
                 <td>{contact.wonOscar && "🏆"}</td>
   
   
               </tr>
   



          ))}
         
        </tbody>
    </table>
  </div>
  );
}

export default ContactsList;