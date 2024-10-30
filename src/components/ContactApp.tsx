import React from "react";
import { ContactList } from "./ContactList";
import { getData } from "../data";
import { contacts } from "../type";
import "../styles/style.css";

function ContactApp() {
  const rawContacts: contacts = getData();
  const [contacts, setContacts] = React.useState<contacts>(rawContacts);
  function deleteContact(id: number) {
    const filteredContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(filteredContacts);
  }
  return (
    <div className="contact-app">
      <h1>Daftar Kontak</h1>
      <ContactList contacts={contacts} onDelete={deleteContact} />
    </div>
  );
}

export { ContactApp };
