import React from "react";
import { ContactItem } from "./ContactItem";
import { contacts } from "./type";

function ContactList({ contacts }: { contacts: contacts }) {
  return (
    <div className="contact-list">
      {contacts.map((contact) => (
        <ContactItem key={contact.id} {...contact} />
      ))}
    </div>
  );
}

export { ContactList };
