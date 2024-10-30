import React from "react";
import { ContactItem } from "./ContactItem";
import { contacts } from "../type";

function ContactList({ contacts, onDelete }: { contacts: contacts; onDelete: (id: number) => void }) {
  return (
    <div className="contact-list">
      {contacts.map((contact) => (
        <ContactItem key={contact.id} {...contact} onDelete={onDelete} />
      ))}
    </div>
  );
}

export { ContactList };
