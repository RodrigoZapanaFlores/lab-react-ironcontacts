import { useState } from 'react';
import contactsData from '../contacts.json';

function ContactsList() {
  const [contacts, setContacts] = useState(contactsData.slice(0, 5));

  const handleAddRandomContact = () => {
    const pendingContacts = contactsData.filter((c) => !contacts.includes(c));
    const random = pendingContacts[Math.floor(pendingContacts.length * Math.random())];
    if (random) {
      setContacts([random, ...contacts]);
    }
    
  };

  const handleSortByPopularity = () => {
    setContacts([...contacts.sort((b, a) => b.popularity - a.popularity)]);
  };

  const handleDelete = (contact) => {
    setContacts(
      contacts.filter(x => contact !== x)
    )
  }

  return (
  <div>
    <button onClick={handleAddRandomContact} className='btn btn-sm btn-primary'>Add random contact</button>
    <button onClick={handleSortByPopularity} className='btn btn-sm btn-primary'>ASort by popularity</button>

    <table className='table' >
        <thead>
            <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
                <th>Won Oscar</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
          {contacts.map((contact)=> (
                 <tr key={contact.id}>
                 <td>
                   <img width="100px" src={contact.pictureUrl} alt="pictureUrl" />
                 </td>
                 <td>{contact.name}</td>
                 <td>{contact.popularity.toFixed(2)}</td>
                 <td>{contact.wonOscar && "🏆"}</td>
                 <td><button onClick={() => handleDelete(contact)} className='btn btn-danger btn-sm'>delete</button></td>
   
   
               </tr>
   



          ))}
         
        </tbody>
    </table>
  </div>
  );
}

export default ContactsList;